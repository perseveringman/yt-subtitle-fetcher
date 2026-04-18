import { spawn } from "child_process";
import * as fs from "fs";
import * as path from "path";

export type SourceType = "channel" | "playlist" | "video";
export type TaskMode = "archive" | "retry-missing";
export type VideoStatus = "pending" | "archived" | "missing" | "unavailable";
export type TaskStageStatus = "pending" | "active" | "done" | "error" | "skipped";

export interface VideoInfo {
  id: string;
  title: string;
  status: VideoStatus;
  hasSubtitle: boolean;
  filename?: string;
  attempts: number;
  lastError?: string;
}

export interface TaskStage {
  id: string;
  label: string;
  status: TaskStageStatus;
  detail: string;
  updatedAt: number;
}

export interface TaskPhaseProgress {
  stageId: string;
  label: string;
  completed: number;
  total: number;
}

export interface Task {
  id: string;
  taskMode: TaskMode;
  sourceUrl: string;
  sourceType: SourceType;
  channelName: string;
  status: "pending" | "fetching_list" | "downloading" | "done" | "error";
  totalVideos: number;
  completedVideos: number;
  currentVideo: string;
  activeVideos: string[];
  errors: string[];
  videos: VideoInfo[];
  stages: TaskStage[];
  phaseProgress: TaskPhaseProgress | null;
  createdAt: number;
  updatedAt: number;
}

type Listener = (task: Task) => void;
type JsonRecord = Record<string, unknown>;

interface VideoListEntry {
  id: string;
  title: string;
}

interface VideoArchive {
  info: JsonRecord;
  subtitleContent: string | null;
}

interface BatchManifest {
  version: 1;
  channelName: string;
  sourceType: Extract<SourceType, "channel" | "playlist">;
  sourceUrl: string;
  updatedAt: string;
  videos: VideoInfo[];
}

const tasks = new Map<string, Task>();
const listeners = new Map<string, Set<Listener>>();

const DATA_DIR = path.join(/* turbopackIgnore: true */ process.cwd(), "data");
const TMP_DIR = path.join(DATA_DIR, ".tmp");
const TASKS_FILE = path.join(DATA_DIR, ".tasks.json");
const MANIFEST_FILENAME = ".archive-manifest.json";
const SUBTITLE_LANG_PRIORITY = ["en", "zh-Hans", "zh"] as const;
const MAX_PARALLEL_DOWNLOADS = 1;
const DOWNLOAD_INTERVAL_MS = 5_000;
const RATE_LIMIT_BASE_DELAY_MS = 30_000;
const RATE_LIMIT_MAX_RETRIES = 5;

function isRateLimitError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return /429|too many requests|rate.?limit/i.test(error.message);
}

function isUnavailableError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return /video unavailable|removed by the uploader|private video|account.*terminated|copyright/i.test(error.message);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function sanitizeFilename(name: string): string {
  return name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").trim();
}

function isBatchSource(sourceType: SourceType): sourceType is "channel" | "playlist" {
  return sourceType === "channel" || sourceType === "playlist";
}

function makeStage(id: string, label: string, updatedAt: number): TaskStage {
  return {
    id,
    label,
    status: "pending",
    detail: "",
    updatedAt,
  };
}

function buildTaskStages(
  sourceType: SourceType,
  taskMode: TaskMode,
  updatedAt: number
): TaskStage[] {
  if (taskMode === "retry-missing") {
    return [
      makeStage("load-manifest", "Load cached list", updatedAt),
      makeStage("retry-pass", "Retry missing videos", updatedAt),
      makeStage("finalize", "Finalize results", updatedAt),
    ];
  }

  const stages = [
    makeStage(
      "resolve-source",
      sourceType === "video" ? "Resolve video" : "Fetch source list",
      updatedAt
    ),
  ];

  if (isBatchSource(sourceType)) {
    stages.push(makeStage("cache-manifest", "Cache source list", updatedAt));
  }

  stages.push(
    makeStage(
      "initial-pass",
      sourceType === "video" ? "Archive video" : "Initial archive pass",
      updatedAt
    )
  );

  if (isBatchSource(sourceType)) {
    stages.push(makeStage("retry-pass", "Retry missing videos", updatedAt));
  }

  stages.push(makeStage("finalize", "Finalize results", updatedAt));
  return stages;
}

function cloneTask(task: Task): Task {
  return {
    ...task,
    activeVideos: [...task.activeVideos],
    errors: [...task.errors],
    videos: task.videos.map((video) => ({ ...video })),
    stages: task.stages.map((stage) => ({ ...stage })),
    phaseProgress: task.phaseProgress ? { ...task.phaseProgress } : null,
  };
}

function touchTask(task: Task) {
  task.updatedAt = Date.now();
}

function persistTasks() {
  ensureDir(DATA_DIR);
  const serialized = JSON.stringify(
    Array.from(tasks.values())
      .sort((left, right) => right.createdAt - left.createdAt)
      .map((task) => cloneTask(task)),
    null,
    2
  );
  fs.writeFileSync(TASKS_FILE, serialized, "utf-8");
}

function getStage(task: Task, stageId: string): TaskStage | undefined {
  return task.stages.find((stage) => stage.id === stageId);
}

function updateStage(
  task: Task,
  stageId: string,
  status: TaskStageStatus,
  detail: string
) {
  const stage = getStage(task, stageId);
  if (!stage) {
    return;
  }

  stage.status = status;
  stage.detail = detail;
  stage.updatedAt = Date.now();
  touchTask(task);
}

function activateStage(task: Task, stageId: string, detail: string) {
  updateStage(task, stageId, "active", detail);
}

function completeStage(task: Task, stageId: string, detail: string) {
  updateStage(task, stageId, "done", detail);
}

function skipStage(task: Task, stageId: string, detail: string) {
  updateStage(task, stageId, "skipped", detail);
}

function markActiveStageError(task: Task, detail: string) {
  const activeStage = task.stages.find((stage) => stage.status === "active");
  if (activeStage) {
    updateStage(task, activeStage.id, "error", detail);
    return;
  }

  const finalizeStage = getStage(task, "finalize");
  if (finalizeStage) {
    updateStage(task, finalizeStage.id, "error", detail);
  }
}

function setPhaseProgress(task: Task, progress: TaskPhaseProgress | null) {
  task.phaseProgress = progress ? { ...progress } : null;
  touchTask(task);
}

