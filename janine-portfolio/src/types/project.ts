// Frame shape for a screenshot - four buckets rather than free values,
// so every capture lands on a ratio close to its own and is only ever
// cropped by a hair
// landscape 16:9, square 1:1, portrait 3:4, tall 9:16 for phone shots
export type ImageAspect = "landscape" | "square" | "portrait" | "tall";

// Project image - a single screenshot used in overview or feature blocks
export interface ProjectImage {
	imageUrl: string;
	altText: string;
	// Omitted means landscape, which most desktop captures are
	aspect?: ImageAspect;
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
	features: ProjectFeature[];
	technologies: ProjectTechnology[];
}
