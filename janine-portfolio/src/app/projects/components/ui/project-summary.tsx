import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Tag from "@/src/components/ui/tags/tag";
import type { Project } from "@/src/types/project";
import { VIEW_DETAILS_LABEL } from "../../constants/browser";

interface ProjectSummaryProps {
	project: Project;
	// The accordion already names the project in its trigger, so it
	// skips the duplicate title
	showTitle?: boolean;
}

// Project summary - the shared body behind both presentations
// Text only, so the browser fits one viewport - the screenshots live
// on the project details page, which is what the link leads to
// Written once so the rail panel and the mobile accordion can never
// drift apart in content
const ProjectSummary = ({ project, showTitle = true }: ProjectSummaryProps) => {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-3">
				{showTitle && (
					<h2 className="text-h3 font-extrabold leading-tight text-ink-strong">
						{project.title}
					</h2>
				)}

				<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
					<span className="eyebrow">{project.role}</span>
					<span aria-hidden="true" className="text-ink-muted">
						/
					</span>
					<span className="font-mono text-xs text-ink-muted">
						{project.date}
					</span>
				</div>

				<p className="text-ink leading-relaxed">{project.description}</p>

				<ul className="flex flex-wrap gap-2 pt-1">
					{project.tags.map((tag) => (
						<li key={tag}>
							<Tag>{tag}</Tag>
						</li>
					))}
				</ul>
			</div>

			{/* A real link, so crawlers reach every detail page from here
			    rather than depending on the sitemap alone */}
			<Link
				href={`/projects/${project.slug}`}
				className="surface-glass inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 font-bold text-ink-strong transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink"
			>
				{VIEW_DETAILS_LABEL}
				<ArrowRight aria-hidden="true" className="size-4" />
			</Link>
		</div>
	);
};

export default ProjectSummary;
