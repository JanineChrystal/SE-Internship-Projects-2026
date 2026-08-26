// Project image - a single screenshot used in overview or feature blocks
export interface ProjectImage {
	imageUrl: string;
	altText: string;
}

// Project feature - one highlighted module of a project
export interface ProjectFeature {
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	extendedDescription: string;
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
	date: string;
	role: string;
	description: string;
	imageSrc: string;
	altText: string;
	tags: string[];
	overviewText: string;
	overviewImages: ProjectImage[];
	features: ProjectFeature[];
	technologies: ProjectTechnology[];
}
