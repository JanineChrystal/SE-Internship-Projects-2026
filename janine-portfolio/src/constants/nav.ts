export interface NavItem {
	label: string;
	path: string;
}

export const LEFT_LINKS: NavItem[] = [
	{ label: "Home", path: "/" },
	{ label: "About Me", path: "/about" },
];

export const RIGHT_LINKS: NavItem[] = [
	{ label: "Projects", path: "/projects" },
	{ label: "Contact Me", path: "/contact" },
];
