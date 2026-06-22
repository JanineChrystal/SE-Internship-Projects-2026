export interface ProjectData {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	altText: string;
}

export const RECENT_PROJECTS: ProjectData[] = [
	{
		id: "allcard",
		title: "Admin Console Web Application System",
		description:
			"The AllCard Admin Console is a proof-of-concept web application designed to modernize administrative workflows. It features a responsive frontend built with React, TypeScript, and MUI, integrated with REST APIs for dynamic data flow. Key modules include card-based automated attendance tracking, payroll monitoring, and analytics dashboards, providing a user-friendly interface across devices.",
		imageSrc: "/allcard.jpg",
		altText: "AllCard Logo",
	},
	{
		id: "scramps",
		title:
			"PUP SCRAMPS: Smart Control Resource Acquisition, Monitoring, and Procurements System",
		description:
			"The PUP Smart Resource Acquisition, Monitoring, and Procurement System (SCRAMPS) is a full-stack solution developed for the Ninoy Aquino Library. It integrates request and budget forecasting models using ML.NET, alongside analytics dashboards for vendors, budgets, and user engagement. Deployed on Microsoft Azure, the system ensures reliability through clean GitHub workflows, regression testing, and API validation with Postman and Swagger.",
		imageSrc: "/pup.png",
		altText: "Polytechnic University of the Philippines Logo",
	},
];
