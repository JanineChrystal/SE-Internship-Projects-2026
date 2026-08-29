"use client";

import { type RefObject, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { LINE_REVEAL } from "@/src/constants/motion";

// Line reveal - staggered rise used by the home self-introduction and
// the project narrative, which are the same effect on different copy
// Replays on the way back up as well: arriving from below would
// otherwise show a section already settled
export function useLineReveal(
	rootRef: RefObject<HTMLElement | null>,
	selector: string,
): void {
	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const lines = root.querySelectorAll<HTMLElement>(selector);

				const reveal = gsap.from(lines, {
					y: LINE_REVEAL.y,
					opacity: 0,
					duration: LINE_REVEAL.duration,
					ease: LINE_REVEAL.ease,
					stagger: LINE_REVEAL.stagger,
					scrollTrigger: {
						trigger: root,
						start: LINE_REVEAL.start,
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
	}, [rootRef, selector]);
}
