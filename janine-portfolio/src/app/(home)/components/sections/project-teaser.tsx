import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/src/app/projects/constants/projects";
import Button from "@/src/components/ui/buttons/button";
import Tag from "@/src/components/ui/tags/tag";
import SectionTitle from "@/src/components/ui/typography/section-title";
import ScrollStack from "../ui/scroll-stack";

const ProjectTeaser = () => {
	const featured = getFeaturedProjects(3);

	return (
		<section
			id="projects"
			className="relative w-full px-6 md:px-16 lg:px-24 py-24"
		>
			<SectionTitle
				eyebrow="Selected work"
				title="Projects"
				description="Systems and applications I have built, contributed to, and shipped."
				align="left"
			/>

			<ScrollStack>
				{featured.map((project) => (
					<article
						key={project.slug}
						className="scroll-stack-card surface-neu rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center"
					>
						<div className="relative w-full lg:w-1/2 aspect-video shrink-0">
							<Image
								src={project.imageSrc}
								alt={project.altText}
								fill
								sizes="(max-width: 1024px) 100vw, 45vw"
								className="object-contain"
							/>
						</div>

						<div className="w-full lg:w-1/2 flex flex-col gap-4">
							<span className="eyebrow">{project.date}</span>

							<h3 className="text-h3 font-extrabold text-ink-strong">
								{project.title}
							</h3>

							<p className="text-ink-muted line-clamp-4">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2">
								{project.tags.slice(0, 5).map((tag) => (
									<Tag key={tag} size="sm">
										{tag}
									</Tag>
								))}
							</div>

							<div className="mt-2">
								<Button asChild variant="outline">
									<Link href={`/projects/${project.slug}`}>
										View project details
									</Link>
								</Button>
							</div>
						</div>
					</article>
				))}
			</ScrollStack>

			<div className="flex justify-center mt-16">
				<Button asChild size="lg">
					<Link href="/projects">VIEW ALL PROJECTS</Link>
				</Button>
			</div>
		</section>
	);
};

export default ProjectTeaser;
