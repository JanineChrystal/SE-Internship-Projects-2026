import Image from "next/image";
import Card from "../../ui/cards/card";
import SectionTitle from "../../ui/typography/section-title";

const About = () => {
	return (
		<section
			id="aboutMe"
			className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col items-center"
		>
			<SectionTitle title="About Me" align="center" />
			<Card className="w-full p-4 md:p-6 lg:p-6">
				<div className="flex flex-col md:flex-row gap-2 lg:gap-3 items-center md:items-start">
					{/* Left Column: Portrait Wrapper */}
					<div className="relative w-full h-125 layout-portrait-wrapper">
						<Image
							src="/profile.png"
							alt="Janine Chrystal Professional Portrait"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-contain object-top portrait-silhouette-glow z-10"
						/>
					</div>

					{/* Right Column: Information Stack */}
					<div className="flex flex-col justify-center w-full mt-4 md:mt-6">
						{/* Top Block: Contact Info */}
						<div className="flex flex-col text-center md:text-left mb-10 md:mb-12">
							<h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 select-none">
								Janine Chrystal B. Ampusta
							</h3>
							<p className="text-xl font-medium text-black/90 mb-2">
								Brgy. Commonwealth, Quezon City 1121
							</p>
							<p className="text-xl font-medium text-black/90">
								chrystalampusta@gmail.com
							</p>
						</div>

						{/* Bottom Block: Education */}
						<div className="flex flex-col text-center md:text-left">
							<h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
								Education
							</h3>

							{/* Line break added on desktop to match the wrapping in your mockup */}
							<p className="text-lg md:text-xl font-bold text-black mb-3 leading-snug">
								Polytechnic University of the Philippines,
								<br className="hidden md:block" />
								Sta. Mesa Manila (2022 - 2026)
							</p>

							{/* Stacked degree details */}
							<div className="flex flex-col gap-1">
								<p className="text-base md:text-lg text-black/90 font-medium">
									Bachelor of Science in Information Technology
								</p>
								<p className="text-base md:text-lg text-black/90 font-medium">
									DOST Merit Scholar.
								</p>
								<p className="text-base md:text-lg text-black/90 font-medium">
									Expected Graduation: September 2026
								</p>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</section>
	);
};

export default About;
