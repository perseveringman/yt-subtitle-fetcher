export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.DATAHUB_CRON_DISABLED === "1") return;

  const cron = await import("node-cron");
  const { pollAndRunDueSubscriptions } = await import("./src/lib/cron-runner");

  cron.schedule("*/5 * * * *", () => {
    pollAndRunDueSubscriptions().catch((error: unknown) => {
      console.error("[datahub-cron] tick failed", error);
    });
  });
}
