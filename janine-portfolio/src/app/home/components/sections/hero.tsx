import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/buttons/button";

const Hero = () => {
	return (
		<section
			id="hero"
			className="relative w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-8 py-24 md:py-28 mb-5 overflow-x-hidden"
		>
			<div className="relative md:absolute top-0 md:top-50 left-0 md:left-2 w-full flex flex-col md:flex-row justify-center md:justify-between px-0 md:px-35 md:-z-10 pointer-events-none select-none mb-10 md:mb-0 text-center md:text-left">
				<span className="text-6xl md:text-9xl font-serif text-foreground/50 md:text-foreground">
					Hello,
				</span>
				<span className="text-6xl md:text-9xl font-serif text-foreground/50 md:text-foreground">
					there
				</span>
			</div>

			<div className="flex flex-col md:grid md:grid-cols-[1fr_1.5fr_1fr] gap-8 md:gap-4 items-center w-full">
				<div className="flex flex-col z-10 pt-0 md:pt-35 w-full text-center md:text-left">
					<h2 className="text-3xl md:text-5xl mb-2">I Am</h2>
					<h1 className="text-5xl md:text-7xl leading-none bg-clip-text">
						Janine
						<br />
						Chrystal
					</h1>
				</div>

				<div className="relative flex justify-center z-20 w-full layout-hero-portrait mt-8 md:mt-0 md:top-15">
					<Image
						src="/profile.png"
						alt="Janine Chrystal Portrait"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain drop-shadow-2xl scale-110 md:scale-125 portrait-silhouette-glow"
						loading="eager"
						priority
					/>
				</div>

				<div className="flex flex-col z-10 pt-4 md:pt-75 w-full items-center md:items-end text-center md:text-right">
					<p className="text-lg md:text-xl font-medium text-foreground/90 max-w-sm mb-6 leading-relaxed">
						Specialized in Web Development, Frontend Development
					</p>
					<h2 className="text-4xl md:text-5xl leading-tight mb-8">
						Software <span className="md:hidden">Engineer</span>
						<br className="hidden md:block" />
						<span className="hidden md:block">Engineer</span>
					</h2>
					<div>
						<Link href="/projects">
							<Button>VIEW PROJECTS</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
