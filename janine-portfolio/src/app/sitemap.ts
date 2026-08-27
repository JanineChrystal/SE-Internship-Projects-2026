import type { MetadataRoute } from "next";
import PROJECTS from "@/src/app/projects/constants/projects";
import { SITE_URL } from "@/src/constants/site";

// Sitemap - the home page plus every project, generated from data
// The home page is a one-pager, so its sections are anchors rather
// than URLs and correctly do not appear here
export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
		url: `${SITE_URL}/projects/${project.slug}`,
		lastModified,
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [
		{
			url: SITE_URL,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/projects`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		...projectRoutes,
	];
}
