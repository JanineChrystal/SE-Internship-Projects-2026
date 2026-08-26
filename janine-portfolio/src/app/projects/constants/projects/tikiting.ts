import type { Project } from "@/src/types/project";

export const tikitingProject: Project = {
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
	overviewText: `Tikiting Rail: Train Ticket Card Management System is a database‑driven application developed to digitize and
		streamline the traditional process of train ticket card management. The project aims to replace manual record‑keeping
		with a centralized, automated system that ensures accuracy, efficiency, and scalability for railway operations.
		It manages passenger registration, card issuance, and transaction tracking through a secure and structured data flow,
		enabling administrators to monitor activities and generate reports seamlessly.`,
	overviewImages: [
		{
			imageUrl: "/projects/tikiting4.png",
			altText: "Tikiting UI",
		},
		{
			imageUrl: "/projects/tikiting5.png",
			altText: "Tikiting UI",
		},
		{
			imageUrl: "/projects/tikitingF3.png",
			altText: "Tikiting UI",
		},
	],
	features: [
		{
			title: "Ticket Card Issuance",
			description:
				"Automates the generation and activation of train ticket cards linked to passenger profiles, reducing manual processing time.",
			imageUrl: "/projects/tikitingF1.png",
			altText: "Ticket Card Issuance UI",
			extendedDescription: `As the Database Designer, I was responsible for architecting the system's relational
			database structure. My role involved designing entity relationships, defining table schemas, and applying
			normalization techniques to eliminate redundancy and maintain data integrity. I ensured that the database supported
			efficient CRUD operations and aligned with the system's functional requirements, laying the foundation for reliable
			data management and future scalability.`,
		},
		{
			title: "Transaction Management",
			description: `Tracks ticket purchases, reloads, and usage history in real time, providing transparency and auditability.`,
			imageUrl: "/projects/tikitingF3.png",
			altText: "Transaction Management UI",
			extendedDescription: `This project demonstrates my ability to translate real‑world operational workflows into optimized
			database models and integrate them into a functional application ecosystem, a key competency in software engineering
			and system development.`,
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
			imageUrl: "/techStack/xampp.png",
			altText: "Xampp logo",
		},
		{
			id: 3,
			imageUrl: "/techStack/MySQL.png",
			altText: "MySQL logo",
		},
		{
			id: 4,
			imageUrl: "/techStack/Html.png",
			altText: "HTML logo",
		},
		{
			id: 5,
			imageUrl: "/techStack/CSS.png",
			altText: "CSS logo",
		},
	],
};
