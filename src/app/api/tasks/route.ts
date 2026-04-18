import { NextRequest, NextResponse } from "next/server";
import { createRetryTask, createTask, getAllTasks } from "@/lib/task-manager";

export async function GET() {
  const tasks = getAllTasks();
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const retryChannel = typeof body.retryChannel === "string" ? body.retryChannel : "";
  const sourceUrl =
    typeof body.sourceUrl === "string" ? body.sourceUrl : body.channelUrl;

  if (!retryChannel && (!sourceUrl || typeof sourceUrl !== "string")) {
    return NextResponse.json(
      { error: "sourceUrl or retryChannel is required" },
      { status: 400 }
    );
  }

  try {
    const task = retryChannel
      ? await createRetryTask(retryChannel)
      : await createTask(sourceUrl);
    return NextResponse.json(task);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
