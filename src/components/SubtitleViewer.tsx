"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  formatDate,
  formatNumber,
  parseRecord,
  readingStats,
  youtubeThumbnail,
  youtubeWatchUrl,
  type Chapter,
  type ParsedRecord,
} from "@/lib/markdown-record";

interface Props {
  channel: string;
  filename: string;
}

type Tab = "overview" | "chapters" | "transcript" | "raw";

const PRETTY_LABELS: Record<string, string> = {
  source: "Source",
  source_type: "Source type",
  channel_name: "Channel",
  channel_id: "Channel ID",
  uploader_id: "Uploader",
  uploader_url: "Uploader URL",
  video_url: "Video URL",
  video_id: "Video ID",
  duration: "Duration",
  duration_human: "Duration",
  view_count: "Views",
  like_count: "Likes",
  has_subtitle: "Has subtitle",
  language: "Language",
  availability: "Availability",
  tags: "Tags",
  categories: "Categories",
  upload_date: "Upload date",
  published_at: "Published",
  fetched_at: "Fetched",
  archive_version: "Archive version",
};

function pretty(key: string): string {
  return (
    PRETTY_LABELS[key] ??
    key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

function formatValue(key: string, value: string): string {
  if (key.endsWith("_at") || key === "fetched_at" || key === "published_at") {
    const f = formatDate(value);
    if (f) return f;
  }
  if (key.includes("count")) {
    const n = formatNumber(value);
    if (n) return n;
  }
  return value;
}

function isUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function paragraphsFrom(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.replace(/\s+\n/g, " ").trim())
    .filter(Boolean);
}

function transcriptParagraphs(text: string): string[] {
  if (!text) return [];
  return text
    .split(/\n{2,}/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

export default function SubtitleViewer({ channel, filename }: Props) {
  const [state, setState] = useState<{
    content: string | null;
    loading: boolean;
  }>({ content: null, loading: true });
  const [tab, setTab] = useState<Tab>("overview");
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      setState({ content: null, loading: true });
      setTab("overview");
      setProgress(0);
    });
    const load = async () => {
      try {
        const res = await fetch(
          `/api/channels/${encodeURIComponent(channel)}/videos/${encodeURIComponent(filename)}`
        );
        const data = await res.json();
        if (!cancelled) {
          setState({
            content:
              res.ok && typeof data.content === "string" ? data.content : null,
            loading: false,
          });
        }
      } catch {
        if (!cancelled) setState({ content: null, loading: false });
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [channel, filename]);

  const record: ParsedRecord | null = useMemo(
    () => (state.content ? parseRecord(state.content) : null),
    [state.content]
  );

  const stats = useMemo(
    () => (record ? readingStats(record.transcript) : { words: 0, minutes: 0 }),
    [record]
  );

  // Reading progress
  useEffect(() => {
    if (!state.content) return;
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.scrollHeight - window.innerHeight);
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      setProgress(Math.round((scrolled / total) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [state.content, tab]);

  const handleCopyMarkdown = useCallback(async () => {
    if (!state.content) return;
    try {
      await navigator.clipboard.writeText(state.content);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      // ignore
    }
  }, [state.content]);

  const handleCopyTranscript = useCallback(async () => {
    if (!record?.transcript) return;
    try {
      await navigator.clipboard.writeText(record.transcript);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      // ignore
    }
  }, [record]);

  const handleDownload = useCallback(() => {
    if (!state.content) return;
    const blob = new Blob([state.content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename.endsWith(".md") ? filename : `${filename}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }, [state.content, filename]);

  if (state.loading) {
    return (
      <div className="flex items-center justify-center py-16 text-zinc-500">
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Loading...
      </div>
    );
  }

  if (!state.content || !record) {
    return (
      <div className="text-center py-16 text-zinc-500">
        Video record not found
      </div>
    );
  }

  const { meta, summaryExtras, description, externalLinks, sponsors, chapters } =
    record;
  const watchUrl = youtubeWatchUrl(meta);
  const thumb = youtubeThumbnail(meta);
  const title = meta.title || filename.replace(/\.md$/i, "");

  // Chips for header
  const chips: { label: string; value: string }[] = [];
  const channelLabel = meta.channel_name || meta.uploader_id;
  if (channelLabel) chips.push({ label: "Channel", value: channelLabel });
  const published = formatDate(meta.published_at) || formatDate(meta.upload_date);
  if (published) chips.push({ label: "Published", value: published });
  if (meta.duration_human) chips.push({ label: "Duration", value: meta.duration_human });
  const views = formatNumber(meta.view_count);
  if (views) chips.push({ label: "Views", value: views });
  const likes = formatNumber(meta.like_count);
  if (likes) chips.push({ label: "Likes", value: likes });
  if (meta.language)
    chips.push({ label: "Language", value: meta.language.toUpperCase() });
  if (stats.words > 0)
    chips.push({
      label: "Reading",
      value: `${stats.minutes} min · ${formatNumber(String(stats.words)) ?? stats.words} words`,
    });

  const tabs: { id: Tab; label: string; count?: number; show: boolean }[] = [
    { id: "overview", label: "Overview", show: true },
    {
      id: "chapters",
      label: "Chapters",
      count: chapters.length,
      show: chapters.length > 0,
    },
    {
      id: "transcript",
      label: "Transcript",
      show: record.transcript.length > 0,
    },
    { id: "raw", label: "Raw", show: true },
  ];

  return (
    <div className="relative">
      {/* Reading progress bar */}
      <div className="sticky top-0 z-20 -mx-1 mb-3">
        <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-rose-400 transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <article
        ref={articleRef}
        className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
      >
        {/* Header */}
        <header className="p-5 sm:p-7 border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-900/40">
          <div className="flex gap-5">
            {thumb && (
              <a
                href={watchUrl ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 w-40 sm:w-56 aspect-video rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors group relative bg-zinc-950"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumb}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white ml-0.5"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            )}
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                {title}
              </h1>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                  >
                    <span className="text-zinc-500 mr-1">{chip.label}</span>
                    {chip.value}
                  </span>
                ))}
              </div>
              {watchUrl && (
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-red-400 hover:text-red-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M23 12s0-3.7-.5-5.5c-.3-1-1-1.8-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5c-1 .2-1.7 1-2 2C1 8.3 1 12 1 12s0 3.7.5 5.5c.3 1 1 1.8 2 2 1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5c1-.2 1.7-1 2-2 .5-1.8.5-5.5.5-5.5zM10 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                  Watch on YouTube
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Tabs + toolbar */}
        <div className="sticky top-1 z-10 flex flex-wrap items-center gap-1 px-3 sm:px-5 py-2 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
          <nav className="flex flex-wrap gap-0.5">
            {tabs
              .filter((t) => t.show)
              .map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                      active
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                    }`}
                  >
                    {t.label}
                    {typeof t.count === "number" && (
                      <span
                        className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded ${
                          active
                            ? "bg-zinc-700 text-zinc-200"
                            : "bg-zinc-800 text-zinc-500"
                        }`}
                      >
                        {t.count}
                      </span>
                    )}
                  </button>
                );
              })}
          </nav>
          <div className="ml-auto flex items-center gap-1">
            {tab === "transcript" && record.transcript && (
              <button
                onClick={handleCopyTranscript}
                className="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              >
                {copyState === "copied" ? "Copied ✓" : "Copy transcript"}
              </button>
            )}
            <button
              onClick={handleCopyMarkdown}
              className="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              title="Copy raw markdown"
            >
              Copy MD
            </button>
            <button
              onClick={handleDownload}
              className="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              Download
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7">
          {tab === "overview" && (
            <OverviewTab
              meta={meta}
              summaryExtras={summaryExtras}
              description={description}
              externalLinks={externalLinks}
              sponsors={sponsors}
              hasChapters={chapters.length > 0}
              onJumpToChapters={() => setTab("chapters")}
            />
          )}
          {tab === "chapters" && (
            <ChaptersTab chapters={chapters} videoId={meta.video_id} />
          )}
          {tab === "transcript" && (
            <TranscriptTab text={record.transcript} />
          )}
          {tab === "raw" && (
            <pre className="text-xs sm:text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap break-words font-mono leading-relaxed">
              {state.content}
            </pre>
          )}
        </div>
      </article>
    </div>
  );
}

/* ----------------------------- Tab: Overview ----------------------------- */

interface OverviewProps {
  meta: ParsedRecord["meta"];
  summaryExtras: ParsedRecord["summaryExtras"];
  description: string;
  externalLinks: ParsedRecord["externalLinks"];
  sponsors: string[];
  hasChapters: boolean;
  onJumpToChapters: () => void;
}

function OverviewTab({
  meta,
  summaryExtras,
  description,
  externalLinks,
  sponsors,
  hasChapters,
  onJumpToChapters,
}: OverviewProps) {
  const descParas = paragraphsFrom(description);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Left: description + sponsors */}
      <div className="lg:col-span-2 space-y-5 min-w-0">
        {descParas.length > 0 && (
          <Section title="Description">
            <div
              className="prose prose-invert prose-sm sm:prose-base max-w-none
                prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:my-2
                prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words"
            >
              {descParas.map((p, i) => (
                <ReactMarkdown
                  key={i}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href, children, ...rest }) => (
                      <a
                        href={href}
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noreferrer" : undefined}
                        {...rest}
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {p}
                </ReactMarkdown>
              ))}
            </div>
          </Section>
        )}

        {hasChapters && (
          <button
            onClick={onJumpToChapters}
            className="text-sm text-red-400 hover:text-red-300 inline-flex items-center gap-1"
          >
            View all chapters →
          </button>
        )}

        {sponsors.length > 0 && (
          <Section title="Sponsors" subtitle={`${sponsors.length} mentioned`}>
            <ul className="space-y-2">
              {sponsors.map((s, i) => (
                <li
                  key={i}
                  className="rounded-md border border-zinc-800 bg-zinc-950/40 p-3 text-sm text-zinc-300 leading-relaxed"
                >
                  <LinkifiedText text={s} />
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {/* Right: metadata + links */}
      <aside className="space-y-5 min-w-0">
        {externalLinks.length > 0 && (
          <Section title="Listen / Read elsewhere">
            <ul className="space-y-1.5">
              {externalLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-zinc-950/60 border border-zinc-800 hover:border-zinc-600 transition-colors text-sm group"
                  >
                    <span className="text-zinc-200 truncate">{link.label}</span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Metadata">
          <dl className="text-xs divide-y divide-zinc-800 rounded-md border border-zinc-800 overflow-hidden">
            {renderMetaRows(meta, summaryExtras)}
          </dl>
        </Section>
      </aside>
    </div>
  );
}

function renderMetaRows(
  meta: ParsedRecord["meta"],
  summaryExtras: ParsedRecord["summaryExtras"]
) {
  const skip = new Set([
    "title",
    "video_url",
    "video_id",
    "channel_id",
    "uploader_id",
    "channel_name",
    "duration_seconds",
    "duration_human",
    "view_count",
    "like_count",
    "language",
    "published_at",
    "upload_date",
    "has_subtitle",
  ]);
  const rows: { key: string; value: string }[] = [];

  // Identifiers first
  if (meta.video_id) rows.push({ key: "video_id", value: meta.video_id });
  if (meta.channel_id) rows.push({ key: "channel_id", value: meta.channel_id });
  if (meta.uploader_id) rows.push({ key: "uploader_id", value: meta.uploader_id });

  // Other frontmatter
  for (const [key, value] of Object.entries(meta)) {
    if (!value || skip.has(key)) continue;
    if (key === "video_id" || key === "channel_id" || key === "uploader_id") continue;
    rows.push({ key, value });
  }

  // Summary extras (uploader_url, tags, categories, ...)
  for (const { key, value } of summaryExtras) {
    rows.push({ key, value });
  }

  return rows.map(({ key, value }) => (
    <div
      key={key + value}
      className="grid grid-cols-[110px_1fr] gap-2 px-3 py-1.5 bg-zinc-950/40"
    >
      <dt className="text-zinc-500 truncate">{pretty(key)}</dt>
      <dd className="text-zinc-200 break-words min-w-0">
        {isUrl(value) ? (
          <a
            href={value}
            target="_blank"
            rel="noreferrer"
            className="text-red-400 hover:underline break-all"
          >
            {value.replace(/^https?:\/\//, "")}
          </a>
        ) : (
          formatValue(key, value)
        )}
      </dd>
    </div>
  ));
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          {title}
        </h3>
        {subtitle && <span className="text-[11px] text-zinc-500">{subtitle}</span>}
      </div>
      {children}
    </section>
  );
}

function LinkifiedText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const regex = /(https?:\/\/[^\s)]+)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={i++}
        href={match[1]}
        target="_blank"
        rel="noreferrer"
        className="text-red-400 hover:underline break-all"
      >
        {match[1].replace(/^https?:\/\//, "")}
      </a>
    );
    lastIndex = match.index + match[1].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

/* ----------------------------- Tab: Chapters ----------------------------- */

function ChaptersTab({
  chapters,
  videoId,
}: {
  chapters: Chapter[];
  videoId?: string;
}) {
  if (chapters.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-500 text-sm">
        No chapters found in this episode.
      </div>
    );
  }
  return (
    <ol className="divide-y divide-zinc-800 rounded-md border border-zinc-800 overflow-hidden">
      {chapters.map((chapter, i) => {
        const link = videoId
          ? `https://www.youtube.com/watch?v=${videoId}&t=${chapter.seconds}s`
          : null;
        const Inner = (
          <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-800/50 transition-colors">
            <span className="text-[11px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 w-20 text-center flex-shrink-0">
              {chapter.time}
            </span>
            <span className="text-sm text-zinc-200 flex-1 min-w-0">
              {chapter.label}
            </span>
            {link && (
              <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">
                ↗
              </span>
            )}
          </div>
        );
        return (
          <li key={i} className="bg-zinc-950/40">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                {Inner}
              </a>
            ) : (
              Inner
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ----------------------------- Tab: Transcript ----------------------------- */

function TranscriptTab({ text }: { text: string }) {
  const [query, setQuery] = useState("");
  const paragraphs = useMemo(() => transcriptParagraphs(text), [text]);

  const filtered = useMemo(() => {
    if (!query.trim()) return paragraphs;
    const q = query.toLowerCase();
    return paragraphs.filter((p) => p.toLowerCase().includes(q));
  }, [paragraphs, query]);

  if (paragraphs.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-500 text-sm">
        No transcript available.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search inside transcript…"
          className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
        />
        {query && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-zinc-500">
            {filtered.length} / {paragraphs.length}
          </span>
        )}
      </div>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-p:text-zinc-300 prose-p:leading-relaxed">
        {filtered.map((p, i) => (
          <p key={i}>{highlight(p, query)}</p>
        ))}
        {filtered.length === 0 && (
          <p className="text-zinc-500 text-sm">No matches.</p>
        )}
      </div>
    </div>
  );
}

function highlight(text: string, query: string): ReactNode {
  if (!query.trim()) return text;
  const q = query.trim();
  const lower = text.toLowerCase();
  const ql = q.toLowerCase();
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < text.length) {
    const idx = lower.indexOf(ql, i);
    if (idx === -1) {
      out.push(text.slice(i));
      break;
    }
    if (idx > i) out.push(text.slice(i, idx));
    out.push(
      <mark
        key={key++}
        className="bg-yellow-500/30 text-yellow-200 rounded px-0.5"
      >
        {text.slice(idx, idx + q.length)}
      </mark>
    );
    i = idx + q.length;
  }
  return <>{out}</>;
}
