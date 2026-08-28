"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Button from "@/src/components/ui/buttons/button";
import { hasResume, RESUME_URL } from "@/src/constants/site";
import {
	HERO_NAME,
	HERO_PORTRAIT,
	HERO_ROLES,
	HERO_SPECIALISM,
} from "../../constants/hero";
import LetterSwap from "../ui/letter-swap";
import RoleCycle from "../ui/role-cycle";

const Hero = () => {
	const rootRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			// Pinned like the project section - the page holds still and
			// scroll drives the animation instead of moving past it
			mm.add(
				"(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
				() => {
					const left = root.querySelector(".hero-left");
					const right = root.querySelector(".hero-right");
					const portrait = root.querySelector(".hero-portrait");

					const timeline = gsap.timeline({
						scrollTrigger: {
							trigger: root,
							start: "top top",
							end: () => `+=${window.innerHeight * 1.6}`,
							scrub: 0.5,
							pin: true,
							anticipatePin: 1,
							invalidateOnRefresh: true,
						},
					});

					// In - columns push inward, portrait zooms out
					timeline
						.fromTo(
							left,
							{ xPercent: -45, opacity: 0 },
							{ xPercent: 0, opacity: 1, ease: "power4.out", duration: 0.2 },
							0,
						)
						.fromTo(
							right,
							{ xPercent: 45, opacity: 0 },
							{ xPercent: 0, opacity: 1, ease: "power4.out", duration: 0.2 },
							0,
						)
						.fromTo(
							portrait,
							{ scale: 1.25, opacity: 0 },
							{ scale: 1, opacity: 1, ease: "power4.out", duration: 0.25 },
							0,
						)
						// Hold - everything settled and readable
						.to({}, { duration: 0.3 })
						// Out - the exact reverse, portrait fades without resizing
						// fromTo with immediateRender false, not to(): a to() tween
						// records its start value lazily, so it can capture the
						// already-exited state and then animate from -45 to -45
						.fromTo(
							left,
							{ xPercent: 0, opacity: 1 },
							{
								xPercent: -45,
								opacity: 0,
								ease: "power4.in",
								duration: 0.2,
								immediateRender: false,
							},
						)
						.fromTo(
							right,
							{ xPercent: 0, opacity: 1 },
							{
								xPercent: 45,
								opacity: 0,
								ease: "power4.in",
								duration: 0.2,
								immediateRender: false,
							},
							"<",
						)
						.fromTo(
							portrait,
							{ opacity: 1 },
							{
								opacity: 0,
								ease: "power4.in",
								duration: 0.2,
								immediateRender: false,
							},
							"<",
						);

					return () => {
						timeline.scrollTrigger?.kill();
						gsap.set([left, right, portrait], { clearProps: "all" });
					};
				},
			);

			return () => mm.revert();
		}, rootRef);

		ScrollTrigger.refresh();
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={rootRef}
			id="hero"
			className="relative w-full min-h-screen overflow-x-clip flex items-center px-6 md:px-16 lg:px-24 py-28"
		>
			<div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)] gap-10 md:gap-6 items-center">
				{/* Left - identity */}
				<div className="hero-left flex flex-col text-center md:text-left z-10">
					<span className="eyebrow mb-4 text-sm">Portfolio</span>
					<h1 className="font-black uppercase leading-[0.95] text-ink-strong text-[clamp(2.75rem,5.5vw,5rem)]">
						<span className="block text-[0.4em] tracking-[0.2em] text-ink-muted mb-1">
							I am
						</span>
						<LetterSwap text={HERO_NAME} className="text-gradient-accent" />
					</h1>
				</div>

				{/* Centre - portrait */}
				<div className="hero-portrait relative w-full aspect-4/5 min-h-100 md:min-h-150">
					<Image
						src={HERO_PORTRAIT.src}
						alt={HERO_PORTRAIT.alt}
						fill
						sizes="(max-width: 768px) 100vw, 40vw"
						priority
						className="object-contain object-bottom glow-element"
					/>
				</div>

				{/* Right - what I do */}
				<div className="hero-right flex flex-col items-center md:items-end text-center md:text-right z-10">
					<p className="text-lead text-ink-muted max-w-xs mb-5">
						{HERO_SPECIALISM}
					</p>

					<h2 className="text-h2 font-extrabold text-ink-strong mb-8 min-h-[1.2em]">
						<RoleCycle roles={HERO_ROLES} />
					</h2>

					<div className="flex flex-col sm:flex-row gap-4">
						<Button asChild size="lg">
							<Link href="/projects">VIEW PROJECTS</Link>
						</Button>

						{hasResume && (
							<Button asChild size="lg" variant="outline">
								<a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
									ACCESS RESUME
								</a>
							</Button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
