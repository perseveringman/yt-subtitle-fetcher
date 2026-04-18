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
  - `## Transcript`
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
