// Project image - a single screenshot used in overview or feature blocks
export interface ProjectImage {
	imageUrl: string;
	altText: string;
}

// Project feature - one highlighted module of a project
// Screenshots are a list so a feature can show several stages of the
// same flow, stacked in order
export interface ProjectFeature {
	title: string;
	description: string;
	images: ProjectImage[];
}

// Project technology - a logo shown in the technologies slider
export interface ProjectTechnology {
	id: number;
	imageUrl: string;
	altText: string;
}

// Project - single source of truth for both the list card and the detail page
export interface Project {
	slug: string;
	title: string;
	// Outbound links - each renders only when present, so a project
	// without a deployment or a public repo simply omits it
	liveUrl?: string;
	repoUrl?: string;
	// Featured projects surface in the home page teaser
	featured?: boolean;
	date: string;
	role: string;
	description: string;
	imageSrc: string;
	altText: string;
	tags: string[];
	overviewText: string;
	overviewImages: ProjectImage[];
	// Role and approach, one paragraph per line, revealed on scroll
	narrative: string[];
	features: ProjectFeature[];
	technologies: ProjectTechnology[];
}
