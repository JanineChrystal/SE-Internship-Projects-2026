"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { setScrollPaused } from "@/lib/scroll";
import SectionTitle from "@/src/components/ui/typography/section-title";
import { Carousel_Data, type SlideData } from "@/src/constants/activities";
import { useEscapeKey } from "@/src/hooks/use-escape-key";
import {
	ACTIVITIES_DESCRIPTION,
	ACTIVITIES_EYEBROW,
	ACTIVITIES_TITLE,
} from "../../constants/activities";
import CertificateViewer from "../ui/certificate-viewer";

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

	useEscapeKey(active !== null, close);

	return (
		<section
			id="activities"
			className="relative flex min-h-screen w-full items-center overflow-hidden py-28 md:py-36"
		>
			<div className="w-full">
				<div className="px-6 md:px-16 lg:px-24">
					<SectionTitle
						eyebrow={ACTIVITIES_EYEBROW}
						title={ACTIVITIES_TITLE}
						description={ACTIVITIES_DESCRIPTION}
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
			{active && <CertificateViewer slide={active} onClose={close} />}
		</section>
	);
};

export default Activities;
