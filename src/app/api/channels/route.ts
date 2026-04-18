import { NextResponse } from "next/server";
import { getChannels, getChannelVideos } from "@/lib/task-manager";

export async function GET() {
  const channels = getChannels();
  const result = channels.map((name) => ({
    name,
    videoCount: getChannelVideos(name).length,
  }));
  return NextResponse.json(result);
}
