"use client";

import { useAtom } from "jotai";
import { ArrowDown, ArrowUp, Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { scrollToBottom, scrollToTop } from "@/lib/scroll";
import { THEME_ELEMENTS } from "@/src/constants/themeElements";
import { themeElementAtom, themeModeAtom } from "@/src/store/themeAtom";

const PanelAssistant = () => {
	const [mode, setMode] = useAtom(themeModeAtom);
	const [element, setElement] = useAtom(themeElementAtom);

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

	// Toggle state between light and dark modes
	const toggleMode = () => {
		setMode(mode === "light" ? "dark" : "light");
	};

	const isDark = mode === "dark";

	return (
		<div className="fixed top-0 right-0 h-full w-8 z-50 group flex items-center justify-end">
			{/* Panel - slides into view on hover, glass surface */}
			<div className="surface-glass rounded-l-3xl py-6 px-3 transform translate-x-full group-hover:translate-x-0 focus-within:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col items-center gap-6 mr-0.5">
				{/* Scroll navigation */}
				<div className="flex flex-col gap-2">
					<button
						type="button"
						onClick={() => scrollToTop()}
						aria-label="Scroll to top"
						className="p-2 rounded-full text-ink-strong hover:bg-accent/15 transition-colors"
					>
						<ArrowUp size={26} strokeWidth={2.5} />
					</button>
					<button
						type="button"
						onClick={() => scrollToBottom()}
						aria-label="Scroll to bottom"
						className="p-2 rounded-full text-ink-strong hover:bg-accent/15 transition-colors"
					>
						<ArrowDown size={26} strokeWidth={2.5} />
					</button>
				</div>

				{/* Mode toggle */}
				<button
					type="button"
					onClick={toggleMode}
					aria-pressed={isDark}
					aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
					className="w-16 h-8 rounded-full flex items-center px-1 relative transition-colors bg-el-deep/70 border border-accent/30"
				>
					<span
						className={`w-6 h-6 rounded-full bg-surface-top flex items-center justify-center transition-transform duration-300 ${
							isDark ? "translate-x-8" : "translate-x-0"
						}`}
					>
						{isDark ? (
							<Moon size={14} strokeWidth={2.5} className="text-el-deep" />
						) : (
							<Sun size={14} strokeWidth={2.5} className="text-el-deep" />
						)}
					</span>
				</button>

				{/* Element palette picker - real radios give arrow-key navigation */}
				<fieldset className="grid grid-cols-2 gap-2 border-0 p-0 m-0">
					<legend className="sr-only">Colour theme</legend>
					{THEME_ELEMENTS.map((option) => {
						const Icon = option.icon;
						const isActive = element === option.id;

						return (
							<label
								key={option.id}
								title={option.paletteName}
								style={{ color: `var(--el-${option.id}-mid)` }}
								className={`p-1.5 rounded-full cursor-pointer transition-transform hover:bg-accent/15 has-focus-visible:outline-2 has-focus-visible:outline-accent-ink ${
									isActive ? "scale-110 ring-2 ring-current" : "opacity-70"
								}`}
							>
								<input
									type="radio"
									name="theme-element"
									value={option.id}
									checked={isActive}
									onChange={() => setElement(option.id)}
									className="sr-only"
								/>
								<Icon size={24} aria-hidden="true" />
								<span className="sr-only">
									{option.label} — {option.paletteName}
								</span>
							</label>
						);
					})}
				</fieldset>
			</div>
		</div>
	);
};

export default PanelAssistant;
