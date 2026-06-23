import Image from "next/image";
import Card from "../../ui/card";
import TextLink from "../../ui/text-link";

const About = () => {
	return (
		<section
			id="about"
			className="w-full max-w-7xl mx-auto px-8 py-24 flex justify-center"
		>
			<Card className="w-full max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Column: Typography and Biography */}
					<div className="flex flex-col z-10">
						<h2 className="text-5xl mb-8">About Me</h2>

						<p className="text-lg leading-relaxed mb-6">
							I am a Bachelor of Science Information Technology from Polytechnic
							University of the Philippines, Sta. Mesa Manila, specializing in
							web development and creative design. I enjoy building
							user-friendly applications, designing interfaces, and optimizing
							performance to deliver smooth digital experiences.
						</p>

						<p className="text-lg text-black/90 leading-relaxed mb-10">
							With strong problem-solving skills, I follow clean coding
							practices and modern development patterns. I am passionate about
							creating maintainable solutions, improving UI/UX flows, and
							combining technology with creativity. Currently, I am completing a
							Software Engineering Internship at Stratpoint, where I continue to
							sharpen my skills and contribute to collaborative projects.
						</p>

						<div>
							<TextLink href="/about">
								Know more <span className="text-gradient-fade">about me</span>
								<span className="sr-only">Arrow Icon</span>
								<svg
									className="w-5 h-5 text-brand-yellow"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</TextLink>
						</div>
					</div>

					{/* Right Column: Professional Portrait */}
					<div className="relative w-full layout-portrait-wrapper">
						<Image
							src="/profile.png"
							alt="Janine Chrystal Professional Portrait"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover object-top portrait-silhouette-glow"
						/>
					</div>
				</div>
			</Card>
		</section>
	);
};

export default About;
