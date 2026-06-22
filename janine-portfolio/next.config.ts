import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* For faster compile time */
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},

	/*To automatically redirect the user to home page as a default */
	async redirects() {
		return [
			{
				source: "/", // Captures when a user arrives at the base root URL
				destination: "/home", // Automatically reroutes the user's path to /home
				permanent: true, // Triggers a 308 permanent status code for aggressive browser caching
			},
		];
	},

	devIndicators: false,
};

export default nextConfig;
