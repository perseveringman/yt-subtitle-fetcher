import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const devOrigins = [
  process.env.REPLIT_DEV_DOMAIN,
  process.env.REPLIT_DOMAINS,
]
  .filter((value): value is string => typeof value === "string" && value.length > 0)
  .flatMap((value) => value.split(","))
  .map((value) => value.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins: devOrigins.length > 0 ? devOrigins : undefined,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
