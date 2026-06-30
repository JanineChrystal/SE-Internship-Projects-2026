"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
import { Carousel_Data } from "@/src/constants/about/actsEvents";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../../../components/ui/carousel/carousel";
import SectionTitle from "../../../../components/ui/typography/section-title";

const ActsEvents = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section
			id="actsNevents"
			className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center"
		>
			<SectionTitle title="Activities and Events" align="center" />

			<div className="w-full max-w-4xl mx-auto px-12">
				<Carousel
					setApi={setApi}
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 2000,
						}),
					]}
					className="w-full"
				>
					<CarouselContent>
						{Carousel_Data.map((slide) => (
							<CarouselItem key={slide.id}>
								<div className="p-2 h-full">
									<div className="relative flex flex-col h-full items-center justify-center bg-white-1/2 rounded-2xl shadow-sm overflow-hidden p-6 md:p-8">
										<div className="relative w-full h-64 md:h-80 mb-6">
											<Image
												src={slide.imageSrc}
												alt={slide.altText}
												fill
												sizes="(max-width: 768px) 100vw, 800px"
												className="object-contain rounded-lg"
											/>
										</div>

										<h3 className="text-xl md:text-2xl font-black text-center uppercase tracking-tight">
											{slide.title}
										</h3>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				<div className="py-6 text-center text-sm font-medium text-black/70">
					Slide {current} of {count}
				</div>
			</div>
		</section>
	);
};

export default ActsEvents;
