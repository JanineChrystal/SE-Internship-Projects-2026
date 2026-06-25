import About from "../../components/sections/home/about";
import Hero from "../../components/sections/home/hero";
import Projects from "../../components/sections/home/projects";

const HomePage = () => {
	return (
		<main className="flex flex-col w-full grow">
			<Hero />
			<About />
			<Projects />
		</main>
	);
};

export default HomePage;
