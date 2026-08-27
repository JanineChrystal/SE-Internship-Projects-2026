import { techStack } from "@/src/app/about/constants/techStack";
import SectionTitle from "@/src/components/ui/typography/section-title";
import ReelGallery from "../ui/reel-gallery";

// Technology stack - the reel scales with the data, so growing the
// list is a constants edit and nothing here changes
const TechStack = () => {
	return (
		<section
			id="stack"
			className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-28 md:py-36"
		>
			<div className="px-6 md:px-16 lg:px-24">
				<SectionTitle
					eyebrow="Toolkit"
					title="Technology stack"
					description="What I reach for, and what I have shipped with."
					align="left"
				/>
			</div>

			<ReelGallery items={techStack} />
		</section>
	);
};

export default TechStack;
