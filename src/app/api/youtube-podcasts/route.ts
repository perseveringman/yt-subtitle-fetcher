import { NextResponse } from "next/server";
import { YOUTUBE_PODCASTS, type YoutubePodcast } from "@/lib/youtube-podcasts";
import { fetchWithTimeout, safeHttpUrl } from "@/lib/podcast-utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface CachedAvatar {
  url: string | null;
  fetchedAt: number;
}

const AVATAR_TTL_MS = 24 * 60 * 60 * 1000;
const avatarCache = new Map<string, CachedAvatar>();

function extractAvatar(html: string): string | null {
  const ogImage = html.match(
    /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i
  );
  if (ogImage?.[1]) return ogImage[1];

  const linkImage = html.match(
    /<link\s+rel=["']image_src["']\s+href=["']([^"']+)["']/i
  );
  if (linkImage?.[1]) return linkImage[1];

  const avatarMatch = html.match(/"avatar":\s*\{\s*"thumbnails":\s*\[([^\]]+)\]/);
  if (avatarMatch?.[1]) {
    const urls = [...avatarMatch[1].matchAll(/"url":"([^"]+)"/g)].map(
      (match) => match[1]
    );
    if (urls.length > 0) return urls[urls.length - 1];
  }

  return null;
}

async function resolveAvatar(channelUrl: string): Promise<string | null> {
  const cached = avatarCache.get(channelUrl);
  if (cached && Date.now() - cached.fetchedAt < AVATAR_TTL_MS) {
    return cached.url;
  }

  try {
    const response = await fetchWithTimeout(channelUrl, 8000);
    if (!response.ok) {
      avatarCache.set(channelUrl, { url: null, fetchedAt: Date.now() });
      return null;
    }
    const html = await response.text();
    const avatar = safeHttpUrl(extractAvatar(html));
    avatarCache.set(channelUrl, { url: avatar, fetchedAt: Date.now() });
    return avatar;
  } catch {
    avatarCache.set(channelUrl, { url: null, fetchedAt: Date.now() });
    return null;
  }
}

export interface YoutubePodcastWithAvatar extends YoutubePodcast {
  avatarUrl: string | null;
}

export async function GET() {
  const enriched: YoutubePodcastWithAvatar[] = await Promise.all(
    YOUTUBE_PODCASTS.map(async (podcast) => ({
      ...podcast,
      avatarUrl: await resolveAvatar(podcast.url),
    }))
  );

  return NextResponse.json({ podcasts: enriched });
}
