"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollStackProps {
	children: React.ReactNode;
	// Viewport heights of scrolling allotted to each card
	heightPerCard?: number;
}

// Scroll stack - pins the section and drives a stack of absolutely
// positioned cards: each rises into place, then turns and dissolves
// as the next one arrives
const ScrollStack = ({ children, heightPerCard = 0.9 }: ScrollStackProps) => {
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const cards = gsap.utils.toArray<HTMLElement>(".scroll-stack-card");
			if (cards.length === 0) {
				return;
			}

			const mm = gsap.matchMedia();

			// Below lg, or under reduced motion, the cards simply stack
			// in normal flow - no pin, no transforms
			mm.add(
				"(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
				() => {
					// The first card stays in normal flow so it defines the
					// container height; the rest stack on top of it
					gsap.set(cards.slice(1), {
						position: "absolute",
						inset: 0,
						yPercent: 110,
						opacity: 0,
					});

					const timeline = gsap.timeline({
						scrollTrigger: {
							trigger: root,
							start: "center center",
							end: () =>
								`+=${window.innerHeight * heightPerCard * cards.length}`,
							scrub: 0.7,
							pin: true,
							anticipatePin: 1,
							invalidateOnRefresh: true,
						},
					});

					// Each card gets one slot: arrive, hold, then leave as the
					// next one arrives. Incoming and outgoing must not overlap on
					// the same card, or it never settles at centre
					cards.forEach((card, index) => {
						const isLast = index === cards.length - 1;

						// Rises into place at the start of its own slot
						if (index > 0) {
							timeline.to(
								card,
								{ yPercent: 0, opacity: 1, ease: "power2.out", duration: 0.5 },
								index,
							);
						}

						// Turns and dissolves exactly as the next card rises
						if (!isLast) {
							timeline.to(
								card,
								{
									yPercent: -8,
									scale: 0.92,
									rotate: -3,
									opacity: 0,
									ease: "power2.inOut",
									duration: 0.5,
								},
								index + 1,
							);
						}
					});

					return () => {
						timeline.scrollTrigger?.kill();
						gsap.set(cards, { clearProps: "all" });
					};
				},
			);

			return () => mm.revert();
		}, rootRef);

		ScrollTrigger.refresh();
		return () => ctx.revert();
	}, [heightPerCard]);

	return (
		<div
			ref={rootRef}
			className="scroll-stack relative w-full mx-auto max-w-5xl flex flex-col lg:block gap-8"
		>
			{children}
		</div>
	);
};

export default ScrollStack;