function summarizeActiveVideos(activeVideos: string[]): string {
  if (activeVideos.length === 0) {
    return "";
  }

  const preview = activeVideos.slice(0, 2);
  const remainder = activeVideos.length - preview.length;
  return `Running ${activeVideos.length} downloads: ${preview.join(", ")}${remainder > 0 ? ` +${remainder} more` : ""}`;
}

function updateTaskActivity(task: Task, activeTitles: Set<string>, fallback: string) {
  task.activeVideos = Array.from(activeTitles);
  task.currentVideo = task.activeVideos.length > 0 ? summarizeActiveVideos(task.activeVideos) : fallback;
  touchTask(task);
}

function syncTaskVideoSummary(task: Task) {
  task.totalVideos = task.videos.length;
  task.completedVideos = task.videos.filter(
    (video) => video.status === "archived"
  ).length;
  touchTask(task);
}

function notifyListeners(taskId: string) {
  persistTasks();

  const task = tasks.get(taskId);
  if (!task) return;

  const taskListeners = listeners.get(taskId);
  if (!taskListeners) return;

  for (const listener of taskListeners) {
    try {
      listener(cloneTask(task));
    } catch {
      // Ignore subscriber errors so one client disconnect doesn't break updates.
    }
  }
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getStringValue(record: JsonRecord, key: string): string | undefined {
  const value = record[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function getNumberValue(record: JsonRecord, key: string): number | undefined {
  const value = record[key];
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function getBooleanValue(record: JsonRecord, key: string): boolean | undefined {
  const value = record[key];
  return typeof value === "boolean" ? value : undefined;
}

function deriveStorageNameFromSourceUrl(sourceUrl: string): string {
  try {
    const url = new URL(sourceUrl);
    const host = url.hostname.replace(/^www\./, "").replace(/^m\./, "");

    if (host === "youtu.be") {
      return "";
    }

    const segments = url.pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return "";
    }

    if (segments[0].startsWith("@")) {
      return segments[0].slice(1);
    }

    if (
      segments.length >= 2 &&
      ["channel", "c", "user"].includes(segments[0])
    ) {
      return segments[1];
    }

    if (segments[0] === "playlist") {
      return url.searchParams.get("list") ?? "playlist";
    }

    return "";
  } catch {
    return "";
  }
}

function normalizeYouTubeSource(input: string): {
  url: string;
  sourceType: SourceType;
} {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error("A YouTube channel, playlist, or video link is required.");
  }

  if (!/^https?:\/\//i.test(trimmed)) {
    const handle = trimmed.startsWith("@") ? trimmed : `@${trimmed}`;
    return {
      url: `https://www.youtube.com/${handle}/videos`,
      sourceType: "channel",
    };
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    throw new Error("Invalid YouTube URL.");
  }

  const host = parsed.hostname.replace(/^www\./, "").replace(/^m\./, "");
  if (host !== "youtube.com" && host !== "youtu.be") {
    throw new Error("Only YouTube links are supported.");
  }

  if (host === "youtu.be") {
    const videoId = parsed.pathname.split("/").filter(Boolean)[0];
    if (!videoId) {
      throw new Error("Invalid YouTube video link.");
    }

    return {
      url: `https://www.youtube.com/watch?v=${videoId}`,
      sourceType: "video",
    };
  }

  const pathname = parsed.pathname.replace(/\/+$/, "") || "/";
  const segments = pathname.split("/").filter(Boolean);
  const watchVideoId = parsed.searchParams.get("v");

  if (watchVideoId) {
    return {
      url: `https://www.youtube.com/watch?v=${watchVideoId}`,
      sourceType: "video",
    };
  }

  if (segments[0] === "playlist") {
    const playlistId = parsed.searchParams.get("list");
    if (!playlistId) {
      throw new Error("Invalid YouTube playlist link.");
    }

    return {
      url: `https://www.youtube.com/playlist?list=${playlistId}`,
      sourceType: "playlist",
    };
  }

  if (segments[0] === "shorts" || segments[0] === "live") {
    const videoId = segments[1];
    if (!videoId) {
      throw new Error("Invalid YouTube video link.");
    }

    return {
      url: `https://www.youtube.com/watch?v=${videoId}`,
      sourceType: "video",
    };
  }

  if (segments[0]?.startsWith("@")) {
    return {
      url: `https://www.youtube.com/${segments[0]}/videos`,
      sourceType: "channel",
    };
  }

  if (
    segments.length >= 2 &&
    ["channel", "c", "user"].includes(segments[0])
  ) {
    return {
      url: `https://www.youtube.com/${segments[0]}/${segments[1]}/videos`,
      sourceType: "channel",
    };
  }

  throw new Error(
    "Unsupported YouTube link. Use a channel/@handle, playlist, or single video URL."
  );
}

function createVideoInfo(
  video: VideoListEntry,
  overrides: Partial<VideoInfo> = {}
): VideoInfo {
  return {
    id: video.id,
    title: video.title,
    status: "pending",
    hasSubtitle: false,
    attempts: 0,
    ...overrides,
  };
}

function buildMarkdownFilename(title: string, videoId: string): string {
  const safeTitle = sanitizeFilename(title) || videoId;
  return `${safeTitle} (${videoId}).md`;
}

function getChannelDir(channel: string): string {
  return path.join(DATA_DIR, sanitizeFilename(channel));
}

function getManifestPath(channel: string): string {
  return path.join(getChannelDir(channel), MANIFEST_FILENAME);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseFrontmatterValue<T>(fileContent: string, key: string): T | null {
  const match = fileContent.match(new RegExp(`^${key}:\\s(.+)$`, "m"));
  if (!match) return null;

  try {
    return JSON.parse(match[1]) as T;
  } catch {
    return null;
  }
}

function readArchiveSummary(filePath: string, fallbackFilename: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const frontmatterTitle = parseFrontmatterValue<string>(fileContent, "title");
  const hasSubtitle =
    parseFrontmatterValue<boolean>(fileContent, "has_subtitle") ?? false;

  return {
    title:
      frontmatterTitle ??
      fallbackFilename.replace(/ \([^)]+\)\.md$/, "").replace(/\.md$/, ""),
    hasSubtitle,
  };
}

function findArchiveFilenameByVideoId(
  channelDir: string,
  videoId: string
): string | null {
  if (!fs.existsSync(channelDir)) {
    return null;
  }

  const matcher = new RegExp(` \\(${escapeRegExp(videoId)}\\)\\.md$`);
  return (
    fs
      .readdirSync(channelDir)
      .find((filename) => filename.endsWith(".md") && matcher.test(filename)) ??
    null
  );
}

function getArchiveRecord(
  channelDir: string,
  videoId: string
): { filename: string; title: string; hasSubtitle: boolean } | null {
  const filename = findArchiveFilenameByVideoId(channelDir, videoId);
  if (!filename) {
    return null;
  }

  const filePath = path.join(channelDir, filename);
  const summary = readArchiveSummary(filePath, filename);
  return {
    filename,
    title: summary.title,
    hasSubtitle: summary.hasSubtitle,
  };
}

function chooseSubtitleFile(files: string[]): string | null {
  if (files.length === 0) {
    return null;
  }

  const scoreFile = (filename: string) => {
    const isAuto = filename.includes(".auto.");
    const languageIndex = SUBTITLE_LANG_PRIORITY.findIndex(
      (lang) =>
        filename.includes(`.${lang}.`) || filename.includes(`.${lang}-`)
    );

    return (isAuto ? 100 : 0) + (languageIndex === -1 ? 50 : languageIndex);
  };

  return [...files].sort(
    (left, right) => scoreFile(left) - scoreFile(right)
  )[0];
}

function cleanupFiles(files: string[]) {
  for (const file of files) {
    if (!fs.existsSync(file)) continue;

    try {
      fs.unlinkSync(file);
    } catch {
      // Best-effort cleanup only.
    }
  }
}

function toIsoTimestamp(timestamp: number | undefined): string | null {
  if (timestamp === undefined) {
    return null;
  }

  return new Date(timestamp * 1000).toISOString();
}

function toUploadDate(uploadDate: string | undefined): string | null {
  if (!uploadDate || !/^\d{8}$/.test(uploadDate)) {
    return null;
  }

  return `${uploadDate.slice(0, 4)}-${uploadDate.slice(4, 6)}-${uploadDate.slice(6, 8)}`;
}

function toDuration(durationSeconds: number | undefined): string | null {
  if (durationSeconds === undefined) {
    return null;
  }

  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);
  const seconds = durationSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function jsonScalar(name: string, value: unknown): string {
  return `${name}: ${JSON.stringify(value)}`;
}

function jsonBlock(name: string, value: unknown): string[] {
  const json = JSON.stringify(value, null, 2) ?? "null";
  return [name + ": |", ...json.split("\n").map((line) => `  ${line}`)];
}

function escapeInlineValue(value: string | number | boolean | null): string {
  if (value === null || value === "") {
    return "_none_";
  }

  return String(value);
}

function quoteText(text: string): string[] {
  return text.split("\n").map((line) => `> ${line}`);
}

function formatCommentsSection(comments: JsonRecord[]): string[] {
  if (comments.length === 0) {
    return ["_No comments captured._"];
  }

  return comments.flatMap((comment, index) => {
    const text = getStringValue(comment, "text");
    const commentLines = [
      `### Comment ${index + 1}`,
      `- comment_id: ${escapeInlineValue(getStringValue(comment, "id") ?? null)}`,
      `- parent_id: ${escapeInlineValue(getStringValue(comment, "parent") ?? null)}`,
      `- author: ${escapeInlineValue(getStringValue(comment, "author") ?? null)}`,
      `- author_id: ${escapeInlineValue(getStringValue(comment, "author_id") ?? null)}`,
      `- published_at: ${escapeInlineValue(
        toIsoTimestamp(getNumberValue(comment, "timestamp")) ?? null
      )}`,
      `- like_count: ${escapeInlineValue(
        getNumberValue(comment, "like_count") ?? null
      )}`,
      `- is_favorited: ${escapeInlineValue(
        getBooleanValue(comment, "is_favorited") ?? null
      )}`,
      `- author_is_uploader: ${escapeInlineValue(
        getBooleanValue(comment, "author_is_uploader") ?? null
      )}`,
      "",
    ];

    if (text) {
      commentLines.push(...quoteText(text));
    } else {
      commentLines.push("_No comment text captured._");
    }

    commentLines.push("");
    return commentLines;
  });
}

function vttToTranscript(vttContent: string): string | null {
  const lines = vttContent.split("\n");
  const textLines: string[] = [];
  let lastText = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (
      !trimmed ||
      trimmed === "WEBVTT" ||
      trimmed.startsWith("Kind:") ||
      trimmed.startsWith("Language:") ||
      trimmed.startsWith("NOTE") ||
      /^\d+$/.test(trimmed) ||
      trimmed.includes("-->")
    ) {
      continue;
    }

    const cleaned = trimmed.replace(/<[^>]+>/g, "").trim();
    if (cleaned && cleaned !== lastText) {
      textLines.push(cleaned);
      lastText = cleaned;
    }
  }

  if (textLines.length === 0) {
    return null;
  }

  const paragraphs: string[] = [];
  let currentParagraph: string[] = [];

  for (const line of textLines) {
    currentParagraph.push(line);
    if (currentParagraph.length >= 5) {
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [];
    }
  }

  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(" "));
  }

  return paragraphs.join("\n\n");
}

