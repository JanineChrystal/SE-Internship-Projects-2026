import type { Project } from "@/src/types/project";
import { allcardProject } from "./allcard";
import { blogsiteProject } from "./blogsite";
import { scrampsProject } from "./scramps";
import { tikitingProject } from "./tikiting";

// Display order - drives the projects grid and the prev/next detail navigation
const PROJECTS: Project[] = [
	allcardProject,
	scrampsProject,
	tikitingProject,
	blogsiteProject,
];

// Slug lookup - returns undefined so callers decide how to handle a miss
export const getProjectBySlug = (slug: string): Project | undefined =>
	PROJECTS.find((project) => project.slug === slug);

// Index lookup - used to resolve the previous and next project
export const getProjectIndexBySlug = (slug: string): number =>
	PROJECTS.findIndex((project) => project.slug === slug);

// Featured subset - falls back to the first entries so the teaser
// is never empty if nobody has flagged anything
export const getFeaturedProjects = (limit = 3): Project[] => {
	const flagged = PROJECTS.filter((project) => project.featured);
	return (flagged.length > 0 ? flagged : PROJECTS).slice(0, limit);
};

export default PROJECTS;
