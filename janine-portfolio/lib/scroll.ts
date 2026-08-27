import { ScrollSmoother, ScrollTrigger } from "@/lib/gsap";

// Scroll helper - routes through ScrollSmoother when it is running
// and falls back to native scrolling on touch and reduced motion
export function scrollToPosition(target: number | string, smooth = true): void {
	const smoother = ScrollSmoother.get();

	if (smoother) {
		smoother.scrollTo(target, smooth);
		return;
	}

	if (typeof target === "number") {
		window.scrollTo({ top: target, behavior: smooth ? "smooth" : "auto" });
		return;
	}

	document.querySelector(target)?.scrollIntoView({
		behavior: smooth ? "smooth" : "auto",
	});
}

// Freezes smooth scrolling - modals need the page behind them still
export function setScrollPaused(paused: boolean): void {
	ScrollSmoother.get()?.paused(paused);
}

export function scrollToTop(smooth = true): void {
	scrollToPosition(0, smooth);
}

export function scrollToBottom(smooth = true): void {
	// maxScroll is correct whether or not the smoother is active
	scrollToPosition(ScrollTrigger.maxScroll(window), smooth);
}
