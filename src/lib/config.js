import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, readFileSync } from "node:fs";

const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
let envLoaded = false;

/**
 * @param {string} rawValue
 * @returns {string}
 */
function normalizeEnvValue(rawValue) {
  const value = rawValue.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

/**
 * @param {string} filePath
 */
function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = normalizeEnvValue(line.slice(separatorIndex + 1));
    if (!key || process.env[key] !== undefined) {
      continue;
    }

    process.env[key] = value;
  }
}

function ensureEnvLoaded() {
  if (envLoaded) {
    return;
  }

  loadEnvFile(path.join(PROJECT_ROOT, ".env.local"));
  loadEnvFile(path.join(PROJECT_ROOT, ".env"));
  envLoaded = true;
}

/**
 * @returns {string | null}
 */
export function getDataHubUploadApiKey() {
  ensureEnvLoaded();

  const dataHubApiKey = process.env.DATAHUB_API_KEY?.trim();
  if (dataHubApiKey) {
    return dataHubApiKey;
  }

  const podadminApiKey = process.env.PODADMIN_API_KEY?.trim();
  return podadminApiKey ? podadminApiKey : null;
}
