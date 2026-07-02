import type { Metadata } from "next";
import About from "./components/sections/about";
import Hero from "./components/sections/hero";
import Stage from "./components/stage/stage";
import { StageProvider } from "./contexts/stageContext";

interface ErrorProps {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

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

const HomePage = async ({ searchParams }: ErrorProps) => {
	const params = await searchParams;

	if (params.triggerError === "true") {
		throw new Error("Testing production Tic-Tac-Toe error boundary");
	}

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
