import About from "../../components/sections/home/about";
import Hero from "../../components/sections/home/hero";

const HomePage = () => {
	return (
		<main className="flex flex-col w-full grow">
			<Hero />
			<About />
		</main>
	);
};

export default HomePage;
