import type { ProjectTechnology } from "@/src/types/project";
import InfiniteSlider from "../../../../components/ui/slider/infinite-slider";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { TECH_EYEBROW, TECH_TITLE } from "../../constants/detail";

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
		<div className="flex w-full flex-col">
			<SectionTitle eyebrow={TECH_EYEBROW} title={TECH_TITLE} align="left" />
			{/* 2. Drop in the slider and pass the mapped data */}
			<InfiniteSlider items={mappedSliderItems} direction="left" />
		</div>
	);
};

export default TechStack;
