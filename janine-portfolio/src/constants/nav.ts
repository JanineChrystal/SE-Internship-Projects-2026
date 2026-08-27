export interface SectionLink {
	label: string;
	// Selector of the section this jumps to on the home page
	target: string;
}

export interface RouteLink {
	label: string;
	path: string;
}

// Section navigation - lives in the side panel, not the navbar
// Add a section here and the panel picks it up
export const SECTION_LINKS: SectionLink[] = [
	{ label: "Intro", target: "#intro" },
	{ label: "Home", target: "#hero" },
	{ label: "About", target: "#about" },
	{ label: "Projects", target: "#projects" },
	{ label: "Contact", target: "#contact" },
];

// Real routes, as opposed to in-page sections
export const ROUTE_LINKS: RouteLink[] = [
	{ label: "All projects", path: "/projects" },
];

export const WORDMARK = "Chrystl.";