function getPreferredChannelName(info: JsonRecord): string {
  return (
    getStringValue(info, "channel") ??
    getStringValue(info, "uploader") ??
    getStringValue(info, "channel_id") ??
    "unknown_channel"
  );
}

function buildVideoMarkdown(
  sourceType: SourceType,
  info: JsonRecord,
  subtitleContent: string | null
): string {
  const videoId = getStringValue(info, "id") ?? "unknown_video";
  const title = getStringValue(info, "title") ?? videoId;
  const videoUrl =
    getStringValue(info, "webpage_url") ??
    `https://www.youtube.com/watch?v=${videoId}`;
  const channelName = getPreferredChannelName(info);
  const channelId = getStringValue(info, "channel_id") ?? null;
  const uploaderId = getStringValue(info, "uploader_id") ?? null;
  const uploaderUrl = getStringValue(info, "uploader_url") ?? null;
  const uploadDate = toUploadDate(getStringValue(info, "upload_date"));
  const duration = toDuration(getNumberValue(info, "duration"));
  const viewCount = getNumberValue(info, "view_count") ?? null;
  const likeCount = getNumberValue(info, "like_count") ?? null;
  const language = getStringValue(info, "language") ?? null;
  const availability = getStringValue(info, "availability") ?? null;
  const description = getStringValue(info, "description");
  const transcript = subtitleContent ? vttToTranscript(subtitleContent) : null;
  const tags = Array.isArray(info.tags)
    ? info.tags.filter(
        (tag): tag is string => typeof tag === "string" && tag.trim().length > 0
      )
    : [];
  const categories = Array.isArray(info.categories)
    ? info.categories.filter(
        (category): category is string =>
          typeof category === "string" && category.trim().length > 0
      )
    : [];
  const publishedAt = toIsoTimestamp(getNumberValue(info, "timestamp"));
  const fetchedAt = new Date().toISOString();

  return [
    "---",
    jsonScalar("archive_version", 2),
    jsonScalar("source", "youtube"),
    jsonScalar("source_type", sourceType),
    jsonScalar("video_id", videoId),
    jsonScalar("title", title),
    jsonScalar("video_url", videoUrl),
    jsonScalar("channel_name", channelName),
    jsonScalar("channel_id", channelId),
    jsonScalar("uploader_id", uploaderId),
    jsonScalar("published_at", publishedAt),
    jsonScalar("upload_date", uploadDate),
    jsonScalar("duration_seconds", getNumberValue(info, "duration") ?? null),
    jsonScalar("duration_human", duration),
    jsonScalar("view_count", viewCount),
    jsonScalar("like_count", likeCount),
    jsonScalar("has_subtitle", transcript !== null),
    jsonScalar("language", language),
    jsonScalar("availability", availability),
    jsonScalar("fetched_at", fetchedAt),
    "---",
    "",
    `# ${title}`,
    "",
    "## Video Summary",
    `- source_type: ${sourceType}`,
    `- video_url: ${videoUrl}`,
    `- video_id: ${videoId}`,
    `- channel_name: ${channelName}`,
    `- channel_id: ${escapeInlineValue(channelId)}`,
    `- uploader_id: ${escapeInlineValue(uploaderId)}`,
    `- uploader_url: ${escapeInlineValue(uploaderUrl)}`,
    `- published_at: ${escapeInlineValue(publishedAt)}`,
    `- upload_date: ${escapeInlineValue(uploadDate)}`,
    `- duration: ${escapeInlineValue(duration)}`,
    `- view_count: ${escapeInlineValue(viewCount)}`,
    `- like_count: ${escapeInlineValue(likeCount)}`,
    `- has_subtitle: ${transcript !== null}`,
    `- language: ${escapeInlineValue(language)}`,
    `- availability: ${escapeInlineValue(availability)}`,
    `- tags: ${tags.length > 0 ? tags.join(", ") : "_none_"}`,
    `- categories: ${categories.length > 0 ? categories.join(", ") : "_none_"}`,
    "",
    "## Description",
    "",
    description || "_No description available._",
    "",
    "<!-- YOUTUBE_TRANSCRIPT_START -->",
    "## Transcript",
    "",
    transcript || "_No subtitles available._",
    "",
    "<!-- YOUTUBE_TRANSCRIPT_END -->",
    "",
  ].join("\n");
}

