import {
	Building2,
	Code,
	FlaskConical,
	FolderKanban,
	GraduationCap,
	type LucideIcon,
	Rocket,
	Wrench,
} from "lucide-react";

// Career and journey - section copy
export const JOURNEY_EYEBROW = "Career and journey";

export const JOURNEY_TITLE = "How I got here";

export const JOURNEY_DESCRIPTION =
	"From a hardware elective in grade nine to shipping production web apps. Pick any point to read it.";

export interface JourneyMilestone {
	id: string;
	// Short label sitting above the timeline node
	label: string;
	// Stage or dates, shown under the node and on the card
	period: string;
	title: string;
	description: string;
	// Optional - milestones without a photo fall back to their icon
	imageSrc?: string;
	altText?: string;
	icon: LucideIcon;
}

// Ordered oldest to newest - the timeline reads left to right, and the
// progress line fills to whichever point is selected
export const JOURNEY_MILESTONES: JourneyMilestone[] = [
	{
		id: "ict-elective",
		label: "ICT elective",
		period: "2018 - 2019",
		title: "Computer System Services",
		description:
			"My grade nine TLE elective was Computer System Services, so my first real exposure to IT was hardware - assembling machines, tracing faults and putting them back together. Nothing on screen yet, but this is where the interest started.",
		icon: Wrench,
	},
	{
		id: "first-code",
		label: "First code",
		period: "2019 - 2020",
		title: "HTML and CSS in Notepad",
		description:
			"The same elective in grade ten, and it finally moved to the screen. I wrote my first HTML and CSS in Notepad - no framework, no tooling, no autocomplete. A blank file and a browser refresh was enough to be hooked.",
		icon: Code,
	},
	{
		id: "stem",
		label: "STEM strand",
		period: "2020 - 2022",
		title: "Choosing STEM on purpose",
		description:
			"I took the STEM strand in senior high to sharpen the logic and mathematics I knew a computing degree would demand. It was preparation rather than a detour.",
		icon: FlaskConical,
	},
	{
		id: "bsit",
		label: "BSIT at PUP",
		period: "2022 - 2026",
		title: "BS Information Technology",
		description:
			"I went to the Polytechnic University of the Philippines expecting computer science and ended up in information technology. It turned out to be the better fit - more building, more systems, more shipping - and I am glad it went that way.",
		imageSrc: "/projects/pup.png",
		altText: "Polytechnic University of the Philippines logo",
		icon: GraduationCap,
	},
	{
		id: "capstone",
		label: "Capstone",
		period: "2025 - 2026",
		title: "PUP SCRAMPS",
		description:
			"A full-stack procurement, monitoring and forecasting system for the PUP Ninoy Aquino Library. I moved from frontend into full-stack across it, built the forecasting models for budget and requests, and deployed it on Azure.",
		imageSrc: "/projects/scrampsPub.webp",
		altText: "PUP SCRAMPS public page interface",
		icon: FolderKanban,
	},
	{
		id: "allcard",
		label: "AllCard",
		period: "Feb - May 2026",
		title: "Software Engineer Intern, AllCard Technologies",
		description:
			"My academic internship. I designed UML sequence diagrams for a POS mobile system, built PostgreSQL structures, and developed the frontend and REST API integration for an admin console proof of concept in React, TypeScript, MUI and Vite - applying PCI DSS and OWASP standards throughout.",
		imageSrc: "/projects/allcard.webp",
		altText: "AllCard Technologies logo",
		icon: Building2,
	},
	{
		id: "stratpoint",
		label: "Stratpoint",
		period: "Jun - Aug 2026",
		title: "Software Engineer Web Intern, Stratpoint Technologies",
		description:
			"A second internship, this one taken on voluntarily. I built and deployed a portfolio site, a blog platform and a project management web app with Next.js, React 19, TypeScript, Drizzle ORM, Neon Postgres, Tailwind CSS and Vercel.",
		imageSrc: "/projects/strat.png",
		altText: "Stratpoint Technologies logo",
		icon: Rocket,
	},
];

export const JOURNEY_PREV_LABEL = "Previous milestone";

export const JOURNEY_NEXT_LABEL = "Next milestone";
