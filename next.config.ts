import type { NextConfig } from "next";

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
};

export default nextConfig;
