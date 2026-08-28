import {
	Droplets,
	Flame,
	Leaf,
	type LucideIcon,
	TreePine,
	Wind,
} from "lucide-react";
import type { ThemeElement } from "@/src/store/themeAtom";

export interface ThemeElementOption {
	id: ThemeElement;
	label: string;
	paletteName: string;
	icon: LucideIcon;
}

// Theme elements - add an entry here and the panel picks it up
// Each id must have a matching palette block in globals.css
export const THEME_ELEMENTS: ThemeElementOption[] = [
	{
		id: "water",
		label: "Water",
		paletteName: "Navy Mirage",
		icon: Droplets,
	},
	{
		id: "fire",
		label: "Fire",
		paletteName: "Crimson Velvet",
		icon: Flame,
	},
	{
		id: "earth",
		label: "Earth",
		paletteName: "Emerald Depth",
		icon: Leaf,
	},
	{
		id: "air",
		label: "Air",
		paletteName: "Amber Dusk",
		icon: Wind,
	},
	{
		id: "wood",
		label: "Wood",
		paletteName: "Walnut Noir",
		icon: TreePine,
	},
];
