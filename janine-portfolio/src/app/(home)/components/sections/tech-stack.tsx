"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionTitle from "@/src/components/ui/typography/section-title";
import { techStack } from "@/src/constants/tech-stack";
import ReelGallery from "../ui/reel-gallery";

// Technology stack - the reels sit behind and the title reads over
// them, so the section scales with the data instead of the layout
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
				const stage = root.querySelector(".reel-stage");
				const title = root.querySelector(".stack-title");

				// One timeline across the whole section: in, hold, out
				// Two separate triggers would fight over the same values
				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: root,
						start: "top bottom",
						end: "bottom top",
						scrub: 0.6,
					},
				});

				timeline
					.fromTo(
						stage,
						{ opacity: 0, scale: 1.12 },
						{ opacity: 1, scale: 1, ease: "power2.out", duration: 0.25 },
						0,
					)
					.fromTo(
						title,
						{ opacity: 0, y: 40 },
						{ opacity: 1, y: 0, ease: "power2.out", duration: 0.25 },
						0.05,
					)
					// Hold - readable while the section owns the viewport
					.to({}, { duration: 0.45 })
					.fromTo(
						title,
						{ opacity: 1, y: 0 },
						{
							opacity: 0,
							y: -40,
							ease: "power2.in",
							duration: 0.25,
							immediateRender: false,
						},
					)
					.fromTo(
						stage,
						{ opacity: 1, scale: 1 },
						{
							opacity: 0,
							scale: 1.08,
							ease: "power2.in",
							duration: 0.25,
							immediateRender: false,
						},
						"<",
					);

				return () => {
					timeline.scrollTrigger?.kill();
					timeline.kill();
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
			className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-28 md:py-36"
		>
			<ReelGallery items={techStack} />

			{/* Vignette only - the reels are edge-masked, so these just
			    settle the middle rather than covering a seam */}
			<div className="pointer-events-none absolute inset-0 z-1 bg-radial-[at_30%_50%] from-transparent via-surface/35 to-surface/80" />
			<div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-surface/85 via-surface/20 to-transparent" />

			{/* Title sits above both, and lets the pointer through so the
			    reels stay draggable underneath it */}
			<div className="stack-title pointer-events-none relative z-10 w-full px-6 md:px-16 lg:px-24">
				<div className="text-shadow-pop">
					<SectionTitle
						eyebrow="Toolkit"
						title="Technology stack"
						description="What I reach for, and what I have shipped with. Drag any reel."
						align="left"
					/>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
