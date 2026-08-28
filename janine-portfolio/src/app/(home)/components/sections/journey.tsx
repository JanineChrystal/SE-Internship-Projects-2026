"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Tabs } from "radix-ui";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/src/components/ui/typography/section-title";
import { useAutoCycle } from "@/src/hooks/use-auto-cycle";
import {
	JOURNEY_CYCLE_INTERVAL_MS,
	JOURNEY_DESCRIPTION,
	JOURNEY_EYEBROW,
	JOURNEY_IDS,
	JOURNEY_MILESTONES,
	JOURNEY_NEXT_LABEL,
	JOURNEY_PREV_LABEL,
	JOURNEY_TITLE,
} from "../../constants/journey";
import JourneyTimeline from "../ui/journey-timeline";

const stepButtonClasses =
	"surface-glass flex size-11 items-center justify-center rounded-full text-ink-strong transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink disabled:pointer-events-none disabled:opacity-40";

// Career and journey - one milestone on the card, the whole path on
// the axis below it
const Journey = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [userTookControl, setUserTookControl] = useState(false);
	const rootRef = useRef<HTMLElement>(null);
	const axisRef = useRef<HTMLDivElement>(null);

	const active = JOURNEY_MILESTONES[activeIndex];

	const goToId = (id: string) => {
		const index = JOURNEY_IDS.indexOf(id);

		if (index !== -1) {
			setActiveIndex(index);
		}
	};

	// Auto advance until the visitor picks a point themselves
	// Cycling runs at every width here, unlike the projects rail: the
	// same card and axis are on screen at all sizes
	const { isCycling, isPaused } = useAutoCycle({
		items: JOURNEY_IDS,
		current: active.id,
		onAdvance: goToId,
		intervalMs: JOURNEY_CYCLE_INTERVAL_MS,
		stopped: userTookControl,
		containerRef: rootRef,
		// Only the axis holds the countdown - the card fills most of the
		// screen, so pausing on it would stop cycling more or less always
		pauseRef: axisRef,
		minWidthPx: 0,
	});

	const step = (delta: number) => {
		const next = activeIndex + delta;

		if (next >= 0 && next < JOURNEY_MILESTONES.length) {
			setActiveIndex(next);
			setUserTookControl(true);
		}
	};

	// Radix only fires this for real interaction, so auto advancing
	// writes through goToId and never trips the latch
	const selectById = (id: string) => {
		goToId(id);
		setUserTookControl(true);
	};

	return (
		<section
			ref={rootRef}
			id="journey"
			className="relative flex min-h-screen w-full items-center px-6 py-20 md:px-16 lg:px-24"
		>
			<div className="mx-auto flex w-full max-w-7xl flex-col">
				<SectionTitle
					eyebrow={JOURNEY_EYEBROW}
					title={JOURNEY_TITLE}
					description={JOURNEY_DESCRIPTION}
					align="left"
				/>

				<Tabs.Root
					value={active.id}
					onValueChange={selectById}
					className="flex flex-col gap-8"
				>
					{/* Card - fixed height so stepping through does not resize
					    the section under the visitor */}
					{JOURNEY_MILESTONES.map((milestone) => {
						const Icon = milestone.icon;

						return (
							<Tabs.Content
								key={milestone.id}
								value={milestone.id}
								className="outline-none data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-3"
							>
								<div className="surface-glass grid gap-6 rounded-3xl p-6 md:p-10 lg:min-h-[19rem] lg:grid-cols-[1fr_18rem] lg:items-center lg:gap-10">
									<div className="flex flex-col justify-between gap-6">
										<span className="eyebrow text-accent-ink">
											{milestone.period}
										</span>

										<div className="flex flex-col gap-3">
											<h3 className="text-h3 font-extrabold leading-tight text-ink-strong">
												{milestone.title}
											</h3>
											<p className="text-ink leading-relaxed">
												{milestone.description}
											</p>
										</div>
									</div>

									{/* Square frame - the logos are square, so a landscape
									    box would fit them to its short side and leave wide
									    empty margins either way
									    Photo where one exists, otherwise the milestone icon:
									    the early school years have no usable picture, and an
									    icon beats a stock placeholder */}
									<div className="surface-neu relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-2xl">
										{milestone.imageSrc ? (
											<Image
												src={milestone.imageSrc}
												alt={milestone.altText ?? milestone.title}
												fill
												sizes="18rem"
												className="object-contain p-2"
											/>
										) : (
											<div className="flex h-full w-full items-center justify-center">
												<Icon
													aria-hidden="true"
													className="size-20 text-accent md:size-24"
													strokeWidth={1.25}
												/>
											</div>
										)}
									</div>
								</div>
							</Tabs.Content>
						);
					})}

					{/* The axis overflows on narrow screens rather than
					    crushing seven labels together */}
					<div ref={axisRef} className="no-scrollbar overflow-x-auto pb-1">
						<JourneyTimeline
							milestones={JOURNEY_MILESTONES}
							activeIndex={activeIndex}
							isCycling={isCycling}
							isPaused={isPaused}
							intervalMs={JOURNEY_CYCLE_INTERVAL_MS}
						/>
					</div>
				</Tabs.Root>

				<div className="mt-6 flex items-center justify-end gap-3">
					<button
						type="button"
						onClick={() => step(-1)}
						disabled={activeIndex === 0}
						aria-label={JOURNEY_PREV_LABEL}
						className={cn(stepButtonClasses)}
					>
						<ChevronLeft aria-hidden="true" className="size-5" />
					</button>
					<button
						type="button"
						onClick={() => step(1)}
						disabled={activeIndex === JOURNEY_MILESTONES.length - 1}
						aria-label={JOURNEY_NEXT_LABEL}
						className={cn(stepButtonClasses)}
					>
						<ChevronRight aria-hidden="true" className="size-5" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Journey;
