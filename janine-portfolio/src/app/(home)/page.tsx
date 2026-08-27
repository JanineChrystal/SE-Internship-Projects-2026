import type { Metadata } from "next";
import ContactCta from "./components/sections/contact-cta";
import Hero from "./components/sections/hero";
import IntroReveal from "./components/sections/intro-reveal";
import ProjectTeaser from "./components/sections/project-teaser";
import SelfIntro from "./components/sections/self-intro";

export const metadata: Metadata = {
	title: "Janine Chrystal | Portfolio",
	description:
		"Software Engineer specializing in Web and Frontend Development.",
	openGraph: {
		title: "Janine Chrystal | Portfolio",
		description: "Professional portfolio for project and skills showcase.",
		type: "website",
	},
};

const HomePage = () => {
	return (
		<div className="w-full">
			<IntroReveal />
			<Hero />
			<SelfIntro />
			<ProjectTeaser />
			<ContactCta />
		</div>
	);
};

export default HomePage;
