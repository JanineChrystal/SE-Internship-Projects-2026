import Image from "next/image";
import Button from "@/src/components/buttons/button";

const Hero = () => {
	return (
		<section
			id="hero"
			className="relative w-full max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center px-8 pt-25 overflow-hidden"
		>
			{/* Background cursive text layer pushed behind the main content */}
			<div className="absolute top-50 left-2 w-full flex justify-between px-35 -z-10 pointer-events-none select-none">
				<span className="text-9xl font-serif text-black/90">Hello,</span>
				<span className="text-9xl font-serif text-black/90">there</span>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 items-center w-full">
				{/* Left Column */}
				<div className="flex flex-col z-10 pt-35">
					<h2 className="text-5xl mb-2">I Am</h2>
					<h1 className="text-7xl leading-none bg-clip-text ">
						Janine
						<br />
						Chrystal
					</h1>
					<span className="mt-20 text-sm text-black/50 font-medium">
						Page Views 1999
					</span>
				</div>

				<div className="relative top-15 flex justify-center z-20 w-full layout-hero-portrait">
					<Image
						src="/profile.png"
						alt="Janine Chrystal Portrait"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain drop-shadow-2xl scale-110 md:scale-125"
						loading="eager"
						priority
					/>
				</div>

				{/* Right Column */}
				<div className="flex flex-col z-10 pt-75 md:items-end text-left md:text-right">
					<p className="text-xl font-medium text-black/90 max-w-sm mb-6 leading-relaxed">
						Specialized in Web Development, Frontend Development
					</p>
					<h2 className="text-5xl leading-tight mb-8">
						Software
						<br />
						Engineer
					</h2>
					<div>
						<Button>GET RESUME</Button>
					</div>
					<span className="mt-10 text-sm text-black/50 font-medium">
						100 Accessed Resume
					</span>
				</div>
			</div>
		</section>
	);
};

export default Hero;
