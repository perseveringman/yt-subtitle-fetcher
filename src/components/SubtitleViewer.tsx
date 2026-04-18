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

interface Props {
  channel: string;
  filename: string;
}

interface Frontmatter {
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

interface Heading {
  level: number;
  text: string;
  id: string;
}

function parseFrontmatter(raw: string): { meta: Frontmatter; body: string } {
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

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function nodeToText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return nodeToText(props?.children);
  }
  return "";
}

function extractHeadings(body: string): Heading[] {
  const headings: Heading[] = [];
  const used = new Map<string, number>();
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].trim();
    let id = slugify(text);
    if (!id) id = `heading-${headings.length + 1}`;
    const count = used.get(id) ?? 0;
    used.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;
    headings.push({ level, text, id });
  }
  return headings;
}

function stripMarkdown(body: string): string {
  return body
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~`]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatNumber(value: string | undefined): string | null {
  if (!value) return null;
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  return new Intl.NumberFormat("en-US").format(n);
}

function formatDate(value: string | undefined): string | null {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function youtubeWatchUrl(meta: Frontmatter): string | null {
  if (meta.video_url) return meta.video_url;
  if (meta.video_id) return `https://www.youtube.com/watch?v=${meta.video_id}`;
  return null;
}

function youtubeThumbnail(meta: Frontmatter): string | null {
  if (!meta.video_id) return null;
  return `https://i.ytimg.com/vi/${meta.video_id}/hqdefault.jpg`;
}

