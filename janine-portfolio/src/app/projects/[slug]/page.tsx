import Link from "next/link";
import { notFound } from "next/navigation";
import FeatureHighlights from "@/src/app/projects/components/sections/features";
import ProjectNarrative from "@/src/app/projects/components/sections/narrative";
import ProjectOverview from "@/src/app/projects/components/sections/overview";
import TechStack from "@/src/app/projects/components/sections/techStack";
import PROJECTS, {
	getProjectBySlug,
	getProjectIndexBySlug,
} from "@/src/app/projects/constants/projects";
import Breadcrumb from "@/src/components/ui/navigation/breadcrumb";
import SectionTitle from "@/src/components/ui/typography/section-title";
import {
	DETAIL_BACK_LABEL,
	DETAIL_END_LABEL,
	DETAIL_HOME_LABEL,
	DETAIL_NEXT_LABEL,
	DETAIL_PREV_LABEL,
	DETAIL_PROJECTS_LABEL,
} from "../constants/detail";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

// Static params - prerender every known project at build time
export function generateStaticParams() {
	return PROJECTS.map((project) => ({ slug: project.slug }));
}

// Closed slug set - any unlisted slug returns a real 404 response
export const dynamicParams = false;

const IndividualProjectPage = async ({ params }: ProjectPageProps) => {
	// Await the dynamic routing parameters
	const { slug } = await params;

	// Match the URL slug against the single project data source
	const project = getProjectBySlug(slug);

	// Unknown slug - render the 404 page instead of the error boundary
	if (!project) {
		notFound();
	}

	// Neighbor lookup - drives the previous and next footer links
	const currentIndex = getProjectIndexBySlug(slug);

	const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
	const nextProject =
		currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

	return (
		<main
			id="project-details"
			className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-24 pt-28 md:px-16 lg:px-24"
		>
			<Breadcrumb
				className="mb-6"
				items={[
					{ label: DETAIL_HOME_LABEL, href: "/" },
					{ label: DETAIL_PROJECTS_LABEL, href: "/projects" },
					{ label: project.title },
				]}
			/>

			{/* Same heading shape as the home sections and the index:
			    eyebrow, title, supporting line, left aligned */}
			<SectionTitle
				as="h1"
				eyebrow={`${project.role} · ${project.date}`}
				title={project.title}
				description={project.description}
				align="left"
			/>

			<div className="flex w-full flex-col gap-24">
				<ProjectOverview
					text={project.overviewText}
					images={project.overviewImages}
					liveUrl={project.liveUrl}
					repoUrl={project.repoUrl}
				/>

				<ProjectNarrative lines={project.narrative} />

				<FeatureHighlights features={project.features} />

				<TechStack technologies={project.technologies} />
			</div>

			{/* Sibling navigation */}
			<div className="mt-20 flex w-full items-center justify-between gap-4 border-t border-border pt-10">
				{prevProject ? (
					<Link
						href={`/projects/${prevProject.slug}`}
						className="font-bold text-ink-strong transition-colors hover:text-accent-ink"
					>
						← {DETAIL_PREV_LABEL}
					</Link>
				) : (
					<Link
						href="/projects"
						className="font-bold text-ink-strong transition-colors hover:text-accent-ink"
					>
						← {DETAIL_BACK_LABEL}
					</Link>
				)}

				{nextProject ? (
					<Link
						href={`/projects/${nextProject.slug}`}
						className="font-bold text-ink-strong transition-colors hover:text-accent-ink"
					>
						{DETAIL_NEXT_LABEL} →
					</Link>
				) : (
					<span className="text-ink-muted">{DETAIL_END_LABEL}</span>
				)}
			</div>
		</main>
	);
};

export default IndividualProjectPage;
