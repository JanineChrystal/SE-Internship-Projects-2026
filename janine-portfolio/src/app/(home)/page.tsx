import type { Metadata } from "next";
import About from "./components/sections/about";
import Hero from "./components/sections/hero";
import Stage from "./components/stage/stage";
import { StageProvider } from "./contexts/stageContext";

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
		<div className="w-full block">
			<StageProvider>
				<Stage>
					<Hero />
					<About />
				</Stage>
			</StageProvider>
		</div>
	);
};

export default HomePage;
