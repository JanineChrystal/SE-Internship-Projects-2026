"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { LEFT_LINKS, type NavItem, RIGHT_LINKS } from "../../constants/nav";

const Navbar = (): React.ReactElement => {
	const pathname = usePathname();

	// Extracted layout pattern helper function to eliminate repetitive markup blocks
	const renderLinks = (items: NavItem[]) => {
		return items.map((link) => {
			const isActive = pathname === link.path;

			return (
				// Uses the link's path as a unique React rendering map identity token
				<div key={link.path} className="relative">
					{/* Flexibly injects the background blur highlighting layer exclusively for active items */}
					{isActive && (
						<div className="absolute -inset-x-6 -inset-y-2 nav-glow-indicator blur-md rounded-full -z-10" />
					)}
					<Link
						href={link.path}
						className={`font-bold text-lg transition-colors ${isActive ? "text-black" : "text-black/80 hover:text-black"}`}
					>
						{link.label}
					</Link>
				</div>
			);
		});
	};

	return (
		<nav className="absolute top-0 left-0 w-full flex items-center justify-between px-100 py-8 z-50 bg-transparent">
			{/* Left side navigation block */}
			<div className="flex items-center gap-12">{renderLinks(LEFT_LINKS)}</div>

			{/* Center signature layout branding token */}
			<h2 className="text-3xl font-serif font-black tracking-wide text-black">
				Chrystl.
			</h2>

			{/* Right side navigation block */}
			<div className="flex items-center gap-12">{renderLinks(RIGHT_LINKS)}</div>
		</nav>
	);
};

export default Navbar;
