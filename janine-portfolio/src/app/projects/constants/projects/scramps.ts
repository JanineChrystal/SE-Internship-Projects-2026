import type { Project } from "@/src/types/project";

export const scrampsProject: Project = {
	slug: "scramps",
	featured: true,
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
	overviewText: `PUP Smart Resource Acquisition, Monitoring, and Procurement System (SCRAMPS) is a full‑stack web application developed
		for the Ninoy Aquino Library of the Polytechnic University of the Philippines. The system was designed to automate and
		optimize the management of resource requests, vendor transactions, and budget allocations through intelligent forecasting
		and analytics. It replaces manual procurement workflows with a centralized, data‑driven platform that enhances transparency,
		efficiency, and decision‑making.`,
	overviewImages: [
		{
			imageUrl: "/projects/scramps1.webp",
			altText: "Scramps Sign Up UI",
		},
		{
			imageUrl: "/projects/scramps2.webp",
			altText: "Scramps UI",
		},
		{
			imageUrl: "/projects/scrampsPub.webp",
			aspect: "portrait",
			altText: "Scramps Public page UI",
		},
	],
	features: [
		{
			title: "Request Management",
			description:
				"Handles resource requests from departments, enabling tracking, approval, and forecasting of future demands.",
			imageUrl: "/projects/scrampsRM.webp",
			altText: "Request Management UI",
			extendedDescription: `My primary role in this project was as a Frontend Developer,
			where I designed and implemented responsive user interfaces that ensured seamless navigation and
			accessibility across devices. As the development progressed, I transitioned into a Full‑Stack Developer,
			contributing to backend debugging and system optimization. I developed machine learning models for budget and
			request forecasting, engineered dashboard analytics for real‑time insights, and built the budget management module
			that integrated predictive data into operational workflows.`,
		},
		{
			title: "Budget Management",
			description: `Automates budget allocation and monitoring, integrating forecasting models to predict spending trends.`,
			imageUrl: "/projects/scrampsBM.webp",
			altText: "Budget Management UI",
			extendedDescription: `This project reflects my ability to combine user‑centric design with data‑driven engineering
			bridging frontend usability, backend logic, and intelligent automation to deliver a scalable enterprise‑grade solution.`,
		},
		{
			title: "Vendor Management",
			description: `Maintains vendor profiles and transaction histories, supporting smart AI vendor evaluation and procurement decisions.`,
			imageUrl: "/projects/scrampsVM.webp",
			altText: "Vendor Management UI",
			extendedDescription: ``,
		},
		{
			title: "Analytics Dashboards",
			description: `Provides interactive visualizations for requests, budgets, vendors, and user engagement, enabling data‑driven insights.`,
			imageUrl: "/projects/scramps4.webp",
			altText: "Analytics Dashboard UI",
			extendedDescription: ``,
		},
		{
			title: "Machine Learning Forecasting",
			description: `Implements ML.NET regression models to forecast resource requests and budget utilization for proactive planning.`,
			imageUrl: "/projects/scrampsForecast.webp",
			altText: "Budget Forecast",
			extendedDescription: ``,
		},
	],
	technologies: [
		{
			id: 1,
			imageUrl: "/techStack/ASPNetCore.webp",
			altText: "ASP .NET Logo",
		},
		{
			id: 2,
			imageUrl: "/techStack/Azure.webp",
			altText: "Azure logo",
		},
		{
			id: 3,
			imageUrl: "/techStack/Bootstrap.webp",
			altText: "Bootstrap logo",
		},
		{
			id: 4,
			imageUrl: "/techStack/CSharp.webp",
			altText: "Csharp logo",
		},
		{
			id: 5,
			imageUrl: "/techStack/CSS.webp",
			altText: "CSS logo",
		},
		{
			id: 6,
			imageUrl: "/techStack/Figma.webp",
			altText: "Figma logo",
		},
		{
			id: 7,
			imageUrl: "/techStack/Html.webp",
			altText: "HTML logo",
		},
		{
			id: 8,
			imageUrl: "/techStack/Git.png",
			altText: "Git logo",
		},
		{
			id: 9,
			imageUrl: "/techStack/Github.webp",
			altText: "Github logo",
		},
		{
			id: 10,
			imageUrl: "/techStack/Javascript.webp",
			altText: "Javascript logo",
		},
		{
			id: 11,
			imageUrl: "/techStack/mlNet.webp",
			altText: "ML.NET logo",
		},
		{
			id: 12,
			imageUrl: "/techStack/MySQL.webp",
			altText: "MySQL logo",
		},
		{
			id: 13,
			imageUrl: "/techStack/Ssm21.webp",
			altText: "SSMS logo",
		},
		{
			id: 14,
			imageUrl: "/techStack/Swagger.webp",
			altText: "Swagger logo",
		},
	],
};
