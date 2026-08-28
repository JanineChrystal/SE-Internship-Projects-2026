import Image from "next/image";
import Tag from "@/src/components/ui/tags/tag";
import Card from "../cards/card";
import type { BaseCardItem } from ".";

interface ProjectCardProps extends BaseCardItem {
	variant?: "default" | "compact";
	tags?: string[];
}

const ProjectCard = ({
	title,
	date,
	description,
	imageSrc,
	altText,
	tags,
}: ProjectCardProps) => {
	return (
		<Card className="flex flex-col p-4 md:p-6 h-full gap-4 transition-colors duration-300 bg-background border-border">
			<div className="relative w-full aspect-video min-h-35 sm:min-h-45 bg-foreground/5 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2 border-border/50">
				<Image
					src={imageSrc as string}
					alt={altText || `${title} Image`}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-contain object-center transition-transform duration-300 hover:scale-105"
					priority={true}
				/>
			</div>

			<div className="flex flex-col items-start w-full gap-2 grow">
				{title && (
					<h3 className="text-xl font-bold leading-tight text-foreground">
						{title}
					</h3>
				)}

				{date && (
					<p className="text-sm font-medium text-foreground/60">{date}</p>
				)}

				{description && (
					<p className="text-md leading-relaxed text-justify text-foreground/80">
						{description}
					</p>
				)}

				{/* logic to render the tags ONLY if they exist */}
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-2 pt-4 mt-auto">
						{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				)}
			</div>
		</Card>
	);
};

export default ProjectCard;
