"use client";

import useEmblaCarousel from "embla-carousel-react";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { setScrollPaused } from "@/lib/scroll";
import SectionTitle from "@/src/components/ui/typography/section-title";
import { Carousel_Data, type SlideData } from "@/src/constants/activities";

// Activities and events - certificates on a drag-scrolled rail
// Embla handles the drag physics, so none of that is hand-written
const Activities = () => {
	const [emblaRef] = useEmblaCarousel({
		dragFree: true,
		containScroll: "trimSnaps",
		align: "start",
	});
	const [active, setActive] = useState<SlideData | null>(null);

	const close = useCallback(() => {
		setActive(null);
		setScrollPaused(false);
	}, []);

	const open = (slide: SlideData) => {
		setActive(slide);
		// Hold the page still behind the viewer
		setScrollPaused(true);
	};

	useEffect(() => {
		if (!active) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				close();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active, close]);

	return (
		<section
			id="activities"
			className="relative flex min-h-screen w-full items-center overflow-hidden py-28 md:py-36"
		>
			<div className="w-full">
				<div className="px-6 md:px-16 lg:px-24">
					<SectionTitle
						eyebrow="Beyond the code"
						title="Activities and events"
						description="Seminars, workshops and certifications. Drag to browse, click to enlarge."
						align="left"
					/>
				</div>

				{/* Drag rail */}
				<div className="overflow-hidden px-6 md:px-16 lg:px-24" ref={emblaRef}>
					<div className="flex gap-6">
						{Carousel_Data.map((slide) => (
							<button
								key={slide.id}
								type="button"
								onClick={() => open(slide)}
								className="group w-72 shrink-0 cursor-pointer text-left md:w-96"
							>
								<div className="surface-neu relative aspect-4/3 w-full overflow-hidden rounded-2xl p-3 transition-transform duration-300 group-hover:-translate-y-1">
									<div className="relative h-full w-full overflow-hidden rounded-xl">
										<Image
											src={slide.imageSrc}
											alt={slide.altText}
											fill
											sizes="(max-width: 768px) 80vw, 24rem"
											className="object-cover"
										/>
									</div>
								</div>

								<p className="eyebrow mt-4">{slide.date}</p>
								<p className="mt-1 font-display font-bold leading-snug text-ink-strong">
									{slide.title}
								</p>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Full-screen viewer, portalled to the body
			    ScrollSmoother transforms #smooth-content, and a transformed
			    ancestor becomes the containing block for fixed children - so
			    rendered in place this would anchor to the section, not the
			    viewport */}
			{active &&
				createPortal(
					<div
						role="dialog"
						aria-modal="true"
						aria-label={active.title}
						className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 overflow-hidden bg-el-deep/95 p-6 md:p-10"
					>
						{/* Backdrop dismiss, same as Escape */}
						<button
							type="button"
							onClick={close}
							className="absolute inset-0 cursor-zoom-out"
						>
							<span className="sr-only">Close certificate viewer</span>
						</button>

						<div className="relative z-10 h-[62vh] w-full max-w-5xl md:h-[68vh]">
							<Image
								src={active.imageSrc}
								alt={active.altText}
								fill
								sizes="100vw"
								className="object-contain"
							/>
						</div>

						{/* The scrim is dark in both themes, so this text is
					    deliberately fixed rather than theme-aware */}
						<div className="relative z-10 max-w-2xl shrink-0 text-center">
							<p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/60">
								{active.date}
							</p>
							<p className="mt-2 font-display text-base font-bold leading-snug text-white md:text-lg">
								{active.title}
							</p>
						</div>

						<button
							type="button"
							onClick={close}
							className="surface-glass absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white"
						>
							<X size={20} aria-hidden="true" />
							<span className="sr-only">Close certificate viewer</span>
						</button>
					</div>,
					document.body,
				)}
		</section>
	);
};

export default Activities;
