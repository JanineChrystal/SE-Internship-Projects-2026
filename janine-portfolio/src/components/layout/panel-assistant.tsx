"use client";

import { useAtom } from "jotai";
import {
	ArrowDown,
	ArrowUp,
	Moon,
	SlidersHorizontal,
	Sun,
	X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { scrollToBottom, scrollToSection, scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { ROUTE_LINKS, SECTION_LINKS } from "@/src/constants/nav";
import { THEME_ELEMENTS } from "@/src/constants/themeElements";
import { themeElementAtom, themeModeAtom } from "@/src/store/themeAtom";

const PANEL_ID = "site-panel";

// One panel, two presentations
// Desktop keeps the original hover strip on the right edge
// Touch gets a sticky button, since hover does not exist there
const PanelAssistant = () => {
	const [mode, setMode] = useAtom(themeModeAtom);
	const [element, setElement] = useAtom(themeElementAtom);
	const [isOpen, setIsOpen] = useState(false);

	// Sync the DOM HTML element classes and attributes with Jotai state
	useEffect(() => {
		const html = document.documentElement;

		if (mode === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}

		html.setAttribute("data-element", element);
	}, [mode, element]);

	// Escape closes the touch panel
	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen]);

	// Jumping to a section closes the panel, so it does not sit over
	// the content the visitor just asked to see
	const goToSection = useCallback((target: string, offsetVh = 0) => {
		scrollToSection(target, offsetVh * window.innerHeight, true);
		setIsOpen(false);
	}, []);

	const toggleMode = () => {
		setMode(mode === "light" ? "dark" : "light");
	};

	const isDark = mode === "dark";

	return (
		<>
			{/* Sticky trigger - tablet and phone only, where hover does not exist */}
			<button
				type="button"
				onClick={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
				aria-controls={PANEL_ID}
				aria-label={isOpen ? "Close site panel" : "Open site panel"}
				className="surface-glass fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-ink-strong transition-transform hover:scale-105 active:scale-95 lg:hidden"
			>
				{isOpen ? <X size={22} /> : <SlidersHorizontal size={22} />}
			</button>

			{/* Desktop: an edge strip that reveals the panel on hover
			    Touch: a small anchor above the sticky trigger */}
			<div
				className={cn(
					"group fixed z-50 flex items-center justify-end",
					"lg:inset-y-0 lg:right-0 lg:w-8",
					"max-lg:bottom-24 max-lg:right-6",
				)}
			>
				<div
					id={PANEL_ID}
					className={cn(
						// shrink-0 matters: the desktop hover strip is only w-8, and
						// a flex item shrinks below its width unless told not to
						"surface-glass flex max-h-[80vh] w-16 shrink-0 flex-col items-center gap-3 overflow-y-auto no-scrollbar p-2 transition-transform duration-300 ease-in-out",
						// Desktop - parked off-screen until hover or keyboard focus
						"lg:mr-0.5 lg:translate-x-full lg:rounded-l-3xl lg:group-hover:translate-x-0 lg:group-focus-within:translate-x-0",
						// Touch - driven by the sticky trigger instead
						"max-lg:rounded-3xl",
						isOpen ? "max-lg:flex" : "max-lg:hidden",
					)}
				>
					{/* Section navigation */}
					<nav
						aria-label="Sections"
						className="flex flex-col items-center gap-1"
					>
						{SECTION_LINKS.map((link) => {
							const Icon = link.icon;
							return (
								<button
									key={link.target}
									type="button"
									title={link.label}
									onClick={() => goToSection(link.target, link.offsetVh)}
									className="rounded-full p-2.5 text-ink-strong transition-colors hover:bg-accent/15 hover:text-accent-ink"
								>
									<Icon size={20} aria-hidden="true" />
									<span className="sr-only">{link.label}</span>
								</button>
							);
						})}

						{ROUTE_LINKS.map((link) => {
							const Icon = link.icon;
							return (
								<Link
									key={link.path}
									href={link.path}
									title={link.label}
									onClick={() => setIsOpen(false)}
									className="rounded-full p-2.5 text-ink-strong transition-colors hover:bg-accent/15 hover:text-accent-ink"
								>
									<Icon size={20} aria-hidden="true" />
									<span className="sr-only">{link.label}</span>
								</Link>
							);
						})}
					</nav>

					<div className="h-px w-full bg-border" />

					{/* Scroll navigation */}
					<div className="flex flex-col items-center gap-1">
						<button
							type="button"
							onClick={() => scrollToTop()}
							aria-label="Scroll to top"
							className="rounded-full p-2 text-ink-strong transition-colors hover:bg-accent/15"
						>
							<ArrowUp size={22} strokeWidth={2.5} />
						</button>
						<button
							type="button"
							onClick={() => scrollToBottom()}
							aria-label="Scroll to bottom"
							className="rounded-full p-2 text-ink-strong transition-colors hover:bg-accent/15"
						>
							<ArrowDown size={22} strokeWidth={2.5} />
						</button>
					</div>

					{/* Mode toggle */}
					<button
						type="button"
						onClick={toggleMode}
						aria-pressed={isDark}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
						className="relative flex h-7 w-12 shrink-0 items-center rounded-full border border-accent/30 bg-el-deep/70 px-1 transition-colors"
					>
						<span
							className={cn(
								"flex h-5 w-5 items-center justify-center rounded-full bg-surface-top transition-transform duration-300",
								isDark ? "translate-x-5" : "translate-x-0",
							)}
						>
							{isDark ? (
								<Moon size={14} strokeWidth={2.5} className="text-el-deep" />
							) : (
								<Sun size={14} strokeWidth={2.5} className="text-el-deep" />
							)}
						</span>
					</button>

					{/* Element palette picker - real radios give arrow-key navigation */}
					<fieldset className="m-0 flex flex-col items-center gap-1 border-0 p-0">
						<legend className="sr-only">Colour theme</legend>
						{THEME_ELEMENTS.map((option) => {
							const Icon = option.icon;
							const isActive = element === option.id;

							return (
								<label
									key={option.id}
									title={option.paletteName}
									style={{ color: `var(--el-${option.id}-mid)` }}
									className={cn(
										"flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-transform hover:bg-accent/15 has-focus-visible:outline-2 has-focus-visible:outline-accent-ink",
										isActive ? "scale-110 ring-2 ring-current" : "opacity-70",
									)}
								>
									<input
										type="radio"
										name="theme-element"
										value={option.id}
										checked={isActive}
										onChange={() => setElement(option.id)}
										className="sr-only"
									/>
									<Icon size={18} aria-hidden="true" />
									<span className="sr-only">
										{option.label} — {option.paletteName}
									</span>
								</label>
							);
						})}
					</fieldset>
				</div>
			</div>
		</>
	);
};

export default PanelAssistant;
