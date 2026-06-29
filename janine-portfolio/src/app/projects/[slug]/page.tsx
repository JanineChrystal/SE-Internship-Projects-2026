import { notFound } from "next/navigation";
import SectionTitle from "../../../components/ui/typography/section-title";
import FeatureHighlights from "../components/sections/features";
import ProjectOverview from "../components/sections/overview";
import TechStack from "../components/sections/techStack";
import projectsData from "../constants/project-detail";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

const IndividualProjectPage = async ({ params }: ProjectPageProps) => {
	const { slug } = await params;
	const project = projectsData.find((p) => p.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<section
			id="project-details"
			className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col items-center"
		>
			<SectionTitle title={project.title} align="center" />

			<div className="w-full flex flex-col gap-24 mt-2  ">
				<ProjectOverview
					text={project.overviewText}
					images={project.overviewImages}
				/>

				<FeatureHighlights features={project.features} />

				<TechStack technologies={project.technologies} />
			</div>
		</section>
	);
};

export default IndividualProjectPage;
