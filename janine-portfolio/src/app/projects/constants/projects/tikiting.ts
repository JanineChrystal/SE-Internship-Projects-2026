import type { Project } from "@/src/types/project";

export const tikitingProject: Project = {
	slug: "tikiting",
	featured: true,
	title:
		"Tikiting Rail : Transforming Train Ticket Card Management Into A Database Application",
	date: "June 2025 - January 2026",
	role: "Database Designer",
	description: `Tikiting Rail is a database‑driven application designed to modernize the manual process of train ticket card management.
		The system streamlines passenger registration, card issuance, and transaction tracking through an integrated digital
		platform. It eliminates redundant paperwork and minimizes human error by automating record‑keeping and validation.`,
	imageSrc: "/projects/Tikiting.webp",
	altText: "Tikiting Card UI",
	tags: ["Database", "Architecture"],
	overviewText: `Tikiting Rail: Train Ticket Card Management System is a database‑driven application developed to digitize and
		streamline the traditional process of train ticket card management. The project aims to replace manual record‑keeping
		with a centralized, automated system that ensures accuracy, efficiency, and scalability for railway operations.
		It manages passenger registration, card issuance, and transaction tracking through a secure and structured data flow,
		enabling administrators to monitor activities and generate reports seamlessly.`,
	overviewImages: [
		{
			imageUrl: "/projects/tikiting4.webp",
			altText: "Tikiting UI",
		},
		{
			imageUrl: "/projects/tikiting5.webp",
			altText: "Tikiting UI",
		},
	],
	narrative: [
		"I was the database designer, responsible for architecting the relational structure the system runs on.",
		"That meant mapping entity relationships, defining table schemas, and normalising them to remove redundancy and protect data integrity.",
		"I designed it around the CRUD paths the application actually uses, so the schema follows the real ticketing workflow rather than an abstract model of it.",
	],
	features: [
		{
			title: "Ticket Card Issuance",
			description:
				"Automates the generation and activation of train ticket cards linked to passenger profiles, reducing manual processing time.",
			imageUrl: "/projects/tikitingF1.webp",
			altText: "Ticket Card Issuance UI",
		},
		{
			title: "Transaction Management",
			description: `Tracks ticket purchases, reloads, and usage history in real time, providing transparency and auditability.`,
			imageUrl: "/projects/tikitingF3.webp",
			altText: "Transaction Management UI",
		},
	],
	technologies: [
		{
			id: 1,
			imageUrl: "/techStack/php.png",
			altText: "PHP logo",
		},
		{
			id: 2,
			imageUrl: "/techStack/xampp.webp",
			altText: "Xampp logo",
		},
		{
			id: 3,
			imageUrl: "/techStack/MySQL.webp",
			altText: "MySQL logo",
		},
		{
			id: 4,
			imageUrl: "/techStack/Html.webp",
			altText: "HTML logo",
		},
		{
			id: 5,
			imageUrl: "/techStack/CSS.webp",
			altText: "CSS logo",
		},
	],
};
