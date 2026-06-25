import InfiniteSlider from "../../ui/infinite-slider";
import SectionTitle from "../../ui/section-title";
import { techStack} from "@/src/constants/about/techStack";


const TechStack = () => {

	const rowOneSkills = techStack.slice(0, 11);
    const rowTwoSkills = techStack.slice(11, 22);

	return (
		<section
			id="techstack"
			className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center"
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
