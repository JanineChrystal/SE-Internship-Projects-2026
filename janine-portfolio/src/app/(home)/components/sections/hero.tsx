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

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const left = root.querySelector(".hero-left");
				const right = root.querySelector(".hero-right");
				const portrait = root.querySelector(".hero-portrait");

				// Entrance plays on load, not on scroll
				// The hero is the first thing on the page, so a scroll-driven
				// entrance would already be finished before anyone can see it
				const entrance = gsap.timeline({
					defaults: { ease: "power3.out", duration: 1 },
				});

				entrance
					.from(left, { xPercent: -35, opacity: 0 }, 0)
					.from(right, { xPercent: 35, opacity: 0 }, 0)
					.from(portrait, { scale: 1.22, opacity: 0, duration: 1.2 }, 0);

				// Exit stays scroll-driven - the reverse of the entrance
				const exit = gsap.timeline({
					scrollTrigger: {
						trigger: root,
						start: "bottom 90%",
						end: "bottom top",
						scrub: 0.6,
					},
				});

				exit
					.to(left, { xPercent: -35, opacity: 0, ease: "power2.in" }, 0)
					.to(right, { xPercent: 35, opacity: 0, ease: "power2.in" }, 0)
					.to(portrait, { scale: 1.15, opacity: 0.5, ease: "power2.in" }, 0);

				return () => {
					entrance.kill();
					exit.scrollTrigger?.kill();
				};
			});

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
			<div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] gap-10 md:gap-6 items-center">
				{/* Left - identity */}
				<div className="hero-left flex flex-col text-center md:text-left z-10">
					<span className="eyebrow mb-3">Portfolio</span>
					<h1 className="text-h1 font-black uppercase leading-none text-ink-strong">
						<span className="block text-[0.45em] tracking-widest text-ink-muted">
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
