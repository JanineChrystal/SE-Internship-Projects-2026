import Image from "next/image";
import Card from "./card";

interface ProjectCardProps {
	title: string;
	description: string;
	imageSrc: string;
	altText: string;
}

const ProjectCard = ({
	title,
	description,
	imageSrc,
	altText,
}: ProjectCardProps) => {
	return (
		<Card className="flex flex-col p-8 md:p-10 h-full">
			<div className="flex items-center gap-6 mb-6">
				<div className="relative w-35 h-30 shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2">
					<Image src={imageSrc} alt={altText} fill className="object-contain" />
				</div>

				<h3 className="text-xl font-black uppercase leading-tight">{title}</h3>
			</div>

			<p className="text-sm text-black/90 leading-relaxed text-justify">
				{description}
			</p>
		</Card>
	);
};

export default ProjectCard;
