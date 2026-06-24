import About from "@/src/components/sections/about/about";
import ActsEvents from "@/src/components/sections/about/actsAndEvents";
import Projects from "@/src/components/sections/about/projects";
import TechStack from "@/src/components/sections/about/techStack";
import WorkExperience from "@/src/components/sections/about/workExperience";

const HomePage = () => {
	return (
		<main className="flex flex-col w-full grow">
			<About />
			<WorkExperience />
			<Projects />
			<TechStack />
			<ActsEvents />
		</main>
	);
};

export default HomePage;
