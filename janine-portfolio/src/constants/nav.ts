export interface NavItem {
	label: string;
	path: string;
	// Anchors resolve against sections on the home page
	isAnchor?: boolean;
}

export const LEFT_LINKS: NavItem[] = [
	{ label: "Home", path: "/" },
	{ label: "About Me", path: "/#about", isAnchor: true },
];

export const RIGHT_LINKS: NavItem[] = [
	{ label: "Projects", path: "/projects" },
	{ label: "Contact Me", path: "/#contact", isAnchor: true },
];