function loadBatchManifest(channel: string): BatchManifest | null {
  const manifestPath = getManifestPath(channel);
  if (!fs.existsSync(manifestPath)) {
    return null;
  }

  try {
    const manifest = JSON.parse(
      fs.readFileSync(manifestPath, "utf-8")
    ) as BatchManifest;

    if (
      manifest.version !== 1 ||
      !Array.isArray(manifest.videos) ||
      typeof manifest.channelName !== "string"
    ) {
      return null;
    }

    return manifest;
  } catch {
    return null;
  }
}

function saveBatchManifest(manifest: BatchManifest) {
  const channelDir = getChannelDir(manifest.channelName);
  ensureDir(channelDir);
  fs.writeFileSync(
    getManifestPath(manifest.channelName),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );
}

function refreshBatchManifestFromDisk(channel: string): BatchManifest | null {
  const manifest = loadBatchManifest(channel);
  if (!manifest) {
    return null;
  }

  const channelDir = getChannelDir(channel);
  let changed = false;
  const refreshedVideos = manifest.videos.map((video) => {
    const archive = getArchiveRecord(channelDir, video.id);
    if (!archive) {
      return video;
    }

    if (
      video.status === "archived" &&
      video.filename === archive.filename &&
      video.title === archive.title &&
      video.hasSubtitle === archive.hasSubtitle &&
      !video.lastError
    ) {
      return video;
    }

    changed = true;
    return {
      ...video,
      title: archive.title,
      filename: archive.filename,
      hasSubtitle: archive.hasSubtitle,
      status: "archived" as const,
      lastError: undefined,
    };
  });

  if (!changed) {
    return manifest;
  }

  const refreshedManifest = {
    ...manifest,
    updatedAt: new Date().toISOString(),
    videos: refreshedVideos,
  };
  saveBatchManifest(refreshedManifest);
  return refreshedManifest;
}

function cacheBatchManifest(
  channelName: string,
  sourceType: Extract<SourceType, "channel" | "playlist">,
  sourceUrl: string,
  videoList: VideoListEntry[]
): BatchManifest {
  const existingManifest = refreshBatchManifestFromDisk(channelName);
  const existingMap = new Map(
    existingManifest?.videos.map((video) => [video.id, video]) ?? []
  );
  const channelDir = getChannelDir(channelName);
  ensureDir(channelDir);

  const currentBatchVideos = videoList.map((entry) => {
    const archive = getArchiveRecord(channelDir, entry.id);
    const existing = existingMap.get(entry.id);
    return createVideoInfo(entry, {
      title: archive?.title ?? existing?.title ?? entry.title,
      filename: archive?.filename ?? existing?.filename,
      hasSubtitle: archive?.hasSubtitle ?? existing?.hasSubtitle ?? false,
      status: archive ? "archived" : existing?.status ?? "pending",
      attempts: existing?.attempts ?? 0,
      lastError: archive ? undefined : existing?.lastError,
    });
  });

  const videos =
    sourceType === "playlist" && existingManifest
      ? [
          ...existingManifest.videos.filter(
            (video) => !currentBatchVideos.some((entry) => entry.id === video.id)
          ),
          ...currentBatchVideos,
        ]
      : currentBatchVideos;

  const manifest: BatchManifest = {
    version: 1,
    channelName,
    sourceType,
    sourceUrl,
    updatedAt: new Date().toISOString(),
    videos,
  };

  saveBatchManifest(manifest);
  return manifest;
}

