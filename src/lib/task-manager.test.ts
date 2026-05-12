import assert from "node:assert/strict";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";

const TASK_MANAGER_MODULE_PATH = fileURLToPath(new URL("./task-manager.ts", import.meta.url));
const DEFAULT_SUBTITLE_JSON3 = JSON.stringify({
  events: [
    {
      tStartMs: 0,
      dDurationMs: 1000,
      segs: [{ utf8: "hello world" }],
    },
  ],
});

function writeFakeYtDlp(
  binDir: string,
  {
    subtitleContent = DEFAULT_SUBTITLE_JSON3,
    subtitleExt = "en.json3",
    argsLogPath = null,
  }: { subtitleContent?: string; subtitleExt?: string; argsLogPath?: string | null } = {}
) {
  const scriptPath = path.join(binDir, "yt-dlp");
  const script = String.raw`#!/usr/bin/env node
const fs = require("node:fs");

const args = process.argv.slice(2);
const argsLogPath = ${JSON.stringify(argsLogPath)};

if (argsLogPath) {
  fs.appendFileSync(argsLogPath, JSON.stringify(args) + "\n", "utf8");
}

if (args.includes("--print")) {
  process.stdout.write("abc123\tExample Video\n");
  process.exit(0);
}

const outputIndex = args.indexOf("-o");
if (outputIndex === -1 || !args[outputIndex + 1]) {
  process.stderr.write("missing output template");
  process.exit(1);
}

const outputTemplate = args[outputIndex + 1];
const infoPath = outputTemplate.replace("%(ext)s", "info.json");
const subtitlePath = outputTemplate.replace("%(ext)s", ${JSON.stringify(subtitleExt)});

fs.writeFileSync(
  infoPath,
    JSON.stringify({
      id: "abc123",
      title: "Example Video",
      webpage_url: "https://www.youtube.com/watch?v=abc123",
      thumbnail: "https://i.ytimg.com/vi/abc123/maxresdefault.jpg",
      channel: "Example Channel",
      channel_id: "channel-123",
      uploader_id: "@example",
    uploader_url: "https://www.youtube.com/@example",
    upload_date: "20260418",
    duration: 61,
    view_count: 12345,
    like_count: 678,
    language: "en",
    availability: "public",
    description: "Example description",
    timestamp: 1776506400
  }),
  "utf8"
);
fs.writeFileSync(
  subtitlePath,
  ${JSON.stringify(subtitleContent)},
  "utf8"
);
process.exit(0);
`;

  writeFileSync(scriptPath, script, "utf8");
  chmodSync(scriptPath, 0o755);
}

