"use client";

import { useState } from "react";

interface Props {
  onTaskCreated: (task: {
    id: string;
    taskMode: string;
    sourceUrl: string;
    sourceType: string;
    channelName: string;
    status: string;
    totalVideos: number;
    completedVideos: number;
    currentVideo: string;
    activeVideos: string[];
    errors: string[];
    videos: {
      id: string;
      title: string;
      status: string;
      hasSubtitle: boolean;
      filename?: string;
      attempts: number;
      lastError?: string;
    }[];
    stages: {
      id: string;
      label: string;
      status: string;
      detail: string;
      updatedAt: number;
    }[];
    phaseProgress: {
      stageId: string;
      label: string;
      completed: number;
      total: number;
    } | null;
    createdAt: number;
    updatedAt: number;
  }) => void;
}

export default function TaskCreator({ onTaskCreated }: Props) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sourceUrl: url.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to create task");
        return;
      }

      onTaskCreated(data);
      setUrl("");
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-3">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Channel URL/@handle, playlist URL, or single YouTube video link"
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
              Creating...
            </span>
          ) : (
            "Archive Videos"
          )}
        </button>
      </div>
      <p className="text-xs text-zinc-500">
        Supports channels, playlists, and individual YouTube video links.
      </p>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </form>
  );
}
