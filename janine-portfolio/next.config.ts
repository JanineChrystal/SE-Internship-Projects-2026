import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* For faster compile time */
  experimental: {
    turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