export default function SubtitleViewer({ channel, filename }: Props) {
  const [state, setState] = useState<{
    content: string | null;
    loading: boolean;
  }>({ content: null, loading: true });
  const [viewMode, setViewMode] = useState<"rendered" | "raw">("rendered");
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [tocOpen, setTocOpen] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    setState({ content: null, loading: true });
    setActiveId(null);
    setProgress(0);

    const loadRecord = async () => {
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

    void loadRecord();
    return () => {
      cancelled = true;
    };
  }, [channel, filename]);

  const { meta, body } = useMemo(
    () => (state.content ? parseFrontmatter(state.content) : { meta: {}, body: "" }),
    [state.content]
  );

  const headings = useMemo(() => extractHeadings(body), [body]);

  const stats = useMemo(() => {
    const text = stripMarkdown(body);
    const words = text ? text.split(/\s+/).length : 0;
    const minutes = Math.max(1, Math.round(words / 220));
    return { words, minutes };
  }, [body]);

  const watchUrl = youtubeWatchUrl(meta);
  const thumb = youtubeThumbnail(meta);
  const title = meta.title || filename.replace(/\.md$/i, "");

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

  const handleCopyText = useCallback(async () => {
    if (!body) return;
    try {
      await navigator.clipboard.writeText(stripMarkdown(body));
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1500);
    } catch {
      // ignore
    }
  }, [body]);

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
  }, [state.content]);

  // Scroll-spy for TOC
  useEffect(() => {
    if (!state.content || headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, state.content, viewMode]);

  const handleTocClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveId(id);
      }
    },
    []
  );

  const renderHeading = (level: number) => {
    const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    const Component = ({ children }: { children?: ReactNode }) => {
      const text = nodeToText(children);
      const id = slugify(text) || `heading-${Math.random().toString(36).slice(2, 8)}`;
      return (
        <Tag id={id} className="group scroll-mt-20 relative">
          <a
            href={`#${id}`}
            className="absolute -left-5 top-1/2 -translate-y-1/2 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity no-underline"
            aria-label="Anchor link"
            onClick={(e) => {
              e.preventDefault();
              const url = `${window.location.pathname}${window.location.search}#${id}`;
              window.history.replaceState(null, "", url);
              navigator.clipboard?.writeText(window.location.href).catch(() => {});
            }}
          >
            #
          </a>
          {children}
        </Tag>
      );
    };
    Component.displayName = `MdHeading${level}`;
    return Component;
  };

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

  if (!state.content) {
    return (
      <div className="text-center py-16 text-zinc-500">
        Video record not found
      </div>
    );
  }

  const metaChips: { label: string; value: string }[] = [];
  const channelLabel = meta.channel_name || meta.uploader_id;
  if (channelLabel) metaChips.push({ label: "Channel", value: channelLabel });
  const published = formatDate(meta.published_at) || formatDate(meta.upload_date);
  if (published) metaChips.push({ label: "Published", value: published });
  if (meta.duration_human)
    metaChips.push({ label: "Duration", value: meta.duration_human });
  const views = formatNumber(meta.view_count);
  if (views) metaChips.push({ label: "Views", value: views });
  const likes = formatNumber(meta.like_count);
  if (likes) metaChips.push({ label: "Likes", value: likes });
  if (meta.language)
    metaChips.push({ label: "Language", value: meta.language.toUpperCase() });
  metaChips.push({
    label: "Reading",
    value: `${stats.minutes} min · ${formatNumber(String(stats.words)) ?? stats.words} words`,
  });

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

      <div className="flex gap-6 items-start">
        {/* Main content */}
        <article
          ref={articleRef}
          className="flex-1 min-w-0 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
        >
          {/* Header / meta card */}
          <header className="p-5 sm:p-7 border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-900/40">
            <div className="flex gap-5">
              {thumb && (
                <a
                  href={watchUrl ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 w-40 sm:w-56 aspect-video rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors group relative bg-zinc-950"
                  aria-label="Watch on YouTube"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumb}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
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
                  {metaChips.map((chip) => (
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
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M23 12s0-3.7-.5-5.5c-.3-1-1-1.8-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5c-1 .2-1.7 1-2 2C1 8.3 1 12 1 12s0 3.7.5 5.5c.3 1 1 1.8 2 2 1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5c1-.2 1.7-1 2-2 .5-1.8.5-5.5.5-5.5zM10 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* Toolbar */}
          <div className="sticky top-1 z-10 flex flex-wrap items-center gap-1 px-4 sm:px-6 py-2 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
            <div className="flex rounded-md overflow-hidden border border-zinc-700 text-xs">
              <button
                onClick={() => setViewMode("rendered")}
                className={`px-2.5 py-1 transition-colors ${
                  viewMode === "rendered"
                    ? "bg-zinc-700 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                Rendered
              </button>
              <button
                onClick={() => setViewMode("raw")}
                className={`px-2.5 py-1 transition-colors ${
                  viewMode === "raw"
                    ? "bg-zinc-700 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                Raw
              </button>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <button
                onClick={() => setTocOpen((v) => !v)}
                className="hidden lg:inline-flex text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                title="Toggle outline"
              >
                {tocOpen ? "Hide outline" : "Show outline"}
              </button>
              <button
                onClick={handleCopyText}
                className="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                title="Copy plain text"
              >
                Copy text
              </button>
              <button
                onClick={handleCopyMarkdown}
                className="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                title="Copy markdown"
              >
                {copyState === "copied" ? "Copied ✓" : "Copy MD"}
              </button>
              <button
                onClick={handleDownload}
                className="text-xs px-2.5 py-1 rounded-md border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                title="Download .md"
              >
                Download
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8">
            {viewMode === "rendered" ? (
              <div
                className="prose prose-invert prose-sm sm:prose-base max-w-none
                  prose-headings:text-zinc-100 prose-headings:font-semibold prose-headings:scroll-mt-20
                  prose-h1:text-2xl prose-h1:mt-0 prose-h1:mb-4 prose-h1:pb-2 prose-h1:border-b prose-h1:border-zinc-800
                  prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
                  prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
                  prose-p:text-zinc-300 prose-p:leading-relaxed
                  prose-li:text-zinc-300 prose-li:my-1
                  prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words
                  prose-strong:text-zinc-100
                  prose-blockquote:border-l-2 prose-blockquote:border-red-500/60 prose-blockquote:bg-zinc-800/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r prose-blockquote:text-zinc-300 prose-blockquote:not-italic
                  prose-hr:border-zinc-800
                  prose-code:text-rose-300 prose-code:bg-zinc-800/70 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:font-normal
                  prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-table:text-sm prose-th:text-zinc-200 prose-td:text-zinc-300 prose-th:border-zinc-700 prose-td:border-zinc-800"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: renderHeading(1),
                    h2: renderHeading(2),
                    h3: renderHeading(3),
                    h4: renderHeading(4),
                    h5: renderHeading(5),
                    h6: renderHeading(6),
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
                  {body}
                </ReactMarkdown>
              </div>
            ) : (
              <pre className="text-xs sm:text-sm text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap break-words font-mono leading-relaxed">
                {state.content}
              </pre>
            )}
          </div>
        </article>

        {/* TOC sidebar */}
        {tocOpen && headings.length > 0 && viewMode === "rendered" && (
          <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto pr-1">
            <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2 px-2">
              On this page
            </div>
            <nav className="space-y-0.5">
              {headings.map((h) => {
                const indent = Math.min(h.level - 1, 3) * 12;
                const isActive = activeId === h.id;
                return (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    onClick={(e) => handleTocClick(e, h.id)}
                    style={{ paddingLeft: 8 + indent }}
                    className={`block text-xs py-1 pr-2 rounded border-l-2 transition-colors truncate ${
                      isActive
                        ? "border-red-500 text-white bg-zinc-800/60"
                        : "border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                    }`}
                    title={h.text}
                  >
                    {h.text}
                  </a>
                );
              })}
            </nav>
          </aside>
        )}
      </div>
    </div>
  );
}
