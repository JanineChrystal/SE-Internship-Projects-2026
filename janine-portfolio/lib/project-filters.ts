import type { Project } from "@/src/types/project";

// Facet values offered by the filter bar, derived from the data
export interface ProjectFacets {
	tags: string[];
	roles: string[];
	years: string[];
}

// Active selection - an empty string means "no constraint"
export interface ProjectFilters {
	query: string;
	tag: string;
	role: string;
	year: string;
}

export const EMPTY_FILTERS: ProjectFilters = {
	query: "",
	tag: "",
	role: "",
	year: "",
};

// Years a project touches - dates are ranges such as
// "June 2025 - January 2026", so one project can span two years
export const getProjectYears = (project: Project): string[] => {
	const matches = project.date.match(/\d{4}/g);
	return matches ? Array.from(new Set(matches)) : [];
};

// Facet lists - built from the data, so a new project needs no
// filter configuration of its own
export const collectFacets = (projects: Project[]): ProjectFacets => {
	const tags = new Set<string>();
	const roles = new Set<string>();
	const years = new Set<string>();

	for (const project of projects) {
		for (const tag of project.tags) {
			tags.add(tag);
		}
		roles.add(project.role);
		for (const year of getProjectYears(project)) {
			years.add(year);
		}
	}

	return {
		tags: [...tags].sort((a, b) => a.localeCompare(b)),
		roles: [...roles].sort((a, b) => a.localeCompare(b)),
		// Newest first - the order people actually scan
		years: [...years].sort((a, b) => b.localeCompare(a)),
	};
};

// Free text match - title, role, summary and tags all count, so
// searching a technology finds projects that never name it in prose
const matchesQuery = (project: Project, query: string): boolean => {
	const needle = query.trim().toLowerCase();

	if (needle.length === 0) {
		return true;
	}

	const haystack = [
		project.title,
		project.role,
		project.description,
		...project.tags,
	]
		.join(" ")
		.toLowerCase();

	return haystack.includes(needle);
};

// Every active filter must pass - they narrow rather than widen
export const filterProjects = (
	projects: Project[],
	filters: ProjectFilters,
): Project[] =>
	projects.filter(
		(project) =>
			matchesQuery(project, filters.query) &&
			(filters.tag === "" || project.tags.includes(filters.tag)) &&
			(filters.role === "" || project.role === filters.role) &&
			(filters.year === "" || getProjectYears(project).includes(filters.year)),
	);

export const hasActiveFilters = (filters: ProjectFilters): boolean =>
	Object.values(filters).some((value) => value !== "");
