"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, ScrollSmoother, ScrollTrigger } from "@/lib/gsap";

// Smoothing runs on wide pointer devices only
// Touch keeps native scrolling, and reduced motion opts out entirely
const SMOOTH_QUERY =
	"(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const previousPath = useRef(pathname);

	useEffect(() => {
		const mm = gsap.matchMedia();

		mm.add(SMOOTH_QUERY, () => {
			const smoother = ScrollSmoother.create({
				wrapper: "#smooth-wrapper",
				content: "#smooth-content",
				smooth: 1.1,
				effects: true,
				normalizeScroll: true,
			});

			// Page children mount before this effect, so any pinned
			// triggers they created need remeasuring against the smoother
			ScrollTrigger.refresh();

			return () => smoother.kill();
		});

		return () => mm.revert();
	}, []);

	// Route change - reset position, then remeasure once the new
	// content has actually painted
	useEffect(() => {
		// Skip the first render so browser scroll restoration is left alone
		if (previousPath.current === pathname) {
			return;
		}
		previousPath.current = pathname;

		const smoother = ScrollSmoother.get();

		if (smoother) {
			smoother.scrollTo(0, false);
		} else {
			window.scrollTo(0, 0);
		}

		const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => cancelAnimationFrame(frame);
	}, [pathname]);

	return (
		<div id="smooth-wrapper">
			<div id="smooth-content" className="flex min-h-screen flex-col">
				{children}
			</div>
		</div>
	);
};

export default SmoothScroll;