function updateBatchManifestVideo(
  channelName: string,
  videoId: string,
  patch: Partial<VideoInfo>
) {
  const manifest = refreshBatchManifestFromDisk(channelName);
  if (!manifest) {
    return;
  }

  let changed = false;
  const videos = manifest.videos.map((video) => {
    if (video.id !== videoId) {
      return video;
    }

    changed = true;
    return {
      ...video,
      ...patch,
    };
  });

  if (!changed) {
    return;
  }

  saveBatchManifest({
    ...manifest,
    updatedAt: new Date().toISOString(),
    videos,
  });
}

function setTaskVideo(task: Task, videoId: string, patch: Partial<VideoInfo>) {
  const index = task.videos.findIndex((video) => video.id === videoId);
  if (index === -1) {
    return;
  }

  task.videos[index] = {
    ...task.videos[index],
    ...patch,
  };
  touchTask(task);
}

function getTaskVideo(task: Task, videoId: string): VideoInfo | undefined {
  return task.videos.find((video) => video.id === videoId);
}

function summarizeCompletion(task: Task): string {
  const missingCount = task.videos.filter((video) => video.status === "missing").length;
  if (missingCount === 0) {
    return `Archived ${task.completedVideos}/${task.totalVideos} videos.`;
  }

  return `Archived ${task.completedVideos}/${task.totalVideos} videos. ${missingCount} still missing.`;
}

function failTask(task: Task, message: string) {
  if (!task.errors.includes(message)) {
    task.errors.push(message);
  }

  task.status = "error";
  task.currentVideo = "";
  task.activeVideos = [];
  task.phaseProgress = null;
  markActiveStageError(task, message);
  touchTask(task);
  notifyListeners(task.id);
}

function createTaskRecord(options: {
  taskMode: TaskMode;
  sourceUrl: string;
  sourceType: SourceType;
  channelName: string;
}): Task {
  const createdAt = Date.now();
  const task: Task = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    taskMode: options.taskMode,
    sourceUrl: options.sourceUrl,
    sourceType: options.sourceType,
    channelName: options.channelName,
    status: options.taskMode === "retry-missing" ? "downloading" : "fetching_list",
    totalVideos: 0,
    completedVideos: 0,
    currentVideo:
      options.taskMode === "retry-missing"
        ? "Loading cached list..."
        : options.sourceType === "video"
          ? "Resolving video..."
          : "Fetching source list...",
    activeVideos: [],
    errors: [],
    videos: [],
    stages: buildTaskStages(options.sourceType, options.taskMode, createdAt),
    phaseProgress: null,
    createdAt,
    updatedAt: createdAt,
  };

  const initialStageId =
    options.taskMode === "retry-missing" ? "load-manifest" : "resolve-source";
  activateStage(task, initialStageId, task.currentVideo);
  return task;
}

function normalizeVideoStatus(
  status: unknown,
  filename: unknown
): VideoStatus {
  if (status === "archived" || status === "missing" || status === "pending") {
    return status;
  }

  return typeof filename === "string" ? "archived" : "missing";
}

function normalizePersistedVideo(raw: unknown): VideoInfo | null {
  if (!isRecord(raw)) {
    return null;
  }

  const id = getStringValue(raw, "id");
  const title = getStringValue(raw, "title");
  if (!id || !title) {
    return null;
  }

  const filename =
    typeof raw.filename === "string" && raw.filename.trim()
      ? raw.filename
      : undefined;

  return {
    id,
    title,
    status: normalizeVideoStatus(raw.status, raw.filename),
    hasSubtitle: getBooleanValue(raw, "hasSubtitle") ?? false,
    filename,
    attempts: getNumberValue(raw, "attempts") ?? 0,
    lastError: getStringValue(raw, "lastError"),
  };
}

function normalizePersistedTask(raw: unknown): Task | null {
  if (!isRecord(raw)) {
    return null;
  }

  const id = getStringValue(raw, "id");
  const sourceUrl = getStringValue(raw, "sourceUrl");
  if (!id || !sourceUrl) {
    return null;
  }

  const sourceType: SourceType =
    raw.sourceType === "channel" ||
    raw.sourceType === "playlist" ||
    raw.sourceType === "video"
      ? raw.sourceType
      : "video";
  const taskMode: TaskMode =
    raw.taskMode === "retry-missing" ? "retry-missing" : "archive";
  const createdAt = getNumberValue(raw, "createdAt") ?? Date.now();
  const updatedAt = getNumberValue(raw, "updatedAt") ?? createdAt;
  const baseStages = buildTaskStages(sourceType, taskMode, updatedAt);
  const persistedStages = Array.isArray(raw.stages)
    ? raw.stages.filter(isRecord)
    : [];
  const stages = baseStages.map((stage) => {
    const persisted = persistedStages.find(
      (candidate) => getStringValue(candidate, "id") === stage.id
    );
    if (!persisted) {
      return stage;
    }

    const status: TaskStageStatus =
      persisted.status === "active" ||
      persisted.status === "done" ||
      persisted.status === "error" ||
      persisted.status === "skipped" ||
      persisted.status === "pending"
        ? persisted.status
        : stage.status;

    return {
      ...stage,
      status,
      detail: getStringValue(persisted, "detail") ?? "",
      updatedAt: getNumberValue(persisted, "updatedAt") ?? updatedAt,
    };
  });

  const task: Task = {
    id,
    taskMode,
    sourceUrl,
    sourceType,
    channelName: getStringValue(raw, "channelName") ?? "",
    status:
      raw.status === "pending" ||
      raw.status === "fetching_list" ||
      raw.status === "downloading" ||
      raw.status === "done" ||
      raw.status === "error"
        ? raw.status
        : "pending",
    totalVideos: getNumberValue(raw, "totalVideos") ?? 0,
    completedVideos: getNumberValue(raw, "completedVideos") ?? 0,
    currentVideo: getStringValue(raw, "currentVideo") ?? "",
    activeVideos: Array.isArray(raw.activeVideos)
      ? raw.activeVideos.filter(
          (video): video is string => typeof video === "string" && video.trim().length > 0
        )
      : [],
    errors: Array.isArray(raw.errors)
      ? raw.errors.filter(
          (error): error is string => typeof error === "string" && error.trim().length > 0
        )
      : [],
    videos: Array.isArray(raw.videos)
      ? raw.videos.map(normalizePersistedVideo).filter((video): video is VideoInfo => video !== null)
      : [],
    stages,
    phaseProgress:
      isRecord(raw.phaseProgress) &&
      getStringValue(raw.phaseProgress, "stageId") &&
      getStringValue(raw.phaseProgress, "label")
        ? {
            stageId: getStringValue(raw.phaseProgress, "stageId")!,
            label: getStringValue(raw.phaseProgress, "label")!,
            completed: getNumberValue(raw.phaseProgress, "completed") ?? 0,
            total: getNumberValue(raw.phaseProgress, "total") ?? 0,
          }
        : null,
    createdAt,
    updatedAt,
  };

  syncTaskVideoSummary(task);

  if (task.status !== "done" && task.status !== "error") {
    const interruptionMessage =
      "Task was interrupted before completion. Start a new task to continue.";
    task.status = "error";
    task.currentVideo = "";
    task.activeVideos = [];
    task.phaseProgress = null;
    if (!task.errors.includes(interruptionMessage)) {
      task.errors.push(interruptionMessage);
    }
    markActiveStageError(task, interruptionMessage);
  }

  return task;
}

