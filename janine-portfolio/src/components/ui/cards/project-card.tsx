import Image from "next/image";
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
		<Card className="flex flex-col p-4 md:p-6 h-full">
			<div className="bg-white rounded-lg overflow-hidden p-2 mb-2 shrink-0 w-full h-32">
				<div className="relative w-full h-full">
					<Image
						src={imageSrc as string}
						alt={altText || `${title} Image`}
						fill
						sizes="(max-width: 768px) 100vw, 140px"
						className="object-contain object-center"
					/>
				</div>
			</div>

			<div className="flex flex-col items-start w-full gap-2">
				{title && <h3 className="text-xl font-bold leading-tight">{title}</h3>}

				{date && <p className="text-sm font-medium text-slate-500">{date}</p>}

				{description && (
					<p className="text-md leading-relaxed text-justify text-slate-700">
						{description}
					</p>
				)}

				{/* logic to render the tags ONLY if they exist */}
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-2 pt-4 mt-auto">
						{tags.map((tag) => (
							<span
								key={tag}
								className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</Card>
	);
};

export default ProjectCard;
