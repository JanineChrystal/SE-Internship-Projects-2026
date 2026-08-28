"use client";

import {
	type RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

interface UseAutoCycleOptions {
	// Values to rotate through, in display order
	items: string[];
	current: string;
	onAdvance: (next: string) => void;
	intervalMs: number;
	// Latched once the visitor picks something - cycling never resumes
	stopped: boolean;
	// Cycling only runs while this element is on screen
	containerRef: RefObject<HTMLElement | null>;
	// Smaller region that pauses on hover and focus - defaults to the
	// container. A full height section is a poor pause target: the
	// pointer sits over it constantly, so cycling would never run
	pauseRef?: RefObject<HTMLElement | null>;
	// Below this width the rail is not the visible presentation, so
	// cycling would silently drive the accordion instead
	minWidthPx: number;
}

interface AutoCycleState {
	// Cycling applies at all - drives whether the progress bar shows
	isCycling: boolean;
	// Cycling is on but currently held, so the bar freezes rather than
	// disappearing
	isPaused: boolean;
}

// Auto cycle - advances a selection on a timer until the visitor acts
// Pauses on hover, on focus, off screen and on a hidden tab, and never
// starts for reduced motion or below the desktop breakpoint
export function useAutoCycle({
	items,
	current,
	onAdvance,
	intervalMs,
	stopped,
	containerRef,
	pauseRef,
	minWidthPx,
}: UseAutoCycleOptions): AutoCycleState {
	const [envAllows, setEnvAllows] = useState(false);
	const [onScreen, setOnScreen] = useState(false);
	const [docVisible, setDocVisible] = useState(true);
	const [interacting, setInteracting] = useState(false);

	// Held in refs so a changing list or callback does not restart the
	// countdown mid tick
	const itemsRef = useRef(items);
	const advanceRef = useRef(onAdvance);
	itemsRef.current = items;
	advanceRef.current = onAdvance;

	// Width and motion preference decide whether cycling applies here
	useEffect(() => {
		const desktop = window.matchMedia(`(min-width: ${minWidthPx}px)`);
		const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

		const sync = () => setEnvAllows(desktop.matches && motion.matches);

		sync();
		desktop.addEventListener("change", sync);
		motion.addEventListener("change", sync);

		return () => {
			desktop.removeEventListener("change", sync);
			motion.removeEventListener("change", sync);
		};
	}, [minWidthPx]);

	// Off screen means nobody is watching it advance
	useEffect(() => {
		const node = containerRef.current;

		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => setOnScreen(entry.isIntersecting),
			{ threshold: 0.2 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [containerRef]);

	useEffect(() => {
		const sync = () => setDocVisible(!document.hidden);

		sync();
		document.addEventListener("visibilitychange", sync);
		return () => document.removeEventListener("visibilitychange", sync);
	}, []);

	// Hover and keyboard focus both mean the visitor is about to act
	useEffect(() => {
		const node = (pauseRef ?? containerRef).current;

		if (!node) {
			return;
		}

		const hold = () => setInteracting(true);
		const release = () => setInteracting(false);

		node.addEventListener("pointerenter", hold);
		node.addEventListener("pointerleave", release);
		node.addEventListener("focusin", hold);
		node.addEventListener("focusout", release);

		return () => {
			node.removeEventListener("pointerenter", hold);
			node.removeEventListener("pointerleave", release);
			node.removeEventListener("focusin", hold);
			node.removeEventListener("focusout", release);
		};
	}, [containerRef, pauseRef]);

	const isCycling = !stopped && envAllows && items.length > 1;
	const isPaused = !onScreen || !docVisible || interacting;
	const isRunning = isCycling && !isPaused;

	const advance = useCallback(() => {
		const list = itemsRef.current;
		const index = list.indexOf(current);
		const next = list[(index + 1) % list.length];

		if (next) {
			advanceRef.current(next);
		}
	}, [current]);

	// Remaining time survives a pause, so hovering holds the countdown
	// where it is instead of handing back a full interval
	const remainingRef = useRef(intervalMs);
	const startedAtRef = useRef(0);
	const firedRef = useRef(false);

	useEffect(() => {
		if (!isRunning) {
			return;
		}

		startedAtRef.current = Date.now();
		firedRef.current = false;

		const timer = window.setTimeout(() => {
			firedRef.current = true;
			advance();
		}, remainingRef.current);

		return () => {
			window.clearTimeout(timer);

			// A fired timer starts the next item on a full interval; a
			// cancelled one keeps whatever was left
			if (firedRef.current) {
				remainingRef.current = intervalMs;
				return;
			}

			const elapsed = Date.now() - startedAtRef.current;
			remainingRef.current = Math.max(0, remainingRef.current - elapsed);
		};
	}, [isRunning, advance, intervalMs]);

	return { isCycling, isPaused };
}
