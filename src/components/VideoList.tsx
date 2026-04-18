"use client";

import { useState } from "react";

interface Video {
  id: string;
  title: string;
  status: string;
  hasSubtitle: boolean;
  filename?: string;
  attempts: number;
  lastError?: string;
}

interface Props {
  videos: Video[];
  channelName: string;
  onSelect: (video: Video) => void;
  onRetryMissing: (channelName: string) => Promise<void>;
}

export default function VideoList({
  videos,
  channelName,
  onSelect,
  onRetryMissing,
}: Props) {
  const [retrying, setRetrying] = useState(false);
  const [retryError, setRetryError] = useState("");
  const missingVideos = videos.filter((video) => video.status === "missing");
  const archivedCount = videos.filter((video) => video.status === "archived").length;

  const handleRetryMissing = async () => {
    if (retrying) {
      return;
    }

    setRetryError("");
    setRetrying(true);
    try {
      await onRetryMissing(channelName);
    } catch (error: unknown) {
      setRetryError(error instanceof Error ? error.message : String(error));
    } finally {
      setRetrying(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">{channelName}</h2>
      <p className="text-sm text-zinc-500 mb-4">
        {videos.length} videos · {archivedCount} archived
        {missingVideos.length > 0 ? ` · ${missingVideos.length} missing` : ""}
      </p>

      {missingVideos.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => void handleRetryMissing()}
            disabled={retrying}
            className="mb-2 px-3 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-200 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {retrying ? "Retrying..." : `Retry missing (${missingVideos.length})`}
          </button>
          {retryError && (
            <p className="mb-4 text-sm text-red-400">{retryError}</p>
          )}
        </>
      )}

      {videos.length === 0 ? (
        <p className="text-zinc-500 text-sm py-8 text-center">
          No archived videos found for this channel
        </p>
      ) : (
        <div className="space-y-1">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`rounded-lg border px-4 py-3 text-sm transition-colors ${
                video.filename
                  ? "border-zinc-800 hover:bg-zinc-800/70 group"
                  : "border-zinc-800/60 bg-zinc-900/60"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                    video.filename
                      ? "bg-zinc-800 group-hover:bg-red-600/20"
                      : "bg-zinc-800/70"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-colors ${
                      video.filename
                        ? "text-zinc-500 group-hover:text-red-400"
                        : "text-zinc-600"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  {video.filename ? (
                    <button
                      type="button"
                      onClick={() => onSelect(video)}
                      className="block w-full text-left"
                    >
                      <span className="truncate text-zinc-300 group-hover:text-white transition-colors block">
                        {video.title}
                      </span>
                    </button>
                  ) : (
                    <span className="truncate text-zinc-400 block">{video.title}</span>
                  )}
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 ${
                        video.status === "archived"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {video.status === "archived" ? "Archived" : "Missing"}
                    </span>
                    <span className="text-zinc-500">
                      {video.attempts} attempt{video.attempts !== 1 ? "s" : ""}
                    </span>
                    {video.status === "archived" && (
                      <span className="text-zinc-500">
                        {video.hasSubtitle ? "Subtitle captured" : "No subtitle"}
                      </span>
                    )}
                  </div>
                  {video.lastError && (
                    <p className="mt-2 text-xs text-red-400 break-all">
                      {video.lastError}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
