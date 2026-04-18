import { NextRequest, NextResponse } from "next/server";
import { getVideoRecordContent } from "@/lib/task-manager";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ channel: string; filename: string }> }
) {
  const { channel, filename } = await params;
  const decodedChannel = decodeURIComponent(channel);
  const decodedFilename = decodeURIComponent(filename);
  const content = getVideoRecordContent(decodedChannel, decodedFilename);

  if (content === null) {
    return NextResponse.json(
      { error: "Video record not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ content });
}
