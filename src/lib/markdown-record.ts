export interface Frontmatter {
  title?: string;
  channel_name?: string;
  channel_id?: string;
  uploader_id?: string;
  video_id?: string;
  video_url?: string;
  published_at?: string;
  upload_date?: string;
  duration_human?: string;
  duration_seconds?: string;
  view_count?: string;
  like_count?: string;
  language?: string;
  has_subtitle?: string;
  fetched_at?: string;
  source?: string;
  source_type?: string;
  availability?: string;
  [key: string]: string | undefined;
}

export interface Chapter {
  time: string;
  seconds: number;
  label: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface ParsedRecord {
  meta: Frontmatter;
  summaryExtras: { key: string; value: string }[];
  description: string;
  externalLinks: ExternalLink[];
  sponsors: string[];
  chapters: Chapter[];
  transcript: string;
  rawBody: string;
}

export function parseFrontmatter(raw: string): {
  meta: Frontmatter;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { meta: {}, body: raw };
  const meta: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) meta[key] = value;
  }
  return { meta, body: raw.slice(match[0].length) };
}

const TRANSCRIPT_MARKER = "<!-- YOUTUBE_TRANSCRIPT_START -->";
const SECTION_SEPARATOR = /^-{10,}\s*$/;

function splitTranscript(body: string): { pre: string; transcript: string } {
  const idx = body.indexOf(TRANSCRIPT_MARKER);
  if (idx === -1) return { pre: body, transcript: "" };
  const pre = body.slice(0, idx);
  let transcript = body.slice(idx + TRANSCRIPT_MARKER.length);
  transcript = transcript.replace(/^\s*##\s+Transcript\s*\r?\n/, "");
  return { pre, transcript };
}

function cleanTranscript(input: string): string {
  if (!input) return "";
  return input
    .replace(/&nbsp;/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function parseTimeToSeconds(time: string): number {
  const parts = time.split(":").map((p) => parseInt(p, 10));
  if (parts.some((n) => Number.isNaN(n))) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] ?? 0;
}

function parseChapters(text: string): Chapter[] {
  const chapters: Chapter[] = [];
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const m = line.match(/^(\d{1,2}(?::\d{2}){1,2})\s*[–\-—:]\s*(.+)$/);
    if (!m) continue;
    chapters.push({
      time: m[1],
      seconds: parseTimeToSeconds(m[1]),
      label: m[2].trim(),
    });
  }
  return chapters;
}

function parseSponsors(text: string): string[] {
  const sponsors: string[] = [];
  let current: string[] = [];
  const flush = () => {
    const joined = current.join(" ").trim();
    if (joined) sponsors.push(joined);
    current = [];
  };
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    if (/^\s*\*\s+/.test(line)) {
      flush();
      current.push(line.replace(/^\s*\*\s+/, "").trim());
    } else if (line.trim() === "") {
      flush();
    } else if (current.length > 0) {
      current.push(line.trim());
    }
  }
  flush();
  return sponsors;
}

const KNOWN_LINK_LABELS = [
  "Apple Podcasts",
  "Spotify",
  "Read the transcript",
  "Transcript",
  "YouTube",
  "Substack",
  "Twitter",
  "Newsletter",
  "Website",
];

function parseExternalLinks(text: string): {
  links: ExternalLink[];
  remaining: string;
} {
  const links: ExternalLink[] = [];
  const keepLines: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^([A-Z][A-Za-z .]{1,40}):\s*(https?:\/\/\S+)\s*$/);
    if (m) {
      const label = m[1].trim();
      const url = m[2].trim();
      const looksLikeLink =
        KNOWN_LINK_LABELS.some((known) =>
          label.toLowerCase().includes(known.toLowerCase())
        ) || /podcast|spotify|apple|youtube/i.test(url);
      if (looksLikeLink) {
        links.push({ label, url });
        continue;
      }
    }
    keepLines.push(line);
  }
  return { links, remaining: keepLines.join("\n").trim() };
}

function findSectionByHeader(
  blocks: string[],
  predicate: (header: string) => boolean
): string | null {
  for (const block of blocks) {
    const firstLine = block.split(/\r?\n/, 1)[0]?.trim() ?? "";
    if (predicate(firstLine)) {
      return block.replace(/^.*\r?\n?/, "").trim();
    }
  }
  return null;
}

