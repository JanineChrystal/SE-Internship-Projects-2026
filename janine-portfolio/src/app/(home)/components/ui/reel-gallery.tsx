"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { techData } from "@/src/app/about/constants/techStack";

interface ReelGalleryProps {
	items: techData[];
	// Horizontal reels stacked inside the panel
	rows?: number;
	// Degrees of tilt applied to the whole set
	tilt?: number;
	// How many times each row repeats, so it always overflows
	repeats?: number;
}

// Reel gallery - tilted rows of logos that glide past each other as
// the section scrolls, held inside a fixed panel rather than bleeding
// across the page. Rows are filled round-robin, so adding entries to
// the data keeps every row balanced
const ReelGallery = ({
	items,
	rows = 5,
	tilt = -8,
	repeats = 4,
}: ReelGalleryProps) => {
	const rootRef = useRef<HTMLDivElement>(null);

	const reels = useMemo(() => {
		const buckets: techData[][] = Array.from({ length: rows }, () => []);
		items.forEach((item, index) => {
			buckets[index % rows].push(item);
		});
		return buckets;
	}, [items, rows]);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const strips = gsap.utils.toArray<HTMLElement>(".reel-strip");

				const tweens = strips.map((strip, index) => {
					// Alternating direction is what sells the effect -
					// rows all moving together just reads as a slow pan
					const direction = index % 2 === 0 ? 1 : -1;

					return gsap.fromTo(
						strip,
						{ xPercent: direction * -8 },
						{
							xPercent: direction * 8,
							ease: "none",
							scrollTrigger: {
								trigger: root,
								start: "top bottom",
								end: "bottom top",
								scrub: 0.6,
							},
						},
					);
				});

				return () => {
					for (const tween of tweens) {
						tween.scrollTrigger?.kill();
						tween.kill();
					}
				};
			});

			return () => mm.revert();
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={rootRef}
			className="relative mx-auto h-[380px] w-full max-w-6xl overflow-hidden rounded-3xl border border-border md:h-[460px]"
		>
			{/* Names are exposed once here; the reels are decorative */}
			<ul className="sr-only">
				{items.map((item) => (
					<li key={item.id}>{item.altText}</li>
				))}
			</ul>

			<div
				aria-hidden="true"
				className="absolute left-1/2 top-1/2 flex w-[160%] flex-col gap-3 md:gap-4"
				style={{ transform: `translate(-50%, -50%) rotate(${tilt}deg)` }}
			>
				{reels.map((reel, rowIndex) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: rows are positional, not data
						key={`reel-${rowIndex}`}
						className="reel-strip flex shrink-0 items-center justify-center gap-3 md:gap-4"
					>
						{Array.from({ length: repeats }).flatMap((_, pass) =>
							reel.map((item) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: the pass index is what distinguishes deliberate duplicates
									key={`${item.id}-${pass}`}
									className="relative h-16 w-24 shrink-0 rounded-lg bg-surface-top/90 p-2 shadow-md md:h-20 md:w-32"
								>
									<div className="relative h-full w-full">
										<Image
											src={item.imageSrc}
											alt=""
											fill
											sizes="8rem"
											className="object-contain"
										/>
									</div>
								</div>
							)),
						)}
					</div>
				))}
			</div>

			{/* Fades the reels into the panel edges instead of cutting them */}
			<div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent" />
		</div>
	);
};

export default ReelGallery;
