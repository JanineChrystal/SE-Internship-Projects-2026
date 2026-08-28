"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { Draggable, gsap } from "@/lib/gsap";
import type { techData } from "@/src/app/about/constants/techStack";

interface ReelGalleryProps {
	items: techData[];
	// Horizontal reels stacked across the backdrop
	rows?: number;
	tilt?: number;
	// How many times each row repeats, so it always overflows
	repeats?: number;
}

// Reel gallery - a tilted backdrop of logo rows
// Two transform layers per row on purpose: the drag layer owns x, the
// strip owns xPercent for the scroll glide. Sharing one property would
// mean dragging and scrolling overwrite each other
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
			// One Draggable per row, so dragging a reel moves only that reel
			const draggables = Draggable.create(".reel-drag", {
				type: "x",
				bounds: root,
				inertia: false,
				allowNativeTouchScrolling: true,
				cursor: "grab",
				activeCursor: "grabbing",
			});

			const mm = gsap.matchMedia();

			mm.add("(prefers-reduced-motion: no-preference)", () => {
				const strips = gsap.utils.toArray<HTMLElement>(".reel-strip");

				const tweens = strips.map((strip, index) => {
					// Alternating direction reads as reels rather than one pan
					const direction = index % 2 === 0 ? 1 : -1;

					return gsap.fromTo(
						strip,
						{ xPercent: direction * -5 },
						{
							xPercent: direction * 5,
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

			return () => {
				mm.revert();
				for (const draggable of draggables) {
					draggable.kill();
				}
			};
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={rootRef}
			className="reel-mask-y absolute inset-x-0 inset-y-[6%] z-0 overflow-hidden"
		>
			{/* Names are exposed once here; the reels are decorative */}
			<ul className="sr-only">
				{items.map((item) => (
					<li key={item.id}>{item.altText}</li>
				))}
			</ul>

			<div className="reel-mask-x absolute inset-0 overflow-hidden">
				<div
					aria-hidden="true"
					className="reel-stage absolute left-1/2 top-1/2 flex w-[200%] flex-col gap-4 md:gap-6"
					style={{ transform: `translate(-50%, -50%) rotate(${tilt}deg)` }}
				>
					{reels.map((reel, rowIndex) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: rows are positional, not data
							key={`reel-${rowIndex}`}
							className="reel-strip flex shrink-0 items-center justify-center"
						>
							<div className="reel-drag flex cursor-grab items-center justify-center gap-4 active:cursor-grabbing md:gap-6">
								{Array.from({ length: repeats }).flatMap((_, pass) =>
									reel.map((item) => (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: the pass index distinguishes deliberate duplicates
											key={`${item.id}-${pass}`}
											className="relative h-28 w-44 shrink-0 rounded-xl bg-surface-top/80 p-4 shadow-xl md:h-40 md:w-64"
										>
											<div className="relative h-full w-full">
												<Image
													src={item.imageSrc}
													alt=""
													fill
													sizes="16rem"
													className="object-contain"
												/>
											</div>
										</div>
									)),
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReelGallery;
