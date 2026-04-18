import { NextResponse } from "next/server";
import {
  fetchWithTimeout,
  parseJsonResponse,
  safeHttpUrl,
} from "@/lib/podcast-utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ItunesEpisodeResult {
  wrapperType?: string;
  kind?: string;
  trackId?: number;
  episodeGuid?: string;
  trackName?: string;
  description?: string;
  shortDescription?: string;
  releaseDate?: string;
  trackTimeMillis?: number;
  artworkUrl600?: string;
  artworkUrl160?: string;
  artworkUrl60?: string;
  episodeUrl?: string;
  trackViewUrl?: string;
  collectionId?: number;
  collectionName?: string;
  artistName?: string;
}

interface ItunesLookupResponse {
  resultCount: number;
  results: ItunesEpisodeResult[];
}

export interface PodcastDetail {
  id: string;
  title: string;
  author: string;
  artworkUrl: string | null;
}

export interface EpisodeSummary {
  id: string;
  title: string;
  description: string;
  releaseDate: string | null;
  durationMs: number | null;
  audioUrl: string | null;
  episodeUrl: string | null;
  artworkUrl: string | null;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ podcastId: string }> }
) {
  const { podcastId } = await context.params;
  if (!podcastId || !/^\d+$/.test(podcastId)) {
    return NextResponse.json(
      { error: "A numeric podcast id is required." },
      { status: 400 }
    );
  }

  const url = new URL(request.url);
  const limitParam = Number(url.searchParams.get("limit") ?? "50");
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.trunc(limitParam), 1), 200)
    : 50;

  const lookupUrl = new URL("https://itunes.apple.com/lookup");
  lookupUrl.searchParams.set("id", podcastId);
  lookupUrl.searchParams.set("media", "podcast");
  lookupUrl.searchParams.set("entity", "podcastEpisode");
  lookupUrl.searchParams.set("limit", String(limit + 1));

  let response: Response;
  try {
    response = await fetchWithTimeout(lookupUrl.toString());
  } catch (error) {
    const aborted =
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("aborted"));
    return NextResponse.json(
      {
        error: aborted
          ? "iTunes Lookup API request timed out."
          : error instanceof Error
            ? `Failed to reach iTunes Lookup API: ${error.message}`
            : "Failed to reach iTunes Lookup API.",
      },
      { status: aborted ? 504 : 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: `iTunes Lookup API returned ${response.status}` },
      { status: 502 }
    );
  }

  let data: ItunesLookupResponse;
  try {
    data = await parseJsonResponse<ItunesLookupResponse>(response);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Upstream returned an unexpected response.",
      },
      { status: 502 }
    );
  }

  const items = data.results ?? [];

  const podcastEntry = items.find(
    (item) => item.wrapperType === "track" && item.kind === "podcast"
  );

  if (!podcastEntry) {
    return NextResponse.json(
      { error: "Podcast not found." },
      { status: 404 }
    );
  }

  const podcast: PodcastDetail = {
    id: podcastId,
    title:
      podcastEntry.collectionName ??
      podcastEntry.trackName ??
      "Untitled podcast",
    author: podcastEntry.artistName ?? "Unknown",
    artworkUrl: safeHttpUrl(
      podcastEntry.artworkUrl600 ??
        podcastEntry.artworkUrl160 ??
        podcastEntry.artworkUrl60
    ),
  };

  const episodes: EpisodeSummary[] = items
    .filter(
      (item) =>
        item.wrapperType === "podcastEpisode" || item.kind === "podcast-episode"
    )
    .slice(0, limit)
    .map((item) => {
      const id =
        item.episodeGuid ??
        (typeof item.trackId === "number" ? String(item.trackId) : null);
      if (!id) return null;
      const summary: EpisodeSummary = {
        id,
        title: item.trackName ?? "Untitled episode",
        description: item.description ?? item.shortDescription ?? "",
        releaseDate: item.releaseDate ?? null,
        durationMs:
          typeof item.trackTimeMillis === "number"
            ? item.trackTimeMillis
            : null,
        audioUrl: safeHttpUrl(item.episodeUrl),
        episodeUrl: safeHttpUrl(item.trackViewUrl),
        artworkUrl: safeHttpUrl(
          item.artworkUrl600 ?? item.artworkUrl160 ?? item.artworkUrl60
        ),
      };
      return summary;
    })
    .filter((value): value is EpisodeSummary => value !== null);

  return NextResponse.json({ podcast, resultCount: episodes.length, episodes });
}
