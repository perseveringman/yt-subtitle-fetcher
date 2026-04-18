"use client";

interface Channel {
  name: string;
  videoCount: number;
}

interface Props {
  channels: Channel[];
  selected: string | null;
  onSelect: (name: string) => void;
}

export default function ChannelSidebar({ channels, selected, onSelect }: Props) {
  return (
    <aside className="w-64 flex-shrink-0">
      <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
        Channels
      </h2>
      {channels.length === 0 ? (
        <p className="text-sm text-zinc-600 py-4">
          No archives yet. Create a task to archive a channel or video.
        </p>
      ) : (
        <nav className="space-y-1">
          {channels.map((ch) => (
            <button
              key={ch.name}
              onClick={() => onSelect(ch.name)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between group ${
                selected === ch.name
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
              }`}
            >
              <span className="truncate">{ch.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  selected === ch.name
                    ? "bg-zinc-700 text-zinc-300"
                    : "bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700 group-hover:text-zinc-400"
                }`}
              >
                {ch.videoCount}
              </span>
            </button>
          ))}
        </nav>
      )}
    </aside>
  );
}
