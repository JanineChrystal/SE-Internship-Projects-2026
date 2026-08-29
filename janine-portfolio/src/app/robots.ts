import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/constants/site";

// Robots - everything is public, so this exists mainly to point
// crawlers at the sitemap
export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
