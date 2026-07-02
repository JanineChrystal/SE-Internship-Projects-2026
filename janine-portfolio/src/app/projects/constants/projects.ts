import type { BaseCardItem } from "@/src/components/ui/cards";

export interface ProjectData extends BaseCardItem {
	slug: string;
	role: string;
	tags: string[];
}

const PROJECTS: ProjectData[] = [
	{
		slug: "allcard",
		title: "Admin Console Web Application System",
		date: "February 2026 - May 2026",
		role: "Frontend Developer",
		description:
			"The AllCard Admin Console is a proof-of-concept web application designed to modernize administrative workflows. It features a responsive frontend built with React, TypeScript, and MUI, integrated with REST APIs for dynamic data flow. Key modules include card-based automated attendance tracking, payroll monitoring, and analytics dashboards, providing a user-friendly interface across devices.",
		imageSrc: "/projects/allcard.jpg",
		altText: "AllCard Logo",
		tags: ["React", "TypeScript", "MUI", "Vite", "Swagger"],
	},
	{
		slug: "scramps",
		title:
			"PUP SCRAMPS: Smart Control Resource Acquisition, Monitoring, and Procurements System",
		date: "June 2025 - January 2026",
		role: "Full Stack Developer",
		description: `The PUP Smart Resource Acquisition, Monitoring, and Procurement System (SCRAMPS) is a full-stack solution developed 
			for the PUP Ninoy Aquino Library. It integrates request and budget forecasting models, alongside analytics 
			dashboards for requests, vendors, budgets, and user engagement, and deployed on Microsoft Azure`,
		imageSrc: "/projects/pup.png",
		altText: "Polytechnic University of the Philippines Logo",
		tags: ["ML.NET", "Azure", "Full Stack", "C#", "Javascript", "Bootstrap"],
	},
	{
		slug: "tikiting",
		title:
			"Tikiting Rail : Transforming Train Ticket Card Management Into A Database Application",
		date: "June 2025 - January 2026",
		role: "Database Designer",
		description: `Tikiting Rail is a database‑driven application designed to modernize the manual process of train ticket card management. 
			The system streamlines passenger registration, card issuance, and transaction tracking through an integrated digital 
			platform. It eliminates redundant paperwork and minimizes human error by automating record‑keeping and validation.`,
		imageSrc: "/projects/Tikiting.png",
		altText: "Tikiting Card UI",
		tags: ["Database", "Architecture"],
	},
];

export default PROJECTS;
