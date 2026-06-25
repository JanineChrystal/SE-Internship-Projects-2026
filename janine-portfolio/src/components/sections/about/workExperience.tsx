import { Work } from "@/src/constants/about/workExperience";
import ExperienceCard from "../../ui/cards/experience-card";
import SectionTitle from "../../ui/section-title";

const WorkExperience = () => {
	return (
		<section
			id="workExperience"
			className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center"
		>
			<SectionTitle title="Career" align="center" />

			<div className="flex flex-col gap-8 md:gap-10 w-full">
				{Work.map((work) => (
					<ExperienceCard
						key={work.id}
						company={work.company}
						title={work.title}
						duration={work.duration}
						description={work.description}
					/>
				))}
			</div>
		</section>
	);
};

export default WorkExperience;