function hydratePersistedTasks() {
  ensureDir(DATA_DIR);
  if (!fs.existsSync(TASKS_FILE)) {
    return;
  }

  try {
    const raw = JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
    if (!Array.isArray(raw)) {
      return;
    }

    for (const entry of raw) {
      const task = normalizePersistedTask(entry);
      if (task) {
        tasks.set(task.id, task);
      }
    }
  } catch {
    // Ignore malformed persisted tasks and start fresh.
  }
}

hydratePersistedTasks();
persistTasks();

function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (item: T) => Promise<void>
) {
  const concurrency = Math.max(1, Math.min(limit, items.length || 1));
  let nextIndex = 0;

  let isFirst = true;
  const runner = async () => {
    while (nextIndex < items.length) {
      if (!isFirst) {
        await sleep(DOWNLOAD_INTERVAL_MS);
      }
      isFirst = false;
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex]);
    }
  };

  return Promise.all(Array.from({ length: concurrency }, () => runner()));
}

function replaceExistingArchiveIfNeeded(
  channelDir: string,
  videoId: string,
  filename: string
) {
  const existingFilename = findArchiveFilenameByVideoId(channelDir, videoId);
  if (existingFilename && existingFilename !== filename) {
    cleanupFiles([path.join(channelDir, existingFilename)]);
  }
}

function updateParallelStageDetail(
  task: Task,
  stageId: string,
  processedCount: number,
  totalCount: number,
  activeTitles: Set<string>,
  relevantVideoIds: string[]
) {
  const archivedCount = relevantVideoIds.filter(
    (videoId) => getTaskVideo(task, videoId)?.status === "archived"
  ).length;
  const missingCount = relevantVideoIds.filter(
    (videoId) => getTaskVideo(task, videoId)?.status === "missing"
  ).length;
  const detail =
    `${processedCount}/${totalCount} processed` +
    ` · ${activeTitles.size} running` +
    ` · ${archivedCount} archived` +
    (missingCount > 0 ? ` · ${missingCount} missing` : "");

  updateStage(task, stageId, "active", detail);
  const stage = getStage(task, stageId);
  setPhaseProgress(
    task,
    stage
      ? {
          stageId,
          label: stage.label,
          completed: processedCount,
          total: totalCount,
        }
      : null
  );
  syncTaskVideoSummary(task);
  updateTaskActivity(task, activeTitles, detail);
  notifyListeners(task.id);
}

async function archiveSingleVideo(task: Task, videoId: string) {
  const taskVideo = getTaskVideo(task, videoId);
  if (!taskVideo) {
    return;
  }

  const nextAttempts = taskVideo.attempts + 1;
  setTaskVideo(task, videoId, {
    attempts: nextAttempts,
    lastError: undefined,
  });

  if (isBatchSource(task.sourceType) && task.channelName) {
    updateBatchManifestVideo(task.channelName, videoId, {
      attempts: nextAttempts,
      lastError: undefined,
    });
  }

  const archive = await downloadVideoArchive(videoId);
  const title = getStringValue(archive.info, "title") ?? taskVideo.title;
  const resolvedChannelName =
    task.channelName || getPreferredChannelName(archive.info);
  if (!task.channelName) {
    task.channelName = resolvedChannelName;
  }

  const channelDir = getChannelDir(resolvedChannelName);
  ensureDir(channelDir);

  const filename = buildMarkdownFilename(title, videoId);
  replaceExistingArchiveIfNeeded(channelDir, videoId, filename);

  const markdownPath = path.join(channelDir, filename);
  const markdown = buildVideoMarkdown(
    task.sourceType,
    archive.info,
    archive.subtitleContent
  );

  fs.writeFileSync(markdownPath, markdown, "utf-8");

  setTaskVideo(task, videoId, {
    title,
    status: "archived",
    filename,
    hasSubtitle: archive.subtitleContent !== null,
    lastError: undefined,
  });

  if (isBatchSource(task.sourceType)) {
    updateBatchManifestVideo(task.channelName, videoId, {
      title,
      status: "archived",
      filename,
      hasSubtitle: archive.subtitleContent !== null,
      attempts: nextAttempts,
      lastError: undefined,
    });
  }
}

