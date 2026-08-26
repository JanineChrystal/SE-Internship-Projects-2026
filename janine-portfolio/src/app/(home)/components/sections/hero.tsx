import Link from "next/link";
import AnimTarget from "@/src/app/(home)/components/stage/animationTarget";
import Button from "@/src/components/ui/buttons/button";

const Hero = () => {
	return (
		<section
			id="hero"
			className="absolute inset-0 w-full h-auto flex flex-col justify-center px-24 mb-5 py-24 md:py-28 z-10"
		>
			<div className="flex flex-col md:grid md:grid-cols-[1fr_1.5fr_1fr] gap-8 md:gap-4 items-center w-full h-full">
				<AnimTarget
					id="heroLeft"
					className="flex flex-col z-10 w-full text-center md:text-left"
				>
					<h2 className="text-3xl md:text-5xl mb-2">I Am</h2>
					<h1 className="text-5xl md:text-7xl leading-none bg-clip-text">
						Janine
						<br />
						Chrystal
					</h1>
				</AnimTarget>

				<AnimTarget
					id="heroPortraitSlot"
					className="relative flex justify-center z-20 w-full layout-hero-portrait"
				/>

				<AnimTarget
					id="heroRight"
					className="flex flex-col z-10 w-full items-center md:items-end text-center md:text-right"
				>
					<p className="text-lg md:text-xl font-medium text-foreground/90 max-w-sm mb-6 leading-relaxed">
						Specialized in Web Development, Frontend Development
					</p>
					<h2 className="text-4xl md:text-5xl leading-tight mb-8">
						Software Engineer
					</h2>
					<div>
						<Button asChild size="lg">
							<Link href="/projects">VIEW PROJECTS</Link>
						</Button>
					</div>
				</AnimTarget>
			</div>
		</section>
	);
};

export default Hero;
