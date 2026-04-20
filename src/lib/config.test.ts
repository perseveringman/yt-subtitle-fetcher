import assert from "node:assert/strict";
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";

const CONFIG_MODULE_PATH = fileURLToPath(new URL("./config.js", import.meta.url));
const PROJECT_ROOT = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));
const ENV_LOCAL_PATH = path.join(PROJECT_ROOT, ".env.local");

async function importConfigModule() {
  return import(`${pathToFileURL(CONFIG_MODULE_PATH).href}?t=${Date.now()}-${Math.random()}`);
}

test("reads DATAHUB_API_KEY from config", async () => {
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalPodadminApiKey = process.env.PODADMIN_API_KEY;

  try {
    process.env.DATAHUB_API_KEY = "dh_key_from_config";
    delete process.env.PODADMIN_API_KEY;

    const config = await importConfigModule();

    assert.equal(config.getDataHubUploadApiKey(), "dh_key_from_config");
  } finally {
    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }

    if (originalPodadminApiKey === undefined) {
      delete process.env.PODADMIN_API_KEY;
    } else {
      process.env.PODADMIN_API_KEY = originalPodadminApiKey;
    }
  }
});

test("falls back to PODADMIN_API_KEY when DATAHUB_API_KEY is unset", async () => {
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalPodadminApiKey = process.env.PODADMIN_API_KEY;
  const existingEnvLocal = existsSync(ENV_LOCAL_PATH)
    ? readFileSync(ENV_LOCAL_PATH, "utf8")
    : null;

  try {
    delete process.env.DATAHUB_API_KEY;
    process.env.PODADMIN_API_KEY = "legacy_podadmin_key";
    writeFileSync(ENV_LOCAL_PATH, "DATAHUB_API_KEY=\n", "utf8");

    const config = await importConfigModule();

    assert.equal(config.getDataHubUploadApiKey(), "legacy_podadmin_key");
  } finally {
    if (existingEnvLocal === null) {
      rmSync(ENV_LOCAL_PATH, { force: true });
    } else {
      writeFileSync(ENV_LOCAL_PATH, existingEnvLocal, "utf8");
    }

    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }

    if (originalPodadminApiKey === undefined) {
      delete process.env.PODADMIN_API_KEY;
    } else {
      process.env.PODADMIN_API_KEY = originalPodadminApiKey;
    }
  }
});

test("auto-loads DATAHUB_API_KEY from .env.local", async () => {
  const originalDataHubApiKey = process.env.DATAHUB_API_KEY;
  const originalPodadminApiKey = process.env.PODADMIN_API_KEY;
  const existingEnvLocal = existsSync(ENV_LOCAL_PATH)
    ? readFileSync(ENV_LOCAL_PATH, "utf8")
    : null;

  try {
    delete process.env.DATAHUB_API_KEY;
    delete process.env.PODADMIN_API_KEY;
    writeFileSync(
      ENV_LOCAL_PATH,
      "DATAHUB_API_KEY=dh_key_loaded_from_env_file\n",
      "utf8"
    );

    const config = await importConfigModule();

    assert.equal(config.getDataHubUploadApiKey(), "dh_key_loaded_from_env_file");
  } finally {
    if (existingEnvLocal === null) {
      rmSync(ENV_LOCAL_PATH, { force: true });
    } else {
      writeFileSync(ENV_LOCAL_PATH, existingEnvLocal, "utf8");
    }

    if (originalDataHubApiKey === undefined) {
      delete process.env.DATAHUB_API_KEY;
    } else {
      process.env.DATAHUB_API_KEY = originalDataHubApiKey;
    }

    if (originalPodadminApiKey === undefined) {
      delete process.env.PODADMIN_API_KEY;
    } else {
      process.env.PODADMIN_API_KEY = originalPodadminApiKey;
    }
  }
});
