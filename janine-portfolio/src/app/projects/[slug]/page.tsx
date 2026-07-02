import FeatureHighlights from "@/src/app/projects/components/sections/features";
import ProjectOverview from "@/src/app/projects/components/sections/overview";
import TechStack from "@/src/app/projects/components/sections/techStack";
import projectsData from "@/src/app/projects/constants/project-detail";
import SectionTitle from "@/src/components/ui/typography/section-title";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

const IndividualProjectPage = async ({ params }: ProjectPageProps) => {
	// Await the dynamic routing parameters
	const { slug } = await params;

	await new Promise((resolve) => setTimeout(resolve, 2000));

	// Match the URL slug against the static project data array
	const project = projectsData.find((p) => p.slug === slug);

	// standard error to trigger error page
	if (!project) {
		throw new Error(`The project "${slug}" could not be loaded.`);
	}

	// Finds the current project index to navigate neighbors
	const currentIndex = projectsData.findIndex((p) => p.slug === slug);

	const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
	const nextProject =
		currentIndex < projectsData.length - 1
			? projectsData[currentIndex + 1]
			: null;

	return (
		<main
			id="project-details"
			className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col items-center"
		>
			<SectionTitle title={project.title} align="center" />

			<div className="w-full flex flex-col gap-24">
				<ProjectOverview
					text={project.overviewText}
					images={project.overviewImages}
				/>

				<FeatureHighlights features={project.features} />

				<TechStack technologies={project.technologies} />
			</div>

			{/* Navigation footer for projects */}
			<div className="w-full flex justify-between items-center mt-20 pt-10 border-t border-foreground/10">
				{/* Previous / Back to Projects */}
				{prevProject ? (
					<a
						href={`/projects/${prevProject.slug}`}
						className="text-lg font-bold hover:underline"
					>
						← Previous
					</a>
				) : (
					<a href="/projects" className="text-lg font-bold hover:underline">
						← Back to Projects
					</a>
				)}

				{/* Next Project */}
				{nextProject ? (
					<a
						href={`/projects/${nextProject.slug}`}
						className="text-lg font-bold hover:underline"
					>
						Next →
					</a>
				) : (
					<span className="text-lg text-foreground/30 italic">End of List</span>
				)}
			</div>
		</main>
	);
};

export default IndividualProjectPage;
