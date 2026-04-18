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

interface ItunesSearchResponse {
  resultCount: number;
  results: ItunesEpisodeResult[];
}

export interface EpisodeSearchResult {
  id: string;
  title: string;
  podcastId: string | null;
  podcastTitle: string;
  podcastAuthor: string;
  description: string;
  releaseDate: string | null;
  durationMs: number | null;
  audioUrl: string | null;
  episodeUrl: string | null;
  artworkUrl: string | null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const term = url.searchParams.get("term")?.trim();
  const limitParam = Number(url.searchParams.get("limit") ?? "30");
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.trunc(limitParam), 1), 100)
    : 30;

  if (!term) {
    return NextResponse.json(
      { error: "Search term is required." },
      { status: 400 }
    );
  }

  const itunesUrl = new URL("https://itunes.apple.com/search");
  itunesUrl.searchParams.set("media", "podcast");
  itunesUrl.searchParams.set("entity", "podcastEpisode");
  itunesUrl.searchParams.set("term", term);
  itunesUrl.searchParams.set("limit", String(limit));

  let response: Response;
  try {
    response = await fetchWithTimeout(itunesUrl.toString());
  } catch (error) {
    const aborted =
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("aborted"));
    return NextResponse.json(
      {
        error: aborted
          ? "iTunes Search API request timed out."
          : error instanceof Error
            ? `Failed to reach iTunes Search API: ${error.message}`
            : "Failed to reach iTunes Search API.",
      },
      { status: aborted ? 504 : 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: `iTunes Search API returned ${response.status}` },
      { status: 502 }
    );
  }

  let data: ItunesSearchResponse;
  try {
    data = await parseJsonResponse<ItunesSearchResponse>(response);
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

  const episodes: EpisodeSearchResult[] = (data.results ?? [])
    .map((item) => {
      const id =
        item.episodeGuid ??
        (typeof item.trackId === "number" ? String(item.trackId) : null);
      if (!id) return null;
      const summary: EpisodeSearchResult = {
        id,
        title: item.trackName ?? "Untitled episode",
        podcastId:
          typeof item.collectionId === "number"
            ? String(item.collectionId)
            : null,
        podcastTitle: item.collectionName ?? "Unknown podcast",
        podcastAuthor: item.artistName ?? "Unknown",
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
    .filter((value): value is EpisodeSearchResult => value !== null);

  return NextResponse.json({ resultCount: episodes.length, results: episodes });
}
