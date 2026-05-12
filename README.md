# YT Archive Fetcher

A small Next.js app that archives YouTube videos into agent-friendly Markdown files.

## What it supports

- Batch archiving from a YouTube channel URL or `@handle`
- Batch archiving from a YouTube playlist URL
- Single-video archiving from normal YouTube links, `youtu.be` links, Shorts, and Live URLs
- Subtitle download when available
- Metadata + comment capture via `yt-dlp`
- Cached batch manifests with missing-item retry
- Persistent task history and stage-by-stage progress
- Parallel video downloads with a bounded worker pool

## How the archive is stored

Each video is written to `data/<channel>/...md`.

For batch sources, the app also writes a cached manifest file next to the Markdown archives. The manifest stores the full expected video list, status per video, retry attempts, and the last failure message when a video could not be archived.

Task snapshots are also persisted to `data/.tasks.json`, so the task list survives page refreshes and process restarts.

The Markdown format is designed for downstream agent analysis:

- YAML frontmatter stores normalized scalar fields plus preserved raw payloads:
  - `metadata_json`
  - `comments_json`
- The body contains readable sections:
  - `## Video Summary`
  - `## Description`
- `## Transcript` (json3-derived timed cue blocks rendered as second-precision `start --> end` lines)
  - `## Comments`
- Comment boundaries are marked with:
  - `<!-- YOUTUBE_COMMENTS_START -->`
  - `<!-- YOUTUBE_COMMENTS_END -->`

Even if subtitles are missing, the app still writes a Markdown record so metadata and comments are preserved.

## Batch retry behavior

For channel and playlist jobs:

- the full list is cached before download begins
- the first download pass runs against that cached list
- any videos still missing after the first pass are retried once automatically
- the UI shows the full list, marks missing items clearly, and offers a batch retry button for remaining gaps

## Task execution model

- each task exposes explicit stages such as source resolution, manifest caching, initial pass, retry pass, and finalization
- the current active stage shows its own progress bar and live running downloads
- interrupted in-flight tasks are restored as errored tasks on startup instead of being shown as still running
- batch video downloads run in parallel with a fixed concurrency limit

## Development

```bash
npm run dev
```

## Requirements

- `yt-dlp` available in `PATH`
- Chrome cookies available locally, since the app currently uses `--cookies-from-browser chrome`
- put your DataHub upload key into `.env.local` as `DATAHUB_API_KEY=...` if you want archived videos uploaded to DataHub / podadmin

## Scheduled DataHub execution

The app can run as the `yt_local` executor for DataHub subscriptions. DataHub owns the subscription list; this app polls due YouTube subscriptions every 5 minutes, filters existing `youtube:<video_id>` docs through `/api/v1/documents/exists`, archives missing videos, uploads them, then reports run status back to DataHub.

Set `.env.local`:

```bash
PODADMIN_API_URL=http://localhost:8000
DATAHUB_API_KEY=dh_...
```

Manual tick for debugging:

```bash
curl -X POST http://localhost:5008/api/cron/tick
```

Health check:

```bash
curl http://localhost:5008/api/cron/health
```

The response reports best-effort in-process state:

```json
{
  "last_tick_at": null,
  "running_tasks": 0,
  "cached_subs_count": null,
  "next_tick_at": null
}
```

Install or remove the macOS LaunchAgent from the project root:

```bash
pnpm build
scripts/install-launchagent.sh
scripts/uninstall-launchagent.sh
```
