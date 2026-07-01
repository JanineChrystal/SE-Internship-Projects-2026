"use client";

import { useAtom } from "jotai";
import {
	ArrowDown,
	ArrowUp,
	Droplets,
	Flame,
	Leaf,
	Moon,
	Wind,
} from "lucide-react";
import { useEffect } from "react";
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

	// Scroll to top of the document window
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Scroll to bottom of the document window
	const scrollToBottom = () => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	};

	// Toggle state between light and dark modes
	const toggleMode = () => {
		setMode(mode === "light" ? "dark" : "light");
	};

	return (
		<div className="fixed top-0 right-0 h-full w-8 z-50 group flex items-center justify-end">
			{/** The visible panel that translates into view on hover */}
			<div className="bg-[#fcf5c7] dark:bg-slate-900 text-black dark:text-white rounded-l-[40px] py-6 px-3 shadow-2xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col items-center gap-6 border-y border-l border-black/10 dark:border-white/10 mr-0.5">
				{/** Up and Down Scroll Navigation */}
				<div className="flex flex-col gap-2">
					<button
						type="button"
						onClick={scrollToTop}
						className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
					>
						<ArrowUp size={36} strokeWidth={3} />
					</button>
					<button
						type="button"
						onClick={scrollToBottom}
						className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
					>
						<ArrowDown size={36} strokeWidth={3} />
					</button>
				</div>

				{/** Custom Dark Mode Toggle Switch matching your design*/}
				<div className="w-full flex justify-center">
					<button
						type="button"
						onClick={toggleMode}
						className="w-17.5 h-8.5 bg-black dark:bg-white rounded-full flex items-center px-1 relative transition-colors shadow-inner"
					>
						<div
							className={`w-6.5 h-6.5 rounded-full bg-white dark:bg-black absolute transition-transform duration-300 flex items-center justify-center ${mode === "dark" ? "translate-x-9" : "translate-x-0"}`}
						>
							<Moon
								size={16}
								strokeWidth={3}
								className={mode === "dark" ? "text-white" : "text-black"}
							/>
						</div>
					</button>
				</div>

				{/** 2x2 Grid for Element Selection */}
				<div className="grid grid-cols-2 gap-2 mt-2">
					<button
						type="button"
						onClick={() => setElement("fire")}
						className={`p-1.5 transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${element === "fire" ? "text-red-500 scale-110" : "text-black dark:text-white hover:text-red-400"}`}
					>
						<Flame size={28} />
					</button>
					<button
						type="button"
						onClick={() => setElement("water")}
						className={`p-1.5 transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${element === "water" ? "text-blue-500 scale-110" : "text-black dark:text-white hover:text-blue-400"}`}
					>
						<Droplets size={28} />
					</button>
					<button
						type="button"
						onClick={() => setElement("air")}
						className={`p-1.5 transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${element === "air" ? "text-yellow-500 scale-110" : "text-black dark:text-white hover:text-yellow-400"}`}
					>
						<Wind size={28} />
					</button>
					<button
						type="button"
						onClick={() => setElement("earth")}
						className={`p-1.5 transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10 ${element === "earth" ? "text-green-500 scale-110" : "text-black dark:text-white hover:text-green-400"}`}
					>
						<Leaf size={28} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default PanelAssistant;
