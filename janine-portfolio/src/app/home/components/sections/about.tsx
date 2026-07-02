import AnimTarget from "@/src/app/home/components/stage/animationTarget";
import Card from "../../../../components/ui/cards/card";
import SectionTitle from "../../../../components/ui/typography/section-title";
import TextLink from "../../../../components/ui/typography/text-link";

const About = () => {
	return (
		<section
			id="about"
			className="absolute inset-0 w-full h-auto flex items-center justify-center px-8 pt-12 mt-6 z-20"
		>
			<AnimTarget id="aboutCard" className="w-full max-w-6xl">
				<Card className="w-full max-w-6xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
						<div className="flex flex-col z-10">
							<SectionTitle title="About Me" align="left" className="mb-0" />
							<p className="text-lg leading-relaxed mb-6">
								I am a Bachelor of Science Information Technology from
								Polytechnic University of the Philippines, Sta. Mesa Manila,
								specializing in web development and creative design. I enjoy
								building user-friendly applications, designing interfaces, and
								optimizing performance to deliver smooth digital experiences.
							</p>
							<p className="text-lg text-foreground/90 leading-relaxed mb-10">
								With strong problem-solving skills, I follow clean coding
								practices and modern development patterns. I am passionate about
								creating maintainable solutions, improving UI/UX flows, and
								combining technology with creativity. Currently, I am completing
								a Software Engineering Internship at Stratpoint, where I
								continue to sharpen my skills and contribute to collaborative
								projects.
							</p>
							<div>
								<TextLink href="/about">
									<p className="text-foreground">Know more</p>
									<span className="text-gradient-fade">about me</span>
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

						<AnimTarget
							id="aboutPortraitSlot"
							className="relative w-full layout-portrait-wrapper -mt-12 mb-8 lg:-mt-20 lg:mb-12"
						/>
					</div>
				</Card>
			</AnimTarget>
		</section>
	);
};

export default About;
