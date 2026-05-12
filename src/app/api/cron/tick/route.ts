import { NextResponse } from "next/server";
import { pollAndRunDueSubscriptions } from "@/lib/cron-runner";

export async function POST() {
  try {
    const result = await pollAndRunDueSubscriptions();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
