import {
	FolderKanban,
	Info,
	LayoutGrid,
	type LucideIcon,
	Mail,
	Sparkles,
	UserRound,
} from "lucide-react";

export interface SectionLink {
	label: string;
	// Selector of the section this jumps to on the home page
	target: string;
	icon: LucideIcon;
	// Viewport heights to land past the section top
	// Pinned sections need this: their first frame is the animation's
	// start state, which for the hero means an empty screen
	offsetVh?: number;
}

export interface RouteLink {
	label: string;
	path: string;
	icon: LucideIcon;
}

// Section navigation - lives in the side panel, not the navbar
// Add a section here and the panel picks it up
export const SECTION_LINKS: SectionLink[] = [
	{ label: "Intro", target: "#intro", icon: Sparkles },
	{ label: "Hero", target: "#hero", icon: UserRound, offsetVh: 0.55 },
	{ label: "About", target: "#about", icon: Info },
	{ label: "Projects", target: "#projects", icon: FolderKanban },
	{ label: "Contact", target: "#contact", icon: Mail },
];

// Real routes, as opposed to in-page sections
export const ROUTE_LINKS: RouteLink[] = [
	{ label: "All projects", path: "/projects", icon: LayoutGrid },
];

export const WORDMARK = "Chrystl.";
