import About from "@/src/components/sections/about/about";
import ActsEvents from "@/src/components/sections/about/actsAndEvents";
import TechStack from "@/src/components/sections/about/techStack";
import WorkExperience from "@/src/components/sections/about/workExperience";

const AboutPage = () => {
	return (
		<main className="flex flex-col w-full grow">
			<About />
			<WorkExperience />
			<TechStack />
			<ActsEvents />
		</main>
	);
};

export default AboutPage;
