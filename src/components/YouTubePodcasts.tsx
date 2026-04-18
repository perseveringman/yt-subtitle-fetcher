"use client";

import { useEffect, useState } from "react";
import { YOUTUBE_PODCASTS, type YoutubePodcast } from "@/lib/youtube-podcasts";

interface Props {
  onArchived?: () => void;
}

type Status = "idle" | "loading" | "done" | "error";

interface YoutubePodcastWithAvatar extends YoutubePodcast {
  avatarUrl: string | null;
}

function initials(name: string): string {
  const cleaned = name.replace(/[^A-Za-z0-9 ]/g, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

const PALETTE = [
  "bg-rose-700",
  "bg-orange-700",
  "bg-amber-700",
  "bg-emerald-700",
  "bg-teal-700",
  "bg-sky-700",
  "bg-indigo-700",
  "bg-purple-700",
  "bg-pink-700",
  "bg-red-700",
  "bg-lime-700",
  "bg-cyan-700",
];

function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length];
}

export default function YouTubePodcasts({ onArchived }: Props) {
  const [statusByUrl, setStatusByUrl] = useState<Record<string, Status>>({});
  const [errorByUrl, setErrorByUrl] = useState<Record<string, string>>({});
  const [podcasts, setPodcasts] = useState<YoutubePodcastWithAvatar[]>(
    YOUTUBE_PODCASTS.map((podcast) => ({ ...podcast, avatarUrl: null }))
  );

  useEffect(() => {
    let cancelled = false;
    const loadAvatars = async () => {
      try {
        const res = await fetch("/api/youtube-podcasts");
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled && Array.isArray(data?.podcasts)) {
          setPodcasts(data.podcasts as YoutubePodcastWithAvatar[]);
        }
      } catch {
        // Keep fallback initials avatars
      }
    };
    void loadAvatars();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleArchive = async (podcast: YoutubePodcast) => {
    setStatusByUrl((prev) => ({ ...prev, [podcast.url]: "loading" }));
    setErrorByUrl((prev) => ({ ...prev, [podcast.url]: "" }));
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sourceUrl: podcast.url }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || `Failed (${res.status})`);
      }
      setStatusByUrl((prev) => ({ ...prev, [podcast.url]: "done" }));
      onArchived?.();
    } catch (error) {
      setStatusByUrl((prev) => ({ ...prev, [podcast.url]: "error" }));
      setErrorByUrl((prev) => ({
        ...prev,
        [podcast.url]:
          error instanceof Error ? error.message : "Failed to start task.",
      }));
    }
  };

  return (
    <div>
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
          Popular YouTube podcasts
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          Hand-picked YouTube channels. Click Archive to fetch them with the
          existing YouTube downloader.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {podcasts.map((podcast) => {
          const status = statusByUrl[podcast.url] ?? "idle";
          const error = errorByUrl[podcast.url];
          return (
            <li
              key={podcast.url}
              className="flex gap-3 p-3 rounded-md border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              {podcast.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={podcast.avatarUrl}
                  alt={podcast.name}
                  className="w-12 h-12 rounded object-cover flex-shrink-0"
                />
              ) : (
                <div
                  className={`w-12 h-12 rounded flex-shrink-0 flex items-center justify-center text-white font-bold text-sm ${colorFor(
                    podcast.name
                  )}`}
                >
                  {initials(podcast.name)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-white text-sm font-medium truncate">
                      {podcast.name}
                    </div>
                    <a
                      href={podcast.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-zinc-500 hover:text-zinc-300 truncate block"
                    >
                      {podcast.handle}
                    </a>
                  </div>
                  <button
                    onClick={() => handleArchive(podcast)}
                    disabled={status === "loading" || status === "done"}
                    className={`text-xs font-medium px-2.5 py-1 rounded whitespace-nowrap transition-colors ${
                      status === "done"
                        ? "bg-emerald-700/40 text-emerald-300 cursor-default"
                        : status === "loading"
                          ? "bg-zinc-800 text-zinc-400 cursor-wait"
                          : "bg-red-600 hover:bg-red-500 text-white"
                    }`}
                  >
                    {status === "done"
                      ? "Queued ✓"
                      : status === "loading"
                        ? "…"
                        : "Archive"}
                  </button>
                </div>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {podcast.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {podcast.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                {status === "error" && error && (
                  <p className="text-xs text-red-400 mt-1.5">{error}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
