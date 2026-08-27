"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { scrollToPosition } from "@/lib/scroll";
import { INTRO_LINES, INTRO_SKIP_LABEL } from "../../constants/intro";

// 3D text reveal - lines roll up in depth on load
// Deliberately not scroll-driven: position sticky does not work
// inside ScrollSmoother, and this is the first screen of the site
const IntroReveal = () => {
	const rootRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const words = root.querySelectorAll<HTMLElement>(".intro-word");

				// Plays on load, not on scroll
				// This is the first screen of the site, so scroll progress is
				// zero here - a scrubbed reveal would leave visitors landing
				// on a blank page
				const reveal = gsap.timeline({ delay: 0.15 });

				reveal.from(words, {
					rotateX: -85,
					y: "0.4em",
					opacity: 0,
					duration: 0.9,
					ease: "power3.out",
					stagger: 0.28,
				});

				return () => reveal.kill();
			});

			return () => mm.revert();
		}, rootRef);

		return () => ctx.revert();
	}, []);

	// Jump past the intro to the hero
	const skipIntro = () => {
		scrollToPosition("#hero", true);
	};

	return (
		<section
			ref={rootRef}
			id="intro"
			aria-label="Introduction"
			className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center"
		>
			<p className="intro-copy font-display font-black uppercase text-ink-strong leading-[1.05] text-[clamp(2rem,7vw,5.5rem)]">
				{INTRO_LINES.map((line) => (
					<span key={line} className="block intro-word">
						{line}
					</span>
				))}
			</p>
		</section>
	);
};

export default IntroReveal;
