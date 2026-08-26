import type { Project } from "@/src/types/project";
import { allcardProject } from "./allcard";
import { scrampsProject } from "./scramps";
import { tikitingProject } from "./tikiting";

// Display order - drives the projects grid and the prev/next detail navigation
const PROJECTS: Project[] = [allcardProject, scrampsProject, tikitingProject];

// Slug lookup - returns undefined so callers decide how to handle a miss
export const getProjectBySlug = (slug: string): Project | undefined =>
	PROJECTS.find((project) => project.slug === slug);

// Index lookup - used to resolve the previous and next project
export const getProjectIndexBySlug = (slug: string): number =>
	PROJECTS.findIndex((project) => project.slug === slug);

export default PROJECTS;
