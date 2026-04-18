"use client";

import { useEffect, useRef, useState } from "react";

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

interface TaskVideo {
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
  videos: TaskVideo[];
  stages: TaskStage[];
  phaseProgress: TaskPhaseProgress | null;
  createdAt: number;
  updatedAt: number;
}

interface Props {
  task: Task;
  onDone: () => void;
  onRetryMissing: (channelName: string) => Promise<void>;
}

export default function TaskProgress({
  task: initialTask,
  onDone,
  onRetryMissing,
}: Props) {
  const [task, setTask] = useState<Task>(initialTask);
  const doneRef = useRef(
    initialTask.status === "done" || initialTask.status === "error"
  );
  const [retrying, setRetrying] = useState(false);
  const [retryError, setRetryError] = useState("");

  useEffect(() => {
    setTask(initialTask);
    doneRef.current =
      initialTask.status === "done" || initialTask.status === "error";
  }, [initialTask]);

  useEffect(() => {
    if (initialTask.status === "done" || initialTask.status === "error") return;

    const eventSource = new EventSource(`/api/tasks/${initialTask.id}/stream`);

    eventSource.onmessage = (event) => {
      try {
        const data: Task = JSON.parse(event.data);
        setTask(data);
        if (
          (data.status === "done" || data.status === "error") &&
          !doneRef.current
        ) {
          doneRef.current = true;
          onDone();
          eventSource.close();
        }
      } catch {
        // Ignore malformed event payloads.
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [initialTask.id, initialTask.status, onDone]);

  const phaseProgress =
    task.phaseProgress && task.phaseProgress.total > 0
      ? Math.round((task.phaseProgress.completed / task.phaseProgress.total) * 100)
      : 0;
  const archivedCount = task.videos.filter(
    (video) => video.status === "archived"
  ).length;
  const missingVideos = task.videos.filter(
    (video) => video.status === "missing"
  );

  const statusColors: Record<string, string> = {
    pending: "text-zinc-400",
    fetching_list: "text-yellow-400",
    downloading: "text-blue-400",
    done: "text-green-400",
    error: "text-red-400",
  };
  const stageDotStyles: Record<string, string> = {
    pending: "bg-zinc-700",
    active: "bg-blue-500",
    done: "bg-green-500",
    error: "bg-red-500",
    skipped: "bg-zinc-500",
  };
  const stageTextStyles: Record<string, string> = {
    pending: "text-zinc-500",
    active: "text-blue-300",
    done: "text-zinc-400",
    error: "text-red-400",
    skipped: "text-zinc-500",
  };

  const statusLabel =
    task.status === "fetching_list"
      ? task.sourceType === "video"
        ? "Resolving video..."
        : "Preparing source list..."
      : task.status === "downloading"
        ? "Archiving in progress"
        : task.status === "done"
          ? "Completed"
          : task.status === "error"
            ? "Error"
            : "Pending";

  const modeLabel =
    task.taskMode === "retry-missing" ? "Retry task" : `${task.sourceType} archive`;

  const handleRetryMissing = async () => {
    if (!task.channelName || missingVideos.length === 0 || retrying) {
      return;
    }

    setRetryError("");
    setRetrying(true);
    try {
      await onRetryMissing(task.channelName);
    } catch (error: unknown) {
      setRetryError(error instanceof Error ? error.message : String(error));
    } finally {
      setRetrying(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium truncate">
              {task.channelName || task.sourceUrl}
            </h3>
            <span className="inline-flex rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
              {modeLabel}
            </span>
          </div>
          <p className={`mt-1 text-sm ${statusColors[task.status] || "text-zinc-400"}`}>
            {statusLabel}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            {archivedCount}/{task.totalVideos} archived
            {missingVideos.length > 0 ? ` · ${missingVideos.length} missing` : ""}
          </p>
        </div>
        {task.status === "done" && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600/20 text-green-400 flex items-center justify-center">
            ✓
          </div>
        )}
        {task.status === "error" && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center">
            ✕
          </div>
        )}
      </div>

      {task.phaseProgress && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-200">{task.phaseProgress.label}</span>
            <span className="text-zinc-500">
              {task.phaseProgress.completed}/{task.phaseProgress.total}
            </span>
          </div>
          <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${phaseProgress}%` }}
            />
          </div>
          <div className="flex items-start justify-between gap-3 text-xs text-zinc-500">
            <span className="min-w-0 flex-1">
              {task.currentVideo || "Preparing downloads..."}
            </span>
            <span>{phaseProgress}%</span>
          </div>
          {task.activeVideos.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {task.activeVideos.map((video) => (
                <span
                  key={video}
                  className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                >
                  {video}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {task.stages.length > 0 && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
          <p className="mb-3 text-sm font-medium text-zinc-200">Stages</p>
          <div className="space-y-3">
            {task.stages.map((stage) => (
              <div key={stage.id} className="flex gap-3">
                <div className="pt-1">
                  <span
                    className={`block h-2.5 w-2.5 rounded-full ${stageDotStyles[stage.status] || "bg-zinc-700"}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-zinc-200">{stage.label}</p>
                    <span className="text-[11px] uppercase tracking-wide text-zinc-500">
                      {stage.status}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-xs ${stageTextStyles[stage.status] || "text-zinc-500"}`}
                  >
                    {stage.detail || "Waiting to start."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {task.errors.length > 0 && (
        <details className="text-xs">
          <summary className="text-red-400 cursor-pointer">
            {task.errors.length} error{task.errors.length > 1 ? "s" : ""}
          </summary>
          <div className="mt-2 max-h-32 overflow-y-auto space-y-1 text-zinc-500">
            {task.errors.map((err, i) => (
              <p key={i} className="break-all">
                {err}
              </p>
            ))}
          </div>
        </details>
      )}

      {task.videos.length > 0 && (
        <details className="text-sm" open={task.status === "done" || task.status === "error"}>
          <summary className="cursor-pointer text-zinc-300">
            {task.videos.length} videos · {archivedCount} archived
            {missingVideos.length > 0 ? ` · ${missingVideos.length} missing` : ""}
          </summary>
          <div className="mt-3 space-y-2">
            {missingVideos.length > 0 && task.sourceType !== "video" && task.channelName && (
              <>
                <button
                  type="button"
                  onClick={handleRetryMissing}
                  disabled={retrying}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {retrying ? "Retrying..." : `Retry missing (${missingVideos.length})`}
                </button>
                {retryError && (
                  <p className="text-xs text-red-400">{retryError}</p>
                )}
              </>
            )}
            <div className="max-h-64 overflow-y-auto space-y-1.5">
              {task.videos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-zinc-800 px-3 py-2"
                >
                  <div className="min-w-0">
                    <p className="truncate text-zinc-200">{video.title}</p>
                    {video.lastError && (
                      <p className="mt-1 text-xs text-red-400 break-all">
                        {video.lastError}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs ${
                        video.status === "archived"
                          ? "bg-green-600/20 text-green-400"
                          : video.status === "missing"
                            ? "bg-red-600/20 text-red-400"
                            : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {video.status === "archived"
                        ? "Archived"
                        : video.status === "missing"
                          ? "Missing"
                          : "Pending"}
                    </span>
                    <p className="mt-1 text-xs text-zinc-500">
                      {video.attempts} attempt{video.attempts !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>
      )}
    </div>
  );
}
