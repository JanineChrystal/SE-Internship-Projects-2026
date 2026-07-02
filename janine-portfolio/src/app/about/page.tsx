import About from "@/src/app/about/components/sections/about";
import ActsEvents from "@/src/app/about/components/sections/actsAndEvents";
import TechStack from "@/src/app/about/components/sections/techStack";
import WorkExperience from "@/src/app/about/components/sections/workExperience";

export const dynamic = "force-dynamic";

const AboutPage = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

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