function splitBySeparator(text: string): string[] {
  const blocks: string[] = [];
  let current: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    if (SECTION_SEPARATOR.test(line)) {
      if (current.length > 0) blocks.push(current.join("\n").trim());
      current = [];
    } else {
      current.push(line);
    }
  }
  if (current.length > 0) blocks.push(current.join("\n").trim());
  return blocks.filter(Boolean);
}

function extractH2Section(
  body: string,
  headerRegex: RegExp
): { content: string; rest: string } {
  const lines = body.split(/\r?\n/);
  const headerIdx = lines.findIndex((l) => headerRegex.test(l));
  if (headerIdx === -1) return { content: "", rest: body };
  let endIdx = lines.length;
  for (let i = headerIdx + 1; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i]) || /^#\s+/.test(lines[i])) {
      endIdx = i;
      break;
    }
  }
  const content = lines.slice(headerIdx + 1, endIdx).join("\n").trim();
  const rest = [...lines.slice(0, headerIdx), ...lines.slice(endIdx)]
    .join("\n")
    .trim();
  return { content, rest };
}

function parseSummaryList(text: string): { key: string; value: string }[] {
  const out: { key: string; value: string }[] = [];
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*-\s+([^:]+):\s*(.+)$/);
    if (!m) continue;
    const key = m[1].trim();
    const value = m[2].trim();
    if (value && value !== "_none_") out.push({ key, value });
  }
  return out;
}

export function parseRecord(raw: string): ParsedRecord {
  const { meta, body } = parseFrontmatter(raw);
  const { pre, transcript } = splitTranscript(body);

  // Remove top-level title heading from pre
  let working = pre.replace(/^#\s+.+\r?\n+/, "");

  // Extract Video Summary block (## Video Summary)
  const videoSummary = extractH2Section(working, /^##\s+Video Summary\s*$/i);
  working = videoSummary.rest;
  const summaryListAll = parseSummaryList(videoSummary.content);

  // Filter out duplicates already in frontmatter
  const summaryExtras = summaryListAll.filter(({ key }) => {
    const k = key.toLowerCase().replace(/\s+/g, "_");
    return !(k in meta);
  });

  // Extract Description block (## Description)
  const descriptionSection = extractH2Section(
    working,
    /^##\s+Description\s*$/i
  );
  const descBlocks = splitBySeparator(descriptionSection.content);

  // First block: actual description + possibly external links
  const firstBlock = descBlocks[0] ?? "";
  const { links, remaining } = parseExternalLinks(firstBlock);
  const description = remaining;

  // Other blocks: SPONSORS, TIMESTAMPS, etc.
  const sponsorsRaw = findSectionByHeader(descBlocks.slice(1), (h) =>
    /^SPONSORS\s*$/i.test(h)
  );
  const timestampsRaw = findSectionByHeader(descBlocks.slice(1), (h) =>
    /^TIMESTAMPS\s*$/i.test(h)
  );

  const sponsors = sponsorsRaw ? parseSponsors(sponsorsRaw) : [];
  const chapters = timestampsRaw ? parseChapters(timestampsRaw) : [];

  return {
    meta,
    summaryExtras,
    description,
    externalLinks: links,
    sponsors,
    chapters,
    transcript: cleanTranscript(transcript),
    rawBody: body,
  };
}

export function youtubeWatchUrl(meta: Frontmatter, seconds?: number): string | null {
  const base = meta.video_url
    ? meta.video_url
    : meta.video_id
      ? `https://www.youtube.com/watch?v=${meta.video_id}`
      : null;
  if (!base) return null;
  if (!seconds || seconds <= 0) return base;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}t=${seconds}s`;
}

export function youtubeThumbnail(meta: Frontmatter): string | null {
  if (!meta.video_id) return null;
  return `https://i.ytimg.com/vi/${meta.video_id}/hqdefault.jpg`;
}

export function formatNumber(value: string | undefined): string | null {
  if (!value) return null;
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  return new Intl.NumberFormat("en-US").format(n);
}

export function formatDate(value: string | undefined): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function readingStats(text: string): {
  words: number;
  minutes: number;
} {
  if (!text) return { words: 0, minutes: 0 };
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return { words, minutes };
}
