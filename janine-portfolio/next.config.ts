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

	// Retired routes - the home page absorbed both sections
	// Permanent (308) so search engines transfer the old ranking rather
	// than treating these as temporary detours
	async redirects() {
		return [
			{ source: "/about", destination: "/#about", permanent: true },
			{ source: "/contact", destination: "/#contact", permanent: true },
		];
	},
};

export default nextConfig;
