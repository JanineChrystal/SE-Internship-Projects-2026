import type { ProjectTechnology } from "@/src/types/project";
import InfiniteSlider from "../../../../components/ui/slider/infinite-slider";
import SectionTitle from "../../../../components/ui/typography/section-title";

interface TechStackProps {
	technologies: ProjectTechnology[];
}

const TechStack = ({ technologies }: TechStackProps) => {
	// // Map the data directly to match what the slider expects
	const mappedSliderItems = technologies.map((tech) => ({
		id: tech.id,
		imageSrc: tech.imageUrl,
		altText: tech.altText,
	}));

	return (
		<div className="w-full flex flex-col items-center">
			<SectionTitle title="Technologies Used" align="center" />
			{/* 2. Drop in the slider and pass the mapped data */}
			<InfiniteSlider items={mappedSliderItems} direction="left" />
		</div>
	);
};

export default TechStack;
