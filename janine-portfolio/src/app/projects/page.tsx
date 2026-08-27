import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/src/components/ui/typography/section-title";
import { OG_IMAGE } from "@/src/constants/site";
import ProjectCard from "../../components/ui/cards/project-card";
import PROJECTS from "./constants/projects";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Systems and applications I have built and contributed to, from admin consoles to full-stack web platforms.",
	alternates: { canonical: "/projects" },
	openGraph: {
		title: "Projects",
		description: "Systems and applications I have built and contributed to.",
		url: "/projects",
		type: "website",
		images: [OG_IMAGE],
	},
};

const ProjectsPage = async () => {
	return (
		<section
			id="projects"
			className="w-full min-h-screen max-w-7xl mx-auto px-8 pt-16 py-12 flex flex-col justify-center"
		>
			<div className="mb-5">
				<SectionTitle title="Projects" align="left" className="mt-12 mb-0" />
				<p className="text-slate-500">
					A collection of systems and applications I have built and contributed.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{PROJECTS.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project.slug}
						className="transition-transform duration-200 hover:-translate-y-1 block h-full"
					>
						<ProjectCard
							title={project.title}
							description={project.description}
							date={project.date}
							imageSrc={project.imageSrc}
							altText={project.altText}
							tags={project.tags}
							variant="default"
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
