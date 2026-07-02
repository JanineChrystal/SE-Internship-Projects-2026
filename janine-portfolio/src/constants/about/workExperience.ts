export interface WorkExperience {
	id: string;
	company: string;
	title: string;
	duration: string;
	description: string;
}

export const Work: WorkExperience[] = [
	{
		id: "Stratpoint",
		company: "Stratpoint Technologies Inc.",
		title: "Software Engineer Web Intern",
		duration: "June 2023 - August 2023",
		description: `As a Web Engineer Intern, I built and deployed a portfolio site, a blog platform, and a project management web app using Next.js, React 19, TypeScript, Drizzle ORM v2, Neon Postgres, Tailwind CSS v4, and Vercel. 
        This role strengthened my full‑stack development skills and gave me hands‑on experience deploying production‑ready applications.`,
	},
	{
		id: "AllCard",
		company: "AllCard Technologies Inc.",
		title: "Software Engineer Intern.",
		duration: "February 2026 - May 2026",
		description: `As a Software Engineer Intern (Feb–May 2026), I designed UML sequence diagrams for a POS Mobile System, built PostgreSQL database structures, and developed the frontend and integrated RESTFUL APIs of an Admin Console Proof‑of‑Concept using React, TypeScript, MUI, and Vite that has features like automated attendance tracking and analytics dashboards, while applying PCI DSS and OWASP standards. 
        I also gained exposure to AI‑assisted development tools such as Cursor and Claude.`,
	},
];
