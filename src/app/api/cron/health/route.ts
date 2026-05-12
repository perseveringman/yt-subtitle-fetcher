import { NextResponse } from "next/server";
import { getCronHealth } from "@/lib/cron-runner";

export async function GET() {
  return NextResponse.json(getCronHealth());
}
