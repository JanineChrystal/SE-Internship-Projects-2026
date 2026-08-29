"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { NARRATIVE_EYEBROW, NARRATIVE_TITLE } from "../../constants/detail";

interface ProjectNarrativeProps {
	lines: string[];
}

// Project narrative - the role and approach behind the build
// Same reveal as the home page self-introduction: lines stagger in as
// the section enters, and replay when scrolled back to
const ProjectNarrative = ({ lines }: ProjectNarrativeProps) => {
	const rootRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const items = root.querySelectorAll<HTMLElement>(".narrative-line");

				const reveal = gsap.from(items, {
					y: 28,
					opacity: 0,
					duration: 0.7,
					ease: "power3.out",
					stagger: 0.14,
					scrollTrigger: {
						trigger: root,
						start: "top 75%",
						// Restart on the way back up too - otherwise arriving
						// from below shows the section already settled
						toggleActions: "restart none restart reverse",
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
			id="narrative"
			className="relative flex w-full items-center py-12"
		>
			<div className="mx-auto flex max-w-4xl flex-col gap-6">
				<span className="eyebrow narrative-line">{NARRATIVE_EYEBROW}</span>

				<h2 className="narrative-line text-h2 font-extrabold text-ink-strong">
					{NARRATIVE_TITLE}
				</h2>

				{lines.map((line) => (
					<p
						key={line}
						className="narrative-line text-lead leading-relaxed text-ink"
					>
						{line}
					</p>
				))}
			</div>
		</section>
	);
};

export default ProjectNarrative;
