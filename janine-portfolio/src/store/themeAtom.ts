import { atomWithStorage } from "jotai/utils";

export type ThemeMode = "light" | "dark";
export type ThemeElement = "water" | "air" | "fire" | "earth" | "wood";

export const themeModeAtom = atomWithStorage<ThemeMode>("theme-mode", "light");
export const themeElementAtom = atomWithStorage<ThemeElement>(
	"theme-element",
	"water",
);

// This atom is for changing theme mode and theme color via the four elements
