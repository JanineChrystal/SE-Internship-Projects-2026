import { RECENT_PROJECTS } from "@/src/constants/home/projects";
import Button from "../../buttons/button";
import ProjectCard from "../../ui/project-card";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center"
		>
			<h2 className="text-5xl uppercase mb-16 text-center">Recent Projects</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mb-16">
				{RECENT_PROJECTS.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imageSrc={project.imageSrc}
						altText={project.altText}
					/>
				))}
			</div>

			<div>
				<Button>VIEW MORE</Button>
			</div>
		</section>
	);
};

export default Projects;
