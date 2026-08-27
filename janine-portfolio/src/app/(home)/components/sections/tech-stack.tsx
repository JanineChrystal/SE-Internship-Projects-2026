"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { techStack } from "@/src/app/about/constants/techStack";
import SectionTitle from "@/src/components/ui/typography/section-title";

// Technology stack - logo on the front, name on the back
// The flip is pure CSS, so only the scroll reveal needs JavaScript
const TechStack = () => {
	const rootRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const cards = root.querySelectorAll<HTMLElement>(".tech-card");

				const reveal = gsap.from(cards, {
					y: 24,
					opacity: 0,
					duration: 0.5,
					ease: "power3.out",
					stagger: { each: 0.03, from: "start" },
					scrollTrigger: {
						trigger: root,
						start: "top 75%",
						toggleActions: "play none none reverse",
					},
				});

				return () => {
					reveal.scrollTrigger?.kill();
					reveal.kill();
				};
			});

			return () => mm.revert();
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={rootRef}
			id="stack"
			className="relative flex min-h-screen w-full items-center px-6 py-28 md:px-16 md:py-36 lg:px-24"
		>
			<div className="mx-auto w-full max-w-5xl">
				<SectionTitle
					eyebrow="Toolkit"
					title="Technology stack"
					description="What I reach for, and what I have shipped with."
					align="left"
				/>

				<ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
					{techStack.map((tech) => (
						<li
							key={tech.id}
							className="tech-card aspect-square rounded-2xl"
							title={tech.altText}
						>
							<div className="tech-card-inner">
								<div className="tech-card-face surface-neu rounded-2xl p-3">
									<div className="relative h-full w-full">
										<Image
											src={tech.imageSrc}
											alt={tech.altText}
											fill
											sizes="(max-width: 768px) 30vw, 12vw"
											className="object-contain"
										/>
									</div>
								</div>

								<div className="tech-card-face tech-card-face--back surface-neu rounded-2xl p-2">
									<span className="text-center font-mono text-[0.7rem] font-bold leading-tight text-accent-ink">
										{tech.altText}
									</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default TechStack;
