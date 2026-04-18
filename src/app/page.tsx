"use client";

import { useState, useEffect, useCallback } from "react";
import TaskCreator from "@/components/TaskCreator";
import TaskProgress from "@/components/TaskProgress";
import ChannelSidebar from "@/components/ChannelSidebar";
import VideoList from "@/components/VideoList";
import SubtitleViewer from "@/components/SubtitleViewer";

interface TaskStage {
  id: string;
  label: string;
  status: string;
  detail: string;
  updatedAt: number;
}

interface TaskPhaseProgress {
  stageId: string;
  label: string;
  completed: number;
  total: number;
}

interface Video {
  id: string;
  title: string;
  status: string;
  hasSubtitle: boolean;
  filename?: string;
  attempts: number;
  lastError?: string;
}

interface Task {
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
  videos: Video[];
  stages: TaskStage[];
  phaseProgress: TaskPhaseProgress | null;
  createdAt: number;
  updatedAt: number;
}

interface Channel {
  name: string;
  videoCount: number;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<{
    channel: string;
    filename: string;
  } | null>(null);
  const [view, setView] = useState<"tasks" | "browse">("tasks");

  const requestTasks = useCallback(async (): Promise<Task[]> => {
    const res = await fetch("/api/tasks");
    return res.ok ? ((await res.json()) as Task[]) : [];
  }, []);

  const requestChannels = useCallback(async (): Promise<Channel[]> => {
    const res = await fetch("/api/channels");
    return res.ok ? ((await res.json()) as Channel[]) : [];
  }, []);

  const requestVideos = useCallback(async (channel: string): Promise<Video[]> => {
    const res = await fetch(
      `/api/channels/${encodeURIComponent(channel)}/videos`
    );
    return res.ok ? ((await res.json()) as Video[]) : [];
  }, []);

  const refreshTasks = useCallback(async () => {
    try {
      setTasks(await requestTasks());
    } catch {
      setTasks([]);
    }
  }, [requestTasks]);

  const refreshChannels = useCallback(async () => {
    try {
      setChannels(await requestChannels());
    } catch {
      setChannels([]);
    }
  }, [requestChannels]);

  const refreshVideos = useCallback(
    async (channel: string) => {
      try {
        setVideos(await requestVideos(channel));
      } catch {
        setVideos([]);
      }
    },
    [requestVideos]
  );

  useEffect(() => {
    let cancelled = false;

    const loadTasks = async () => {
      try {
        const data = await requestTasks();
        if (!cancelled) {
          setTasks(data);
        }
      } catch {
        if (!cancelled) {
          setTasks([]);
        }
      }
    };

    void loadTasks();

    return () => {
      cancelled = true;
    };
  }, [requestTasks]);

  useEffect(() => {
    let cancelled = false;

    const loadChannels = async () => {
      try {
        const data = await requestChannels();
        if (!cancelled) {
          setChannels(data);
        }
      } catch {
        if (!cancelled) {
          setChannels([]);
        }
      }
    };

    void loadChannels();

    return () => {
      cancelled = true;
    };
  }, [requestChannels]);

  useEffect(() => {
    if (!selectedChannel) {
      return;
    }

    let cancelled = false;

    const loadVideos = async () => {
      try {
        const data = await requestVideos(selectedChannel);
        if (!cancelled) {
          setVideos(data);
        }
      } catch {
        if (!cancelled) {
          setVideos([]);
        }
      }
    };

    void loadVideos();

    return () => {
      cancelled = true;
    };
  }, [requestVideos, selectedChannel]);

  const handleTaskCreated = (task: Task) => {
    setTasks((prev) => [task, ...prev.filter((item) => item.id !== task.id)]);
    setView("tasks");
  };

  const handleTaskDone = () => {
    void refreshTasks();
    void refreshChannels();
    if (selectedChannel) {
      void refreshVideos(selectedChannel);
    }
  };

  const handleRetryMissing = useCallback(async (channelName: string) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ retryChannel: channelName }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Failed to retry missing videos");
    }

    setTasks((prev) => [data, ...prev.filter((item) => item.id !== data.id)]);
    setView("tasks");
  }, []);

  const handleSelectChannel = (name: string) => {
    setSelectedChannel(name);
    setVideos([]);
    setSelectedVideo(null);
    setView("browse");
  };

  const handleSelectVideo = (video: Video) => {
    if (!selectedChannel || !video.filename) return;
    setSelectedVideo({
      channel: selectedChannel,
      filename: video.filename,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-sm font-bold">
              ▶
            </div>
            <h1 className="text-lg font-semibold">YT Archive Fetcher</h1>
          </div>
          <nav className="flex gap-1">
            <button
              onClick={() => setView("tasks")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "tasks"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Tasks
            </button>
            <button
              onClick={() => {
                setView("browse");
                void refreshChannels();
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                view === "browse"
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              Browse
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        {view === "tasks" && (
          <div className="space-y-6">
            <TaskCreator onTaskCreated={handleTaskCreated} />
            <div className="space-y-3">
              {tasks.map((task) => (
                <TaskProgress
                  key={task.id}
                  task={task}
                  onDone={handleTaskDone}
                  onRetryMissing={handleRetryMissing}
                />
              ))}
              {tasks.length === 0 && (
                <div className="text-center py-16 text-zinc-500">
                  <p className="text-lg">No tasks yet</p>
                  <p className="text-sm mt-1">
                    Enter a channel, playlist, or single video link to start archiving
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {view === "browse" && (
          <div className="flex gap-6 min-h-[calc(100vh-120px)]">
            <ChannelSidebar
              channels={channels}
              selected={selectedChannel}
              onSelect={handleSelectChannel}
            />
            <div className="flex-1 min-w-0">
              {selectedVideo ? (
                <div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="mb-4 text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    ← Back to video list
                  </button>
                  <SubtitleViewer
                    key={`${selectedVideo.channel}/${selectedVideo.filename}`}
                    channel={selectedVideo.channel}
                    filename={selectedVideo.filename}
                  />
                </div>
              ) : selectedChannel ? (
                <VideoList
                  videos={videos}
                  channelName={selectedChannel}
                  onSelect={handleSelectVideo}
                  onRetryMissing={handleRetryMissing}
                />
              ) : (
                <div className="text-center py-16 text-zinc-500">
                  <p className="text-lg">Select a channel</p>
                  <p className="text-sm mt-1">
                    Choose a channel from the sidebar to browse archived video records
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
