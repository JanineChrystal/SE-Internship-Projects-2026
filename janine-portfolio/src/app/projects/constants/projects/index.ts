import type { Project } from "@/src/types/project";
import { allcardProject } from "./allcard";
import { blogsiteProject } from "./blogsite";
import { scrampsProject } from "./scramps";
import { takdaProject } from "./takda";
import { tikitingProject } from "./tikiting";

const MONTH_INDEX: Record<string, number> = {
	january: 0,
	february: 1,
	march: 2,
	april: 3,
	may: 4,
	june: 5,
	july: 6,
	august: 7,
	september: 8,
	october: 9,
	november: 10,
	december: 11,
};

// Sort key - the month a project finished, read off the end of its
// display range, so "June 2025 - January 2026" sorts as January 2026
// An unparseable date sorts last rather than throwing: a typo in the
// data should degrade the order, not break the page
const getEndMonth = (project: Project): number => {
	const parts = [...project.date.matchAll(/([A-Za-z]+)\s+(\d{4})/g)];
	const last = parts.at(-1);

	if (!last) {
		return Number.NEGATIVE_INFINITY;
	}

	const month = MONTH_INDEX[last[1].toLowerCase()];

	if (month === undefined) {
		return Number.NEGATIVE_INFINITY;
	}

	return Number(last[2]) * 12 + month;
};

// Listed oldest to newest - the display order is derived below, so a
// new project only has to be added here
const ALL_PROJECTS: Project[] = [
	allcardProject,
	scrampsProject,
	tikitingProject,
	blogsiteProject,
	takdaProject,
];

// Display order - newest first, driving the index rail, the prev/next
// detail navigation and the featured subset
// Sort is stable, so projects finishing in the same month keep the
// order they are listed in above
const PROJECTS: Project[] = [...ALL_PROJECTS].sort(
	(a, b) => getEndMonth(b) - getEndMonth(a),
);

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
