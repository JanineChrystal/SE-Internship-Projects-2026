import type { Project } from "@/src/types/project";

export const allcardProject: Project = {
	slug: "allcard",
	featured: true,
	title: "Admin Console Web Application System",
	date: "February 2026 - May 2026",
	role: "Frontend Developer",
	description:
		"The AllCard Admin Console is a proof-of-concept web application designed to modernize administrative workflows. It features a responsive frontend built with React, TypeScript, and MUI, integrated with REST APIs for dynamic data flow. Key modules include card-based automated attendance tracking, payroll monitoring, and analytics dashboards, providing a user-friendly interface across devices.",
	imageSrc: "/projects/allcard.webp",
	altText: "AllCard Logo",
	tags: ["React", "TypeScript", "MUI", "Vite", "Swagger"],
	overviewText: `The MC+ Admin Console Proof of Concept (PoC) was developed to validate the feasibility of redeveloping the existing
		Vue.js‑based console into React.js, aligning with the Web App Team's latest development standards.
		The initiative focused on modernizing the codebase, improving scalability, and ensuring long‑term maintainability by
		adopting standardized architecture, reusable components, and unified coding conventions.`,
	overviewImages: [
		{
			imageUrl: "/projects/ac3.webp",
			altText: "POC UI",
		},
		{
			imageUrl: "/projects/ac4.webp",
			altText: "POC UI",
		},
	],
	narrative: [
		"I worked primarily as a frontend developer, building responsive, modular interfaces for the admin console in React, MUI and TypeScript.",
		"I also designed normalised PostgreSQL schemas and supported backend debugging and REST API integration, so the work reached across the interface and the data beneath it.",
		"Working both ends meant the UI and the data model were designed against each other rather than in isolation, and the proof of concept held to PCI DSS and OWASP standards throughout.",
	],
	features: [
		{
			title: "Analytics Dashboards",
			description:
				"Offers visual insights into attendance, card usage, and people data for informed decision‑making.",
			images: [
				{
					imageUrl: "/projects/ac3.webp",
					altText: "Analytics Dashboard UI",
				},
			],
		},
		{
			title: "Automated Attendance Management / DTR Record",
			description: `Tracks employee attendance with real‑time updates and analytics dashboards connected to card management module.
			Automates daily time recording with integrated reporting for HR and payroll.`,
			images: [
				{
					imageUrl: "/projects/ac2.webp",
					altText: "Attendance Management UI",
				},
			],
		},
	],
	technologies: [
		{
			id: 1,
			imageUrl: "/techStack/React.webp",
			altText: "React logo",
		},
		{
			id: 2,
			imageUrl: "/techStack/Zod.webp",
			altText: "Zod logo",
		},
		{
			id: 3,
			imageUrl: "/techStack/Vite.webp",
			altText: "Vite logo",
		},
		{
			id: 4,
			imageUrl: "/techStack/Swagger.webp",
			altText: "Swagger logo",
		},
		{
			id: 5,
			imageUrl: "/techStack/NodeJs.webp",
			altText: "NodeJs logo",
		},
		{
			id: 6,
			imageUrl: "/techStack/MUI.webp",
			altText: "MUI logo",
		},
		{
			id: 7,
			imageUrl: "/techStack/Html.webp",
			altText: "HTML logo",
		},
		{
			id: 8,
			imageUrl: "/techStack/Typescript.webp",
			altText: "TypeScript logo",
		},
		{
			id: 9,
			imageUrl: "/techStack/CSS.webp",
			altText: "CSS logo",
		},
		{
			id: 10,
			imageUrl: "/techStack/Figma.webp",
			altText: "Figma logo",
		},
		{
			id: 11,
			imageUrl: "/techStack/Git.png",
			altText: "Git logo",
		},
		{
			id: 12,
			imageUrl: "/techStack/Github.webp",
			altText: "Github logo",
		},
	],
};
