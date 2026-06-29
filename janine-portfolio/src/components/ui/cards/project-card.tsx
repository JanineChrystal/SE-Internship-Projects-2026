import Image from "next/image";
import Card from "../cards/card";
import type { BaseCardItem } from ".";

interface ProjectCardProps extends BaseCardItem {
	variant?: "default" | "compact";
}

const ProjectCard = ({
	title,
	date,
	description,
	imageSrc,
	altText,
	variant = "default",
}: ProjectCardProps) => {
	const isCompact = variant === "compact";

	// Checks if we are using the compact variant
	if (isCompact) {
		return (
			<Card className="flex flex-row items-center p-8 md:p-10 h-full gap-6">
				{/* Image Wrapper */}
				{imageSrc && (
					<div className="relative shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2 w-20 h-20">
						<Image
							src={imageSrc}
							alt={altText || `${title} Image`}
							fill
							className="object-cover rounded-md"
						/>
					</div>
				)}

				{/* Title and Date*/}
				<div className="flex flex-col grow">
					<h3 className="text-lg leading-tight">{title}</h3>
					{date && (
						<p className="text-sm font-medium text-black/70 mt-1">{date}</p>
					)}
				</div>
			</Card>
		);
	}

	// Renders exact requested layout for the Homepage by default
	return (
		<Card className="flex flex-col p-4 md:p-6 h-full">
			<div className="flex items-center gap-6 mb-2">
				{imageSrc && (
					<div className="relative w-35 h-30 shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2">
						<Image
							src={imageSrc}
							alt={altText || `${title} Image`}
							fill
							sizes="(max-width: 768px) 100vw, 140px"
							className="object-contain"
						/>
					</div>
				)}

				{/* Title layout block*/}
				<h3 className="text-xl leading-tight">{title}</h3>
			</div>

			{/* Date */}
			{date && (
				<p className="text-md leading-relaxed text-justify mb-2">
					{date} | {description}
				</p>
			)}
		</Card>
	);
};

export default ProjectCard;

// Logic: the ProjectCard checks if we use default or compact variant wherein the compact variant is used
// 			in the about me section. It helps in the rendering and displaying of data based on where the project card is
//			used.
