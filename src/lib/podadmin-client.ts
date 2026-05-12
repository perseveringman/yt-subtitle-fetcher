import { getDataHubApiBaseUrl, getDataHubUploadApiKey } from "./config.js";

export interface DataHubSubscription {
  id: number;
  source_type: string;
  source_ref: string;
  display_name: string;
  executor: "podadmin" | "yt_local";
  cadence_cron: string;
  enabled: boolean;
  options: Record<string, unknown>;
  due: boolean;
}

export interface FinishRunBody {
  status: "success" | "failed" | "partial";
  items_archived: number;
  items_failed: number;
  error?: string;
}

function authHeaders(extra: HeadersInit = {}): HeadersInit {
  const apiKey = getDataHubUploadApiKey();
  if (!apiKey) {
    throw new Error("DATAHUB_API_KEY or PODADMIN_API_KEY is required for scheduled polling");
  }
  return {
    "Content-Type": "application/json",
    "X-DataHub-Api-Key": apiKey,
    ...extra,
  };
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${getDataHubApiBaseUrl()}${path}`, {
    ...init,
    headers: authHeaders(init.headers),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DataHub API ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

export async function listDueYtSubscriptions(limit = 50): Promise<DataHubSubscription[]> {
  const data = await request<{ items: DataHubSubscription[] }>(
    `/api/v1/subscriptions?executor=yt_local&due=true&limit=${limit}`
  );
  return data.items || [];
}

export async function startSubscriptionRun(subscriptionId: number): Promise<number> {
  const data = await request<{ task_id: number }>(
    `/api/v1/subscriptions/${subscriptionId}/runs/start`,
    {
      method: "POST",
      body: JSON.stringify({
        client_version: "yt-subtitle-fetcher",
        host: typeof process !== "undefined" ? process.env.HOSTNAME || null : null,
      }),
    }
  );
  return data.task_id;
}

export async function finishSubscriptionRun(
  subscriptionId: number,
  taskId: number,
  body: FinishRunBody
): Promise<void> {
  await request(`/api/v1/subscriptions/${subscriptionId}/runs/${taskId}/finish`, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

// Server-side cap is 1000 per request; chunk large inputs to avoid HTTP 400.
const EXISTS_BATCH_SIZE = 900;

export async function getExistingDocuments(docIds: string[]): Promise<Set<string>> {
  if (docIds.length === 0) {
    return new Set();
  }
  const result = new Set<string>();
  for (let i = 0; i < docIds.length; i += EXISTS_BATCH_SIZE) {
    const batch = docIds.slice(i, i + EXISTS_BATCH_SIZE);
    const data = await request<{ existing: string[] }>("/api/v1/documents/exists", {
      method: "POST",
      body: JSON.stringify({ doc_ids: batch }),
    });
    for (const id of data.existing || []) {
      result.add(id);
    }
  }
  return result;
}
