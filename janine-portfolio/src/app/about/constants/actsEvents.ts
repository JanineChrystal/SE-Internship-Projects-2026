export interface SlideData {
	id: number;
	imageSrc: string;
	altText: string;
	title: string;
	date: string;
}

export const Carousel_Data: SlideData[] = [
	{
		id: 1,
		imageSrc: "/actsAndEvents/mnet1.webp",
		altText: "Microsoft Azure Fundamentals Webinar",
		title:
			"Microsoft Azure AI Fundamentals: Transform Your Business with AI Optimization Solutions",
		date: "February 10, 2026",
	},
	{
		id: 2,
		imageSrc: "/actsAndEvents/mnet1.webp",
		altText: "Microsoft Azure Fundamentals Webinar",
		title: "Microsoft Azure Fundamentals: Build Your Cloud Foundation",
		date: "February 17, 2026",
	},
	{
		id: 3,
		imageSrc: "/actsAndEvents/data_privacy.webp",
		altText: "DICT Data Privacy Webinar",
		title: "Data Privacy Awareness Information Session",
		date: "September 12, 2026",
	},
	{
		id: 4,
		imageSrc: "/actsAndEvents/git.webp",
		altText: "Git",
		title: "GIT IT Together Day 3 : A Hands-on Guide to Version Control",
		date: "March 27, 2026",
	},
];
