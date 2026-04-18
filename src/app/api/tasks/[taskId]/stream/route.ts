import { NextRequest } from "next/server";
import { getTask, subscribe } from "@/lib/task-manager";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;
  const task = getTask(taskId);

  if (!task) {
    return new Response(JSON.stringify({ error: "Task not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // Send current state immediately
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify(task)}\n\n`)
      );

      // If already done, close
      if (task.status === "done" || task.status === "error") {
        controller.close();
        return;
      }

      const unsubscribe = subscribe(taskId, (updated) => {
        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(updated)}\n\n`)
          );
          if (updated.status === "done" || updated.status === "error") {
            unsubscribe();
            controller.close();
          }
        } catch {
          unsubscribe();
        }
      });

      // Cleanup on abort
      req.signal.addEventListener("abort", () => {
        unsubscribe();
        try { controller.close(); } catch {}
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