async function archiveVideosForTask(
  task: Task,
  videoIds: string[],
  stageId: string
) {
  if (videoIds.length === 0) {
    setPhaseProgress(task, null);
    return;
  }

  const activeTitles = new Set<string>();
  let processedCount = 0;

  updateParallelStageDetail(task, stageId, processedCount, videoIds.length, activeTitles, videoIds);

  await runWithConcurrency(videoIds, MAX_PARALLEL_DOWNLOADS, async (videoId) => {
    const taskVideo = getTaskVideo(task, videoId);
    if (!taskVideo) {
      return;
    }

    if (taskVideo.status === "unavailable" || (taskVideo.status === "archived" && taskVideo.filename)) {
      processedCount += 1;
      updateParallelStageDetail(
        task,
        stageId,
        processedCount,
        videoIds.length,
        activeTitles,
        videoIds
      );
      return;
    }

    activeTitles.add(taskVideo.title);
    updateParallelStageDetail(
      task,
      stageId,
      processedCount,
      videoIds.length,
      activeTitles,
      videoIds
    );

    try {
      let lastError: unknown;
      for (let retry = 0; retry <= RATE_LIMIT_MAX_RETRIES; retry++) {
        try {
          await archiveSingleVideo(task, videoId);
          lastError = undefined;
          break;
        } catch (error: unknown) {
          lastError = error;
          if (isUnavailableError(error)) {
            break;
          }
          if (isRateLimitError(error) && retry < RATE_LIMIT_MAX_RETRIES) {
            const delay = RATE_LIMIT_BASE_DELAY_MS * 2 ** retry;
            task.currentVideo = `Rate limited, retrying in ${Math.round(delay / 1000)}s...`;
            notifyListeners(task.id);
            await sleep(delay);
            continue;
          }
          break;
        }
      }
      if (lastError) {
        throw lastError;
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      const status = isUnavailableError(error) ? "unavailable" as const : "missing" as const;
      setTaskVideo(task, videoId, {
        status,
        filename: undefined,
        hasSubtitle: false,
        lastError: message,
      });
      if (isBatchSource(task.sourceType)) {
        updateBatchManifestVideo(task.channelName, videoId, {
          status,
          filename: undefined,
          hasSubtitle: false,
          attempts: getTaskVideo(task, videoId)?.attempts ?? 0,
          lastError: message,
        });
      }
      task.errors.push(`Failed to archive "${taskVideo.title}": ${message}`);
      touchTask(task);
    } finally {
      activeTitles.delete(taskVideo.title);
      processedCount += 1;
      updateParallelStageDetail(
        task,
        stageId,
        processedCount,
        videoIds.length,
        activeTitles,
        videoIds
      );
    }
  });

  task.activeVideos = [];
  task.currentVideo = "";
  setPhaseProgress(task, null);
  syncTaskVideoSummary(task);
  notifyListeners(task.id);
}

function refreshTaskVideosFromManifest(task: Task) {
  if (!isBatchSource(task.sourceType)) {
    return;
  }

  const videos = getChannelVideos(task.channelName);
  task.videos = videos.map((video) => ({ ...video }));
  syncTaskVideoSummary(task);
}

function registerTask(task: Task) {
  tasks.set(task.id, task);
  notifyListeners(task.id);
}

export function subscribe(taskId: string, fn: Listener): () => void {
  if (!listeners.has(taskId)) {
    listeners.set(taskId, new Set());
  }

  listeners.get(taskId)?.add(fn);
  return () => {
    listeners.get(taskId)?.delete(fn);
  };
}

export function getTask(taskId: string): Task | undefined {
  const task = tasks.get(taskId);
  return task ? cloneTask(task) : undefined;
}

export function getAllTasks(): Task[] {
  return Array.from(tasks.values())
    .sort((left, right) => right.createdAt - left.createdAt)
    .map((task) => cloneTask(task));
}

export function getChannels(): string[] {
  ensureDir(DATA_DIR);
  return fs.readdirSync(DATA_DIR).filter((entry) => {
    if (entry.startsWith(".")) {
      return false;
    }

    return fs.statSync(path.join(DATA_DIR, entry)).isDirectory();
  });
}

export function getChannelVideos(channel: string): VideoInfo[] {
  const manifest = refreshBatchManifestFromDisk(channel);
  if (manifest) {
    return manifest.videos.map((video) => ({ ...video }));
  }

  const dir = getChannelDir(channel);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const summary = readArchiveSummary(filePath, filename);
      return {
        id: filename.match(/ \(([^)]+)\)\.md$/)?.[1] ?? filename,
        title: summary.title,
        filename,
        hasSubtitle: summary.hasSubtitle,
        status: "archived" as const,
        attempts: 0,
      };
    });
}

export function getVideoRecordContent(
  channel: string,
  filename: string
): string | null {
  const filePath = path.join(getChannelDir(channel), filename);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}

export async function createTask(sourceInput: string): Promise<Task> {
  const normalizedSource = normalizeYouTubeSource(sourceInput);
  const task = createTaskRecord({
    taskMode: "archive",
    sourceUrl: normalizedSource.url,
    sourceType: normalizedSource.sourceType,
    channelName:
      normalizedSource.sourceType === "video"
        ? ""
        : deriveStorageNameFromSourceUrl(normalizedSource.url),
  });

  registerTask(task);

  processTask(task).catch((error: unknown) => {
    failTask(task, error instanceof Error ? error.message : String(error));
  });

  return cloneTask(task);
}

export async function createRetryTask(channelName: string): Promise<Task> {
  const manifest = refreshBatchManifestFromDisk(channelName);
  if (!manifest) {
    throw new Error("No cached video list found for this channel.");
  }

  const missingVideos = manifest.videos.filter(
    (video) => video.status === "missing" || video.status === "pending"
  );
  if (missingVideos.length === 0) {
    throw new Error("There are no missing videos to retry.");
  }

  const task = createTaskRecord({
    taskMode: "retry-missing",
    sourceUrl: manifest.sourceUrl,
    sourceType: manifest.sourceType,
    channelName: manifest.channelName,
  });

  task.videos = missingVideos.map((video) => ({
    ...video,
    status: "pending",
    lastError: undefined,
  }));
  syncTaskVideoSummary(task);
  completeStage(
    task,
    "load-manifest",
    `Loaded ${missingVideos.length} missing videos from the cached list.`
  );
  activateStage(
    task,
    "retry-pass",
    `Retrying ${missingVideos.length} videos with up to ${MAX_PARALLEL_DOWNLOADS} parallel downloads.`
  );
  task.currentVideo = `Retrying ${missingVideos.length} videos...`;
  touchTask(task);

  registerTask(task);

  processRetryTask(task).catch((error: unknown) => {
    failTask(task, error instanceof Error ? error.message : String(error));
  });

  return cloneTask(task);
}

