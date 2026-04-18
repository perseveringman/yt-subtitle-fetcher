import { NextResponse } from "next/server";
import {
  fetchWithTimeout,
  parseJsonResponse,
  safeHttpUrl,
} from "@/lib/podcast-utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface AppleChartArtwork {
  url?: string;
  width?: number;
  height?: number;
}

interface AppleChartItem {
  id?: string;
  name?: string;
  artistName?: string;
  artworkUrl100?: string;
  artwork?: AppleChartArtwork;
  url?: string;
  genres?: { name?: string }[];
  releaseDate?: string;
}

interface AppleChartResponse {
  feed?: {
    title?: string;
    country?: string;
    updated?: string;
    results?: AppleChartItem[];
  };
}

export interface TopPodcastSummary {
  id: string;
  title: string;
  author: string;
  artworkUrl: string | null;
  itunesUrl: string | null;
  genre: string | null;
  releaseDate: string | null;
}

const SUPPORTED_COUNTRIES = new Set([
  "us", "gb", "ca", "au", "de", "fr", "jp", "cn", "tw", "hk", "kr", "in",
  "br", "mx", "es", "it", "nl", "se", "no", "dk", "fi", "ru", "sg",
]);

function upscaleArtwork(url: string | null): string | null {
  if (!url) return null;
  return url.replace(/\/\d+x\d+(bb)?\./, "/600x600$1.");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const countryParam = (url.searchParams.get("country") ?? "us")
    .toLowerCase()
    .trim();
  const country = SUPPORTED_COUNTRIES.has(countryParam) ? countryParam : "us";

  const limitParam = Number(url.searchParams.get("limit") ?? "20");
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.trunc(limitParam), 1), 50)
    : 20;

  const chartUrl = `https://rss.marketingtools.apple.com/api/v2/${country}/podcasts/top/${limit}/podcasts.json`;

  let response: Response;
  try {
    response = await fetchWithTimeout(chartUrl);
  } catch (error) {
    const aborted =
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("aborted"));
    return NextResponse.json(
      {
        error: aborted
          ? "Apple charts request timed out."
          : error instanceof Error
            ? `Failed to reach Apple charts: ${error.message}`
            : "Failed to reach Apple charts.",
      },
      { status: aborted ? 504 : 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: `Apple charts returned ${response.status}` },
      { status: 502 }
    );
  }

  let data: AppleChartResponse;
  try {
    data = await parseJsonResponse<AppleChartResponse>(response);
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

  const items = data.feed?.results ?? [];
  const podcasts: TopPodcastSummary[] = items
    .map((item) => {
      if (!item.id) return null;
      const summary: TopPodcastSummary = {
        id: String(item.id),
        title: item.name ?? "Untitled podcast",
        author: item.artistName ?? "Unknown",
        artworkUrl: safeHttpUrl(
          upscaleArtwork(item.artwork?.url ?? item.artworkUrl100 ?? null)
        ),
        itunesUrl: safeHttpUrl(item.url),
        genre:
          item.genres?.find((genre) => genre.name && genre.name !== "Podcasts")
            ?.name ?? item.genres?.[0]?.name ?? null,
        releaseDate: item.releaseDate ?? null,
      };
      return summary;
    })
    .filter((value): value is TopPodcastSummary => value !== null);

  return NextResponse.json({
    country,
    title: data.feed?.title ?? "Top Podcasts",
    updated: data.feed?.updated ?? null,
    resultCount: podcasts.length,
    results: podcasts,
  });
}
