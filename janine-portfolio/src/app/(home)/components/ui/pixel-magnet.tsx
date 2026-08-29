"use client";

import { useEffect, useRef } from "react";
import {
	PIXEL_MAGNET_GAP,
	PIXEL_MAGNET_PULL,
	PIXEL_MAGNET_RADIUS,
	PIXEL_MAGNET_SIZE,
} from "../../constants/intro";

interface Pixel {
	homeX: number;
	homeY: number;
	x: number;
	y: number;
}

// Pixel magnet - a grid of dots that lean toward the pointer
// Drawn on a canvas rather than as elements: a full screen grid is
// hundreds of pixels, and that many DOM nodes animating per frame is
// what makes this effect expensive elsewhere
const PixelMagnet = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}

		const reducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let pixels: Pixel[] = [];
		let frame = 0;
		let running = false;

		// Pointer parked off-canvas until it actually moves, so nothing
		// is attracted to the top-left corner on load
		const pointer = { x: -9999, y: -9999 };

		// The dot colour follows the active palette, read once per build
		// since a canvas cannot inherit currentColor
		const readInk = () =>
			getComputedStyle(canvas).getPropertyValue("color").trim() || "#888";

		let ink = readInk();

		const build = () => {
			const rect = canvas.getBoundingClientRect();
			const ratio = Math.min(window.devicePixelRatio || 1, 2);

			canvas.width = Math.floor(rect.width * ratio);
			canvas.height = Math.floor(rect.height * ratio);
			context.setTransform(ratio, 0, 0, ratio, 0, 0);

			ink = readInk();
			pixels = [];

			for (let y = PIXEL_MAGNET_GAP; y < rect.height; y += PIXEL_MAGNET_GAP) {
				for (let x = PIXEL_MAGNET_GAP; x < rect.width; x += PIXEL_MAGNET_GAP) {
					pixels.push({ homeX: x, homeY: y, x, y });
				}
			}
		};

		const draw = () => {
			const rect = canvas.getBoundingClientRect();
			context.clearRect(0, 0, rect.width, rect.height);
			context.fillStyle = ink;

			let settled = true;

			for (const pixel of pixels) {
				const dx = pointer.x - pixel.homeX;
				const dy = pointer.y - pixel.homeY;
				const distance = Math.hypot(dx, dy);

				// Only dots inside the radius are pulled, and the pull eases
				// off toward the edge so the effect has a soft boundary
				const force =
					distance < PIXEL_MAGNET_RADIUS
						? (1 - distance / PIXEL_MAGNET_RADIUS) * PIXEL_MAGNET_PULL
						: 0;

				const targetX = pixel.homeX + dx * force;
				const targetY = pixel.homeY + dy * force;

				pixel.x += (targetX - pixel.x) * 0.15;
				pixel.y += (targetY - pixel.y) * 0.15;

				const offset = Math.hypot(pixel.x - pixel.homeX, pixel.y - pixel.homeY);
				if (offset > 0.1) {
					settled = false;
				}

				// Dots near the pointer sit brighter, which reads as depth
				context.globalAlpha = 0.18 + Math.min(offset / 24, 1) * 0.5;
				context.fillRect(
					pixel.x,
					pixel.y,
					PIXEL_MAGNET_SIZE,
					PIXEL_MAGNET_SIZE,
				);
			}

			context.globalAlpha = 1;

			// Stop the loop once the grid has settled - an idle canvas
			// should not hold a frame callback open
			if (settled) {
				running = false;
				return;
			}

			frame = window.requestAnimationFrame(draw);
		};

		const start = () => {
			if (running || reducedMotion) {
				return;
			}
			running = true;
			frame = window.requestAnimationFrame(draw);
		};

		const onPointerMove = (event: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			pointer.x = event.clientX - rect.left;
			pointer.y = event.clientY - rect.top;
			start();
		};

		const onPointerLeave = () => {
			pointer.x = -9999;
			pointer.y = -9999;
			start();
		};

		const onResize = () => {
			build();
			start();
		};

		build();
		draw();

		window.addEventListener("pointermove", onPointerMove, { passive: true });
		window.addEventListener("pointerleave", onPointerLeave);
		window.addEventListener("resize", onResize);

		// The palette can change under the visitor, so redraw on a theme swap
		const observer = new MutationObserver(() => {
			ink = readInk();
			start();
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class", "data-element"],
		});

		return () => {
			window.cancelAnimationFrame(frame);
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerleave", onPointerLeave);
			window.removeEventListener("resize", onResize);
			observer.disconnect();
		};
	}, []);

	// aria-hidden sits on the wrapper rather than the canvas: a canvas
	// counts as focusable, and hiding a focusable element from assistive
	// technology leaves it reachable but unannounced
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 text-accent"
		>
			<canvas ref={canvasRef} className="h-full w-full" />
		</div>
	);
};

export default PixelMagnet;
