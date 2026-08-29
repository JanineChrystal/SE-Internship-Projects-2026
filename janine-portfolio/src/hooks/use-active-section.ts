"use client";

import { useEffect, useState } from "react";

// Active section - reports which anchor currently owns the viewport
// Observation beats scroll maths here: ScrollSmoother translates the
// content, so measured offsets drift, while IntersectionObserver is
// resolved after transforms and stays correct
export function useActiveSection(targets: string[]): string | null {
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		const sections = targets
			.map((target) => document.querySelector(target))
			.filter((node): node is Element => node !== null);

		if (sections.length === 0) {
			return;
		}

		// Only the middle band of the viewport counts, so a section is
		// active while it is genuinely being read rather than entering
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible?.target.id) {
					setActive(`#${visible.target.id}`);
				}
			},
			{ rootMargin: "-40% 0px -40% 0px", threshold: 0 },
		);

		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	}, [targets]);

	return active;
}
