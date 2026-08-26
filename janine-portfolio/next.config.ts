import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Faster local compile times
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},

	images: {
		// AVIF first, WebP fallback - the browser picks via Accept
		formats: ["image/avif", "image/webp"],
		// Cache derivatives for a year; sources are content-stable
		minimumCacheTTL: 31536000,
	},

	devIndicators: false,
};

export default nextConfig;
