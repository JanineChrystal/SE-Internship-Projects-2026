"use client";

import { Tabs } from "radix-ui";
import { cn } from "@/lib/utils";
import type { JourneyMilestone } from "../../constants/journey";

interface JourneyTimelineProps {
	milestones: JourneyMilestone[];
	activeIndex: number;
	// Auto cycle state - drives the countdown on the active segment
	isCycling: boolean;
	isPaused: boolean;
	intervalMs: number;
}

// Timeline axis - label, node and period stacked in one target
// Each node draws the segment to its right, so the progress fill needs
// no measuring: colour the segments before the active node and the
// line reads as filled up to that point
const JourneyTimeline = ({
	milestones,
	activeIndex,
	isCycling,
	isPaused,
	intervalMs,
}: JourneyTimelineProps) => {
	return (
		<Tabs.List
			aria-label="Career milestones"
			className="no-scrollbar grid min-w-[44rem] gap-0"
			style={{
				gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))`,
			}}
		>
			{milestones.map((milestone, index) => {
				const isActive = index === activeIndex;
				const isReached = index <= activeIndex;

				return (
					<Tabs.Trigger
						key={milestone.id}
						value={milestone.id}
						className="group flex flex-col items-start gap-2 pr-2 text-left outline-none"
					>
						<span
							className={cn(
								"h-5 truncate text-xs transition-colors",
								isActive
									? "font-bold text-ink-strong"
									: "text-ink-muted group-hover:text-ink",
							)}
						>
							{milestone.label}
						</span>

						{/* Node and the segment leading to the next one */}
						<span className="relative flex h-3 w-full items-center">
							<span
								className={cn(
									"absolute inset-x-0 h-px transition-colors duration-500",
									index < activeIndex ? "bg-accent" : "bg-border",
								)}
							/>

							{/* Countdown to the next milestone, drawn along the
							    segment the timeline is about to reach - remounts
							    with each selection so the fill restarts */}
							{isCycling && isActive && (
								<span
									aria-hidden="true"
									className="cycle-progress absolute inset-x-0 h-px bg-accent"
									style={{
										animationDuration: `${intervalMs}ms`,
										animationPlayState: isPaused ? "paused" : "running",
									}}
								/>
							)}
							<span
								className={cn(
									"relative z-10 rounded-full border-2 transition-all duration-300",
									isReached
										? "border-accent bg-accent"
										: "border-border bg-surface",
									isActive
										? "size-3.5 ring-4 ring-accent/20"
										: "size-2.5 group-hover:border-accent",
								)}
							/>
						</span>

						<span
							className={cn(
								"font-mono text-xs transition-colors",
								isActive
									? "rounded-full bg-accent px-2 py-0.5 text-accent-on"
									: "px-2 py-0.5 text-ink-muted",
							)}
						>
							{milestone.period}
						</span>
					</Tabs.Trigger>
				);
			})}
		</Tabs.List>
	);
};

export default JourneyTimeline;
