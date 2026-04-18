import { NextResponse } from "next/server";
import {
  fetchWithTimeout,
  parseJsonResponse,
  safeHttpUrl,
} from "@/lib/podcast-utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ItunesPodcastResult {
  collectionId?: number;
  trackId?: number;
  collectionName?: string;
  trackName?: string;
  artistName?: string;
  artworkUrl600?: string;
  artworkUrl100?: string;
  feedUrl?: string;
  trackCount?: number;
  primaryGenreName?: string;
  releaseDate?: string;
  collectionViewUrl?: string;
  country?: string;
}

interface ItunesSearchResponse {
  resultCount: number;
  results: ItunesPodcastResult[];
}

export interface PodcastSummary {
  id: string;
  title: string;
  author: string;
  artworkUrl: string | null;
  feedUrl: string | null;
  episodeCount: number | null;
  genre: string | null;
  releaseDate: string | null;
  itunesUrl: string | null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const term = url.searchParams.get("term")?.trim();
  const limitParam = Number(url.searchParams.get("limit") ?? "25");
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.trunc(limitParam), 1), 50)
    : 25;

  if (!term) {
    return NextResponse.json(
      { error: "Search term is required." },
      { status: 400 }
    );
  }

  const itunesUrl = new URL("https://itunes.apple.com/search");
  itunesUrl.searchParams.set("media", "podcast");
  itunesUrl.searchParams.set("entity", "podcast");
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

  const podcasts: PodcastSummary[] = (data.results ?? [])
    .map((item) => {
      const id = item.collectionId ?? item.trackId;
      if (!id) return null;
      const summary: PodcastSummary = {
        id: String(id),
        title: item.collectionName ?? item.trackName ?? "Untitled podcast",
        author: item.artistName ?? "Unknown",
        artworkUrl: safeHttpUrl(item.artworkUrl600 ?? item.artworkUrl100),
        feedUrl: safeHttpUrl(item.feedUrl),
        episodeCount:
          typeof item.trackCount === "number" ? item.trackCount : null,
        genre: item.primaryGenreName ?? null,
        releaseDate: item.releaseDate ?? null,
        itunesUrl: safeHttpUrl(item.collectionViewUrl),
      };
      return summary;
    })
    .filter((value): value is PodcastSummary => value !== null);

  return NextResponse.json({ resultCount: podcasts.length, results: podcasts });
}
