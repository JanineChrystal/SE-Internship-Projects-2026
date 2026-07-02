export interface ProjectImage {
	imageUrl: string;
	altText: string;
}

export interface Project {
	slug: string;
	title: string;
	overviewText: string;
	overviewImages: ProjectImage[];
	features: Feature[];
	technologies: Technologies[];
}

export interface Feature {
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	extendedDescription: string;
}

export interface Technologies {
	id: number;
	imageUrl: string;
	altText: string;
}

const projectsData: Project[] = [
	{
		slug: "allcard",
		title: "Admin Console Web Application System",
		overviewText: `The MC+ Admin Console Proof of Concept (PoC) was developed to validate the feasibility of redeveloping the existing 
			Vue.js‑based console into React.js, aligning with the Web App Team’s latest development standards. 
			The initiative focused on modernizing the codebase, improving scalability, and ensuring long‑term maintainability by 
			adopting standardized architecture, reusable components, and unified coding conventions.	`,
		overviewImages: [
			{
				imageUrl: "/projects/ac3.png",
				altText: "POC UI",
			},
			{
				imageUrl: "/projects/ac4.png",
				altText: "POC UI",
			},
			{
				imageUrl: "/projects/ac1.png",
				altText: "POC UI",
			},
		],
		features: [
			{
				title: "Analytics Dashboards",
				description:
					"Offers visual insights into attendance, card usage, and people data for informed decision‑making.",
				imageUrl: "/projects/ac3.png",
				altText: "Analytics Dashboard UI",
				extendedDescription: `My primary role in this project was as a Frontend Developer, 
				where I implemented responsive, modular interfaces using React, MUI, and TypeScript. 
				Beyond frontend responsibilities, I also contributed to database design, creating normalized schemas 
				in PostgreSQL to support efficient data flow and integrity. Additionally, I assisted in backend debugging 
				and integration, ensuring seamless communication between the frontend and APIs. This dual contribution positioned 
				me as a full‑stack engineer, bridging user experience with robust data architecture.`,
			},
			{
				title: "Automated Attendance Management / DTR Record",
				description: `Tracks employee attendance with real‑time updates and analytics dashboards connected to card management module. 
				Automates daily time recording with integrated reporting for HR and payroll.`,
				imageUrl: "/projects/ac2.png",
				altText: "Attendance Management UI",
				extendedDescription: `This project demonstrates my ability to deliver enterprise‑grade solutions by combining 
				frontend innovation, backend problem‑solving, and database expertise ensuring the system is scalable, maintainable, 
				and aligned with modern engineering practices.`,
			},
		],
		technologies: [
			{
				id: 1,
				imageUrl: "/techStack/React.jpg",
				altText: "React logo",
			},
			{
				id: 2,
				imageUrl: "/techStack/Zod.png",
				altText: "Zod logo",
			},
			{
				id: 3,
				imageUrl: "/techStack/Vite.jpg",
				altText: "Vite logo",
			},
			{
				id: 4,
				imageUrl: "/techStack/Swagger.png",
				altText: "Swagger logo",
			},
			{
				id: 5,
				imageUrl: "/techStack/NodeJs.jpg",
				altText: "NodeJs logo",
			},
			{
				id: 6,
				imageUrl: "/techStack/MUI.jpg",
				altText: "MUI logo",
			},
			{
				id: 7,
				imageUrl: "/techStack/Html.png",
				altText: "HTML logo",
			},
			{
				id: 8,
				imageUrl: "/techStack/Typescript.png",
				altText: "React Native technology logo",
			},
			{
				id: 9,
				imageUrl: "/techStack/CSS.png",
				altText: "CSS logo",
			},
			{
				id: 10,
				imageUrl: "/techStack/Figma.png",
				altText: "Figma logo",
			},
			{
				id: 11,
				imageUrl: "/techStack/Git.png",
				altText: "Git logo",
			},
			{
				id: 12,
				imageUrl: "/techStack/Github.png",
				altText: "Github logo",
			},
		],
	},
	{
		slug: "scramps",
		title:
			"PUP SCRAMPS: Smart Control Resource Acquisition, Monitoring, and Procurements System",
		overviewText: `PUP Smart Resource Acquisition, Monitoring, and Procurement System (SCRAMPS) is a full‑stack web application developed 
			for the Ninoy Aquino Library of the Polytechnic University of the Philippines. The system was designed to automate and 
			optimize the management of resource requests, vendor transactions, and budget allocations through intelligent forecasting 
			and analytics. It replaces manual procurement workflows with a centralized, data‑driven platform that enhances transparency, 
			efficiency, and decision‑making.`,
		overviewImages: [
			{
				imageUrl: "/projects/scramps1.png",
				altText: "Scramps Sign Up UI",
			},
			{
				imageUrl: "/projects/scramps2.png",
				altText: "Scramps UI",
			},
			{
				imageUrl: "/projects/scrampsPub.jpg",
				altText: "Scramps Public page UI",
			},
		],
		features: [
			{
				title: "Request Management",
				description:
					"Handles resource requests from departments, enabling tracking, approval, and forecasting of future demands.",
				imageUrl: "/projects/scrampsRM.jpg",
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
				imageUrl: "/projects/scrampsBM.jpg",
				altText: "Budget Management UI",
				extendedDescription: `This project reflects my ability to combine user‑centric design with data‑driven engineering 
				bridging frontend usability, backend logic, and intelligent automation to deliver a scalable enterprise‑grade solution.`,
			},
			{
				title: "Vendor Management",
				description: `Maintains vendor profiles and transaction histories, supporting smart AI vendor evaluation and procurement decisions.`,
				imageUrl: "/projects/scrampsVM.jpg",
				altText: "Vendor Management UI",
				extendedDescription: ``,
			},
			{
				title: "Analytics Dashboards",
				description: `Provides interactive visualizations for requests, budgets, vendors, and user engagement, enabling data‑driven insights.`,
				imageUrl: "/projects/scramps4.png",
				altText: "Analytics Dashboard UI",
				extendedDescription: ``,
			},
			{
				title: "Machine Learning Forecasting",
				description: `Implements ML.NET regression models to forecast resource requests and budget utilization for proactive planning.`,
				imageUrl: "/projects/scrampsForecast.png",
				altText: "Budget Forecast",
				extendedDescription: ``,
			},
		],
		technologies: [
			{
				id: 1,
				imageUrl: "/techStack/ASPNetCore.png",
				altText: "ASP .NET Logo",
			},
			{
				id: 2,
				imageUrl: "/techStack/Azure.png",
				altText: "Azure logo",
			},
			{
				id: 3,
				imageUrl: "/techStack/Bootstrap.png",
				altText: "Bootstrap logo",
			},
			{
				id: 4,
				imageUrl: "/techStack/CSharp.png",
				altText: "Csharp logo",
			},
			{
				id: 5,
				imageUrl: "/techStack/CSS.png",
				altText: "CSS logo",
			},
			{
				id: 6,
				imageUrl: "/techStack/Figma.png",
				altText: "Figma logo",
			},
			{
				id: 7,
				imageUrl: "/techStack/Html.png",
				altText: "HTML logo",
			},
			{
				id: 8,
				imageUrl: "/techStack/Git.png",
				altText: "Git logo",
			},
			{
				id: 9,
				imageUrl: "/techStack/Github.png",
				altText: "Github logo",
			},
			{
				id: 10,
				imageUrl: "/techStack/Javascript.png",
				altText: "Javascript logo",
			},
			{
				id: 11,
				imageUrl: "/techStack/mlNet.png",
				altText: "ML.NET logo",
			},
			{
				id: 12,
				imageUrl: "/techStack/MySQL.png",
				altText: "MySQL logo",
			},
			{
				id: 13,
				imageUrl: "/techStack/Ssm21.png",
				altText: "SSMS logo",
			},
			{
				id: 14,
				imageUrl: "/techStack/Swagger.png",
				altText: "Swagger logo",
			},
		],
	},
	{
		slug: "tikiting",
		title:
			"Tikiting Rail : Transforming Train Ticket Card Management Into A Database Application",
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
				altText: "Analytics Dashboard UI",
				extendedDescription: `As the Database Designer, I was responsible for architecting the system’s relational 
				database structure. My role involved designing entity relationships, defining table schemas, and applying 
				normalization techniques to eliminate redundancy and maintain data integrity. I ensured that the database supported 
				efficient CRUD operations and aligned with the system’s functional requirements, laying the foundation for reliable 
				data management and future scalability.`,
			},
			{
				title: "Transaction Management",
				description: `Tracks ticket purchases, reloads, and usage history in real time, providing transparency and auditability.`,
				imageUrl: "/projects/tikitingF3.png",
				altText: "Attendance Management UI",
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
	},
];

export default projectsData;
