import Activities from "./components/sections/activities";
import ContactCta from "./components/sections/contact-cta";
import Hero from "./components/sections/hero";
import IntroReveal from "./components/sections/intro-reveal";
import Journey from "./components/sections/journey";
import ProjectTeaser from "./components/sections/project-teaser";
import SelfIntro from "./components/sections/self-intro";
import TechStack from "./components/sections/tech-stack";

const HomePage = () => {
	return (
		<div className="w-full">
			<IntroReveal />
			<Hero />
			<SelfIntro />
			<Journey />
			<TechStack />
			<Activities />
			<ProjectTeaser />
			<ContactCta />
		</div>
	);
};

export default HomePage;
