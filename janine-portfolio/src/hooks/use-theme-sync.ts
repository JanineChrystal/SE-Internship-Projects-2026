"use client";

import { useEffect } from "react";
import type { ThemeElement, ThemeMode } from "@/src/store/themeAtom";

// Theme sync - mirrors the stored theme onto the document element
// The palette is driven by a class and a data attribute on <html>, so
// this is a DOM side effect rather than render output, and it does not
// belong inside the panel that happens to set it
export function useThemeSync(mode: ThemeMode, element: ThemeElement): void {
	useEffect(() => {
		const html = document.documentElement;

		if (mode === "dark") {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}

		html.setAttribute("data-element", element);
	}, [mode, element]);
}
