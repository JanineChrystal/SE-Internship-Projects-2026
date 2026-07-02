import { techStack } from "@/src/constants/about/techStack";
import InfiniteSlider from "../../../../components/ui/slider/infinite-slider";
import SectionTitle from "../../../../components/ui/typography/section-title";

const TechStack = () => {
	const rowOneSkills = techStack.slice(0, 12);
	const rowTwoSkills = techStack.slice(12, 24);

	return (
		<section
			id="techstack"
			className="w-full min-h-screen max-w-7xl mx-auto px-8 py-24 flex flex-col items-center"
		>
			<SectionTitle title="Technical Skills" align="center" />

			<div className="w-full flex flex-col gap-8 mt-8">
				<InfiniteSlider items={rowOneSkills} direction="left" />
				<InfiniteSlider items={rowTwoSkills} direction="right" />
			</div>
		</section>
	);
};

export default TechStack;
