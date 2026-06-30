import About from "../../components/sections/home/about";
import Hero from "../../components/sections/home/hero";

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