async function processTask(task: Task) {
  const videoList = await getVideoList(task);
  if (videoList.length === 0) {
    throw new Error("No videos found for this source.");
  }

  completeStage(
    task,
    "resolve-source",
    task.sourceType === "video"
      ? "Resolved video metadata."
      : `Found ${videoList.length} videos in the source list.`
  );

  task.videos = videoList.map((video) => createVideoInfo(video));
  syncTaskVideoSummary(task);

  if (isBatchSource(task.sourceType)) {
    activateStage(task, "cache-manifest", "Writing the cached source list to disk...");
    notifyListeners(task.id);

    const manifest = cacheBatchManifest(
      task.channelName,
      task.sourceType,
      task.sourceUrl,
      videoList
    );
    task.videos = manifest.videos.map((video) => ({ ...video }));
    syncTaskVideoSummary(task);
    completeStage(
      task,
      "cache-manifest",
      `Cached ${manifest.videos.length} expected videos for later reconciliation.`
    );
  }

  task.status = "downloading";
  activateStage(
    task,
    "initial-pass",
    `Archiving ${task.videos.length} videos with up to ${MAX_PARALLEL_DOWNLOADS} parallel downloads.`
  );
  notifyListeners(task.id);

  await archiveVideosForTask(
    task,
    task.videos.map((video) => video.id),
    "initial-pass"
  );

  completeStage(task, "initial-pass", summarizeCompletion(task));

  if (isBatchSource(task.sourceType)) {
    refreshTaskVideosFromManifest(task);
    const missingIds = task.videos
      .filter((video) => video.status === "missing" || video.status === "pending")
      .map((video) => video.id);

    if (missingIds.length > 0) {
      activateStage(
        task,
        "retry-pass",
        `Retrying ${missingIds.length} missing videos with up to ${MAX_PARALLEL_DOWNLOADS} parallel downloads.`
      );
      notifyListeners(task.id);
      await archiveVideosForTask(task, missingIds, "retry-pass");
      refreshTaskVideosFromManifest(task);
      completeStage(task, "retry-pass", summarizeCompletion(task));
    } else {
      skipStage(task, "retry-pass", "No missing videos needed a retry.");
    }
  }

  activateStage(task, "finalize", "Finalizing task results...");
  task.currentVideo = "Finalizing task results...";
  task.activeVideos = [];
  setPhaseProgress(task, null);
  notifyListeners(task.id);

  if (isBatchSource(task.sourceType)) {
    refreshTaskVideosFromManifest(task);
  }

  syncTaskVideoSummary(task);
  task.status = "done";
  task.currentVideo = "";
  task.activeVideos = [];
  completeStage(task, "finalize", summarizeCompletion(task));
  notifyListeners(task.id);
}

async function processRetryTask(task: Task) {
  await archiveVideosForTask(
    task,
    task.videos.map((video) => video.id),
    "retry-pass"
  );

  refreshTaskVideosFromManifest(task);
  activateStage(task, "finalize", "Finalizing retry results...");
  task.currentVideo = "Finalizing retry results...";
  task.activeVideos = [];
  notifyListeners(task.id);

  refreshTaskVideosFromManifest(task);
  syncTaskVideoSummary(task);
  task.status = "done";
  task.currentVideo = "";
  completeStage(task, "finalize", summarizeCompletion(task));
  notifyListeners(task.id);
}

async function getVideoList(task: Task): Promise<VideoListEntry[]> {
  return new Promise((resolve, reject) => {
    const args =
      task.sourceType === "video"
        ? [
            "--no-playlist",
            "--print",
            "%(id)s\t%(title)s",
            "--no-warnings",
            "--cookies-from-browser",
            "chrome",
            "--remote-components",
            "ejs:github",
            task.sourceUrl,
          ]
        : [
            "--flat-playlist",
            "--print",
            "%(id)s\t%(title)s",
            "--no-warnings",
            "--cookies-from-browser",
            "chrome",
            "--remote-components",
            "ejs:github",
            task.sourceUrl,
          ];

    const proc = spawn("yt-dlp", args);
    let stdout = "";
    let stderr = "";

    proc.on("error", reject);

    proc.stdout.on("data", (data: Buffer) => {
      stdout += data.toString();
      const count = stdout.split("\n").filter(Boolean).length;
      const detail =
        task.sourceType === "video"
          ? "Resolved video metadata."
          : `Fetched ${count} entries from the source list...`;
      activateStage(task, "resolve-source", detail);
      task.currentVideo = detail;
      notifyListeners(task.id);
    });

    proc.stderr.on("data", (data: Buffer) => {
      stderr += data.toString();
    });

    proc.on("close", (code: number | null) => {
      if (code !== 0 && !stdout.trim()) {
        reject(new Error(`yt-dlp failed: ${stderr.trim() || "unknown error"}`));
        return;
      }

      const videos = stdout
        .trim()
        .split("\n")
        .filter(Boolean)
        .map((line) => {
          const [id, ...titleParts] = line.split("\t");
          return {
            id: id?.trim() ?? "",
            title: titleParts.join("\t").trim(),
          };
        })
        .filter((video) => video.id && video.title);

      resolve(videos);
    });
  });
}

async function downloadVideoArchive(videoId: string): Promise<VideoArchive> {
  return new Promise((resolve, reject) => {
    ensureDir(TMP_DIR);

    const prefix = `${videoId}-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .slice(2, 8)}`;
    const outputTemplate = path.join(TMP_DIR, `${prefix}.%(ext)s`);
    const args = [
      "--no-playlist",
      "--skip-download",
      "--write-info-json",
      "--write-subs",
      "--write-auto-subs",
      "--sub-langs",
      SUBTITLE_LANG_PRIORITY.join(","),
      "--convert-subs",
      "vtt",
      "--no-warnings",
      "--cookies-from-browser",
      "chrome",
      "--remote-components",
      "ejs:github",
      "-o",
      outputTemplate,
      `https://www.youtube.com/watch?v=${videoId}`,
    ];

    const proc = spawn("yt-dlp", args);
    let stderr = "";

    proc.on("error", reject);

    proc.stderr.on("data", (data: Buffer) => {
      stderr += data.toString();
    });

    proc.on("close", (code: number | null) => {
      const matchingFiles = fs
        .readdirSync(TMP_DIR)
        .filter((filename) => filename.startsWith(prefix))
        .map((filename) => path.join(TMP_DIR, filename));

      const infoFile = matchingFiles.find((file) => file.endsWith(".info.json"));
      const subtitleFiles = matchingFiles.filter((file) => file.endsWith(".vtt"));

      if (!infoFile) {
        cleanupFiles(matchingFiles);
        reject(
          new Error(
            code !== 0 && stderr.trim()
              ? stderr.trim()
              : "yt-dlp did not produce video metadata."
          )
        );
        return;
      }

      try {
        const info = JSON.parse(fs.readFileSync(infoFile, "utf-8")) as JsonRecord;
        const subtitleFile = chooseSubtitleFile(subtitleFiles);
        const subtitleContent =
          subtitleFile === null ? null : fs.readFileSync(subtitleFile, "utf-8");

        cleanupFiles(matchingFiles);
        resolve({ info, subtitleContent });
      } catch (error: unknown) {
        cleanupFiles(matchingFiles);
        reject(error);
      }
    });
  });
}
