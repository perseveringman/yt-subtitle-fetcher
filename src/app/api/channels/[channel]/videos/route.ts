import { NextRequest, NextResponse } from "next/server";
import { getChannelVideos } from "@/lib/task-manager";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ channel: string }> }
) {
  const { channel } = await params;
  const decodedChannel = decodeURIComponent(channel);
  const videos = getChannelVideos(decodedChannel);
  return NextResponse.json(videos);
}