async function waitFor(
  predicate: () => boolean,
  timeoutMs = 10_000,
  intervalMs = 25
): Promise<void> {
  const startedAt = Date.now();
  while (!predicate()) {
    if (Date.now() - startedAt > timeoutMs) {
      throw new Error("Timed out waiting for condition.");
    }
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
}

test("uploads agent-friendly JSON payload and keeps needs_review as a soft warning", async () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "yt-subtitle-fetcher-"));
  const binDir = path.join(tempRoot, "bin");
  mkdirSync(binDir, { recursive: true });
  writeFakeYtDlp(binDir);

  const originalCwd = process.cwd();
  const originalPath = process.env.PATH ?? "";
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalFetch = globalThis.fetch;
  const uploadRequests: Array<{ url: string; init: RequestInit | undefined }> = [];
  const testApiKey = "dh_test_key_from_env";

  globalThis.fetch = async (input, init) => {
    uploadRequests.push({ url: String(input), init });
    return new Response(
      JSON.stringify({
        doc_id: "youtube:abc123",
        file_path: "data/episodes/youtube/yt-subtitle-fetcher/2026/example.md",
        mapping_status: "needs_review",
        mapping_issues: ["missing:summary_excerpt"],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  try {
    process.chdir(tempRoot);
    process.env.PATH = `${binDir}:${originalPath}`;
    process.env.DATAHUB_API_KEY = testApiKey;

    const taskManager = await import(
      `${pathToFileURL(TASK_MANAGER_MODULE_PATH).href}?t=${Date.now()}`
    );

    const task = await taskManager.createTask("https://www.youtube.com/watch?v=abc123");

    await waitFor(() => {
      const currentTask = taskManager.getTask(task.id);
      return currentTask?.status === "done";
    });
    await waitFor(() => uploadRequests.length === 1);

    const request = uploadRequests[0];
    assert.equal(request.url, "http://localhost:8000/api/v1/upload");
    assert.deepEqual(request.init?.headers, {
      "Content-Type": "application/json",
      "X-DataHub-Api-Key": testApiKey,
    });

    const payload = JSON.parse(String(request.init?.body));
    assert.equal(payload.source, "yt-subtitle-fetcher");
    assert.equal(payload.source_type, "youtube");
    assert.equal(payload.doc_id, "youtube:abc123");
    assert.deepEqual(payload.field_map, {
      source_episode_ref: "video_id",
      source_podcast_ref: "channel",
    });
    assert.deepEqual(payload.hints, {
      source_url_canonical: "https://www.youtube.com/watch?v=abc123",
    });
    assert.match(payload.markdown, /^---\narchive_version: 2\nsource: "youtube"\nsource_type: "youtube"/);
    assert.match(payload.markdown, /\nsource_url_canonical: "https:\/\/www\.youtube\.com\/watch\?v=abc123"\n/);
    assert.match(payload.markdown, /\nthumbnail_url: "https:\/\/i\.ytimg\.com\/vi\/abc123\/maxresdefault\.jpg"\n/);
    assert.match(
      payload.markdown,
      /\n## Transcript\n\n00:00:00 --> 00:00:01\nhello world\n/
    );

    const currentTask = taskManager.getTask(task.id);
    assert.equal(currentTask?.status, "done");
    assert.deepEqual(currentTask?.errors, []);
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    process.env.PATH = originalPath;
    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("skips youtubetab authcheck when resolving channel video lists", async () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "yt-subtitle-fetcher-"));
  const binDir = path.join(tempRoot, "bin");
  const argsLogPath = path.join(tempRoot, "yt-dlp-args.log");
  mkdirSync(binDir, { recursive: true });
  writeFakeYtDlp(binDir, { argsLogPath });

  const originalCwd = process.cwd();
  const originalPath = process.env.PATH ?? "";
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalFetch = globalThis.fetch;
  const uploadRequests: Array<{ url: string; init: RequestInit | undefined }> = [];

  globalThis.fetch = async (input, init) => {
    uploadRequests.push({ url: String(input), init });
    return new Response(
      JSON.stringify({
        doc_id: "youtube:abc123",
        file_path: "data/episodes/youtube/yt-subtitle-fetcher/2026/example.md",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  try {
    process.chdir(tempRoot);
    process.env.PATH = `${binDir}:${originalPath}`;
    process.env.DATAHUB_API_KEY = "dh_test_key_from_env";

    const taskManager = await import(
      `${pathToFileURL(TASK_MANAGER_MODULE_PATH).href}?t=${Date.now()}`
    );

    const task = await taskManager.createTask("@a16z");

    await waitFor(() => {
      const currentTask = taskManager.getTask(task.id);
      return currentTask?.status === "done";
    });
    await waitFor(() => uploadRequests.length === 1);

    const lines = readFileSync(argsLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as string[]);

    assert.ok(lines.length >= 2);
    assert.deepEqual(lines[0].slice(0, 7), [
      "--flat-playlist",
      "--print",
      "%(id)s\t%(title)s",
      "--no-warnings",
      "--cookies-from-browser",
      "chrome",
      "--remote-components",
    ]);
    assert.ok(lines[0].includes("--extractor-args"));
    assert.ok(lines[0].includes("youtubetab:skip=authcheck"));
    assert.equal(lines[0][lines[0].length - 1], "https://www.youtube.com/@a16z/videos");
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    process.env.PATH = originalPath;
    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("treats bare YouTube channel ids as channel URLs when resolving subscriptions", async () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "yt-subtitle-fetcher-"));
  const binDir = path.join(tempRoot, "bin");
  const argsLogPath = path.join(tempRoot, "yt-dlp-args.log");
  mkdirSync(binDir, { recursive: true });
  writeFakeYtDlp(binDir, { argsLogPath });

  const originalCwd = process.cwd();
  const originalPath = process.env.PATH ?? "";

  try {
    process.chdir(tempRoot);
    process.env.PATH = `${binDir}:${originalPath}`;

    const taskManager = await import(
      `${pathToFileURL(TASK_MANAGER_MODULE_PATH).href}?t=${Date.now()}`
    );

    const candidates = await taskManager.listVideoCandidates("UC9cn0TuPq4dnbTY-CBsm8XA");
    assert.deepEqual(candidates, [{ id: "abc123", title: "Example Video" }]);

    const lines = readFileSync(argsLogPath, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as string[]);

    assert.equal(lines.length, 1);
    assert.ok(lines[0].includes("--extractor-args"));
    assert.ok(lines[0].includes("youtubetab:skip=authcheck"));
    assert.equal(
      lines[0][lines[0].length - 1],
      "https://www.youtube.com/channel/UC9cn0TuPq4dnbTY-CBsm8XA/videos"
    );
  } finally {
    process.chdir(originalCwd);
    process.env.PATH = originalPath;
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("collapses overlapping auto-caption cues into non-repeating transcript lines", async () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "yt-subtitle-fetcher-"));
  const binDir = path.join(tempRoot, "bin");
  mkdirSync(binDir, { recursive: true });
  writeFakeYtDlp(
    binDir,
    {
      subtitleContent: JSON.stringify({
        events: [
          { tStartMs: 10030, dDurationMs: 10, segs: [{ utf8: "probably haven't noticed yet based on my" }] },
          { tStartMs: 10040, dDurationMs: 1990, segs: [{ utf8: "probably haven't noticed yet based on my very good English." }] },
          { tStartMs: 12030, dDurationMs: 10, segs: [{ utf8: "very good English." }] },
          { tStartMs: 12040, dDurationMs: 1950, segs: [{ utf8: "very good English. I want to preface this with we've been" }] },
          { tStartMs: 13990, dDurationMs: 10, segs: [{ utf8: "I want to preface this with we've been" }] },
          { tStartMs: 14000, dDurationMs: 1670, segs: [{ utf8: "I want to preface this with we've been running around with our 4-year-old the" }] },
        ],
      }),
    }
  );

  const originalCwd = process.cwd();
  const originalPath = process.env.PATH ?? "";
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalFetch = globalThis.fetch;
  const uploadRequests: Array<{ url: string; init: RequestInit | undefined }> = [];

  globalThis.fetch = async (input, init) => {
    uploadRequests.push({ url: String(input), init });
    return new Response(
      JSON.stringify({
        doc_id: "youtube:abc123",
        file_path: "data/episodes/youtube/yt-subtitle-fetcher/2026/example.md",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  try {
    process.chdir(tempRoot);
    process.env.PATH = `${binDir}:${originalPath}`;
    process.env.DATAHUB_API_KEY = "dh_test_key_from_env";

    const taskManager = await import(
      `${pathToFileURL(TASK_MANAGER_MODULE_PATH).href}?t=${Date.now()}`
    );

    const task = await taskManager.createTask("https://www.youtube.com/watch?v=abc123");

    await waitFor(() => {
      const currentTask = taskManager.getTask(task.id);
      return currentTask?.status === "done";
    });
    await waitFor(() => uploadRequests.length === 1);

    const payload = JSON.parse(String(uploadRequests[0].init?.body));
    assert.match(
      payload.markdown,
      /\n## Transcript\n\n00:00:10 --> 00:00:11\nprobably haven't noticed yet based on my\n\n00:00:10 --> 00:00:13\nvery good English\.\n\n00:00:12 --> 00:00:14\nI want to preface this with we've been\n\n00:00:14 --> 00:00:16\nrunning around with our 4-year-old the\n/
    );
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    process.env.PATH = originalPath;
    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test("preserves spaces when json3 words are split across multiple segs", async () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "yt-subtitle-fetcher-"));
  const binDir = path.join(tempRoot, "bin");
  mkdirSync(binDir, { recursive: true });
  writeFakeYtDlp(binDir, {
    subtitleContent: JSON.stringify({
      events: [
        {
          tStartMs: 134000,
          dDurationMs: 6000,
          segs: [
            { utf8: "that " },
            { utf8: "I " },
            { utf8: "was " },
            { utf8: "able " },
            { utf8: "to " },
            { utf8: "gather " },
            { utf8: "in " },
            { utf8: "the " },
            { utf8: "past" },
          ],
        },
      ],
    }),
  });

  const originalCwd = process.cwd();
  const originalPath = process.env.PATH ?? "";
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalFetch = globalThis.fetch;
  const uploadRequests: Array<{ url: string; init: RequestInit | undefined }> = [];

  globalThis.fetch = async (input, init) => {
    uploadRequests.push({ url: String(input), init });
    return new Response(
      JSON.stringify({
        doc_id: "youtube:abc123",
        file_path: "data/episodes/youtube/yt-subtitle-fetcher/2026/example.md",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  try {
    process.chdir(tempRoot);
    process.env.PATH = `${binDir}:${originalPath}`;
    process.env.DATAHUB_API_KEY = "dh_test_key_from_env";

    const taskManager = await import(
      `${pathToFileURL(TASK_MANAGER_MODULE_PATH).href}?t=${Date.now()}`
    );

    const task = await taskManager.createTask("https://www.youtube.com/watch?v=abc123");

    await waitFor(() => {
      const currentTask = taskManager.getTask(task.id);
      return currentTask?.status === "done";
    });
    await waitFor(() => uploadRequests.length === 1);

    const payload = JSON.parse(String(uploadRequests[0].init?.body));
    assert.match(
      payload.markdown,
      /\n## Transcript\n\n00:02:14 --> 00:02:20\nthat I was able to gather in the past\n/
    );
  } finally {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    process.env.PATH = originalPath;
    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }
    rmSync(tempRoot, { recursive: true, force: true });
  }
});
