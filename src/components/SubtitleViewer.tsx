"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  channel: string;
  filename: string;
}

export default function SubtitleViewer({ channel, filename }: Props) {
  const [state, setState] = useState<{ content: string | null; loading: boolean }>({
    content: null,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    const loadRecord = async () => {
      try {
        const res = await fetch(
          `/api/channels/${encodeURIComponent(channel)}/videos/${encodeURIComponent(filename)}`
        );
        const data = await res.json();

        if (!cancelled) {
          setState({
            content: res.ok && typeof data.content === "string" ? data.content : null,
            loading: false,
          });
        }
      } catch {
        if (!cancelled) {
          setState({ content: null, loading: false });
        }
      }
    };

    void loadRecord();

    return () => {
      cancelled = true;
    };
  }, [channel, filename]);

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

  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-3xl">
      <div className="prose prose-invert prose-sm max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-zinc-700 prose-blockquote:text-zinc-400 prose-hr:border-zinc-800 prose-strong:text-zinc-200">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{state.content}</ReactMarkdown>
      </div>
    </article>
  );
}
