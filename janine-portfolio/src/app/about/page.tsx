import About from "@/src/app/about/components/sections/about";
import ActsEvents from "@/src/app/about/components/sections/actsAndEvents";
import TechStack from "@/src/app/about/components/sections/techStack";
import WorkExperience from "@/src/app/about/components/sections/workExperience";

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
