"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import {
	SELF_INTRO_EYEBROW,
	SELF_INTRO_HEADING,
	SELF_INTRO_LINES,
} from "../../constants/about";

// Self-introduction - lines reveal as the section enters
// Not pinned: the hero and the teaser already hold the page still,
// and pinning every section would turn the page into a slideshow
const SelfIntro = () => {
	const rootRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const lines = root.querySelectorAll<HTMLElement>(".self-intro-line");

				const reveal = gsap.from(lines, {
					y: 28,
					opacity: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.14,
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
			id="about"
			className="relative w-full px-6 md:px-16 lg:px-24 py-28 md:py-36"
		>
			<div className="max-w-4xl mx-auto flex flex-col gap-6">
				<span className="eyebrow self-intro-line">{SELF_INTRO_EYEBROW}</span>

				<h2 className="self-intro-line text-h2 font-extrabold text-ink-strong">
					{SELF_INTRO_HEADING}
				</h2>

				{SELF_INTRO_LINES.map((line) => (
					<p
						key={line}
						className="self-intro-line text-lead text-ink leading-relaxed"
					>
						{line}
					</p>
				))}
			</div>
		</section>
	);
};

export default SelfIntro;
