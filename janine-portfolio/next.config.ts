import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Faster local compile times
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},

	devIndicators: false,
};

export default nextConfig;
