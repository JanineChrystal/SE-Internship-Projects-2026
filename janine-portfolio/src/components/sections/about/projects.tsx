import { PROJECTS } from "@/src/app/projects/constants/projects";
import ProjectCard from "../../ui/cards/project-card";
import SectionTitle from "../../ui/typography/section-title";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center"
		>
			<SectionTitle title="Projects" align="center" />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mb-16">
				{PROJECTS.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						date={project.date}
						description={project.description}
						imageSrc={project.imageSrc}
						altText={project.altText}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
