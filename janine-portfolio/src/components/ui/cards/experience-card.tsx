import Card from "../cards/card";
import type { BaseCardItem } from ".";

interface ExperienceCardProps extends BaseCardItem {
	company: string;
	duration: string;
}

const ExperienceCard = ({
	company,
	duration,
	title,
	description,
}: ExperienceCardProps) => {
	return (
		<Card className="flex flex-col p-8 md:p-10 h-full">
			<h3>
				{company} - {title}
			</h3>
			<p className="text-md leading-relaxed text-justify">{duration}</p>
			<p className="text-md leading-relaxed text-justify">{description}</p>
		</Card>
	);
};

export default ExperienceCard;
