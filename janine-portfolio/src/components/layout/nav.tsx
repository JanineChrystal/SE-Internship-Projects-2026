"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LEFT_LINKS, type NavItem, RIGHT_LINKS } from "../../constants/nav";

const Navbar = () => {
	const pathname = usePathname();

	// // State to track if the mobile burger menu is open
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// // Combine all links into one array for the mobile view stack
	const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

	// // Lock the background scroll when the mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isMobileMenuOpen]);

	// // Helper function mapped to handle both desktop and mobile link rendering
	const renderLinks = (items: NavItem[], onClickCallback?: () => void) => {
		return items.map((link) => {
			const isActive = pathname === link.path;

			return (
				<div key={link.path} className="relative w-max">
					{isActive && (
						<div className="absolute -inset-x-6 -inset-y-2 nav-glow-indicator blur-md rounded-full -z-10" />
					)}
					<Link
						href={link.path}
						onClick={onClickCallback}
						className={`font-bold text-lg lg:text-base xl:text-lg transition-colors ${isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"}`}
					>
						{link.label}
					</Link>
				</div>
			);
		});
	};

	return (
		// // Adjusted padding for responsiveness: px-8 on mobile, px-24 on large screens
		<nav className="absolute top-0 left-0 mt-3 w-full flex items-center justify-between px-8 lg:px-24 xl:px-98 py-8 z-50 bg-transparent">
			{/* // Desktop: Left side navigation block (Hidden on mobile) */}
			<div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1">
				{renderLinks(LEFT_LINKS)}
			</div>

			{/* // Center signature layout branding token (Visible on all sizes) */}
			<div className="flex justify-start lg:justify-center flex-1 lg:flex-none">
				<span className="text-3xl font-serif font-black tracking-wide text-foreground relative z-50">
					Chrystl.
				</span>
			</div>

			{/* // Desktop: Right side navigation block (Hidden on mobile) */}
			<div className="hidden lg:flex items-center justify-end gap-8 xl:gap-12 flex-1">
				{renderLinks(RIGHT_LINKS)}
			</div>

			{/* // Mobile: Burger Menu Toggle Button (Hidden on desktop) */}
			<div className="flex lg:hidden flex-1 justify-end">
				<button
					type="button"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="p-2 text-foreground relative z-50"
					aria-label="Toggle Menu"
				>
					{isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
				</button>
			</div>

			{/* // Mobile: Full-screen Menu Overlay */}
			<div
				className={`fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 z-40 lg:hidden ${
					isMobileMenuOpen
						? "opacity-100 visible"
						: "opacity-0 invisible pointer-events-none"
				}`}
			>
				<div className="flex flex-col items-center gap-10">
					{renderLinks(ALL_LINKS, () => setIsMobileMenuOpen(false))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
