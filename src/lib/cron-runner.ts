import { createTask, getAllTasks, getTask, listVideoCandidates } from "./task-manager";
import {
  finishSubscriptionRun,
  getExistingDocuments,
  listDueYtSubscriptions,
  startSubscriptionRun,
  type DataHubSubscription,
} from "./podadmin-client";

let running = false;
let cachedSubscriptions: { expiresAt: number; items: DataHubSubscription[] } | null = null;
let lastTickAt: number | null = null;
const CACHE_MS = 5 * 60 * 1000;
const CRON_INTERVAL_MS = 5 * 60 * 1000;

export interface CronHealth {
  last_tick_at: string | null;
  running_tasks: number;
  cached_subs_count: number | null;
  next_tick_at: string | null;
}

function docId(videoId: string): string {
  return `youtube:${videoId}`;
}

async function getDueSubscriptions(): Promise<DataHubSubscription[]> {
  const now = Date.now();
  if (cachedSubscriptions && cachedSubscriptions.expiresAt > now) {
    return cachedSubscriptions.items;
  }
  const items = await listDueYtSubscriptions();
  cachedSubscriptions = { expiresAt: now + CACHE_MS, items };
  return items;
}

function waitForTask(taskId: string): Promise<ReturnType<typeof getTask>> {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const tick = () => {
      const task = getTask(taskId);
      if (!task || task.status === "done" || task.status === "error") {
        resolve(task);
        return;
      }
      if (Date.now() - startedAt > 12 * 60 * 60 * 1000) {
        resolve(task);
        return;
      }
      setTimeout(tick, 5000);
    };
    tick();
  });
}

async function runSubscription(sub: DataHubSubscription) {
  const taskId = await startSubscriptionRun(sub.id);
  try {
    const candidates = await listVideoCandidates(sub.source_ref);
    const existing = await getExistingDocuments(candidates.map((video) => docId(video.id)));
    const missingIds = candidates
      .map((video) => video.id)
      .filter((id) => !existing.has(docId(id)));

    if (missingIds.length === 0) {
      await finishSubscriptionRun(sub.id, taskId, {
        status: "success",
        items_archived: 0,
        items_failed: 0,
      });
      return;
    }

    const localTask = await createTask(sub.source_ref, { onlyVideoIds: missingIds });
    const finished = await waitForTask(localTask.id);
    const archived = finished?.videos.filter((video) => video.status === "archived").length || 0;
    const failed = finished?.videos.filter((video) => video.status === "missing").length || 0;
    await finishSubscriptionRun(sub.id, taskId, {
      status: finished?.status === "done" && failed === 0 ? "success" : archived > 0 ? "partial" : "failed",
      items_archived: archived,
      items_failed: failed,
      error: finished?.errors.join("\n") || undefined,
    });
  } catch (error) {
    await finishSubscriptionRun(sub.id, taskId, {
      status: "failed",
      items_archived: 0,
      items_failed: 0,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function pollAndRunDueSubscriptions() {
  lastTickAt = Date.now();
  if (running) {
    return { ok: true, skipped: "already_running" };
  }
  running = true;
  try {
    const due = await getDueSubscriptions();
    for (const sub of due) {
      if (sub.source_type !== "youtube") {
        continue;
      }
      await runSubscription(sub);
    }
    return { ok: true, subscriptions: due.length };
  } finally {
    running = false;
  }
}

function nextTickIso(now: number): string | null {
  if (process.env.DATAHUB_CRON_DISABLED === "1" || lastTickAt === null) {
    return null;
  }

  const elapsedIntervals = Math.max(
    1,
    Math.ceil((now - lastTickAt) / CRON_INTERVAL_MS)
  );
  return new Date(lastTickAt + elapsedIntervals * CRON_INTERVAL_MS).toISOString();
}

export function getCronHealth(): CronHealth {
  const now = Date.now();
  const cachedSubCount =
    cachedSubscriptions && cachedSubscriptions.expiresAt > now
      ? cachedSubscriptions.items.length
      : null;
  const runningTasks = getAllTasks().filter(
    (task) => task.status !== "done" && task.status !== "error"
  ).length;

  return {
    last_tick_at: lastTickAt === null ? null : new Date(lastTickAt).toISOString(),
    running_tasks: runningTasks,
    cached_subs_count: cachedSubCount,
    next_tick_at: nextTickIso(now),
  };
}
