import About from "./components/sections/about";
import Hero from "./components/sections/hero";

interface ErrorProps {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const HomePage = async ({ searchParams }: ErrorProps) => {
	const params = await searchParams;

	if (params.triggerError === "true") {
		throw new Error("Testing production Tic-Tac-Toe error boundary");
	}

	return (
		<main className="flex flex-col w-full grow">
			<Hero />
			<About />
		</main>
	);
};

export default HomePage;
