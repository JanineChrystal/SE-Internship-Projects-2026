"use client";

import { Tabs } from "radix-ui";
import { useMemo, useRef, useState } from "react";
import {
	collectFacets,
	EMPTY_FILTERS,
	filterProjects,
	hasActiveFilters,
	type ProjectFilters,
} from "@/lib/project-filters";
import { cn } from "@/lib/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion/accordion";
import { useAutoCycle } from "@/src/hooks/use-auto-cycle";
import type { Project } from "@/src/types/project";
import {
	AUTO_CYCLE_INTERVAL_MS,
	AUTO_CYCLE_MIN_WIDTH_PX,
	EMPTY_RESULTS_BODY,
	EMPTY_RESULTS_TITLE,
	FILTER_VISIBILITY_THRESHOLD,
	RAIL_GAP_REM,
	RAIL_ITEM_HEIGHT_REM,
	VISIBLE_RAIL_ITEMS,
} from "../../constants/browser";
import ProjectFilterBar from "../ui/project-filter-bar";
import ProjectSummary from "../ui/project-summary";

interface ProjectBrowserProps {
	projects: Project[];
}

// Projects browser - a rail of projects beside the selected summary
// Desktop and touch render the same data through two presentations,
// switched with CSS so both are server rendered and neither depends
// on measuring the viewport during hydration
const ProjectBrowser = ({ projects }: ProjectBrowserProps) => {
	const [filters, setFilters] = useState<ProjectFilters>(EMPTY_FILTERS);
	const [selectedSlug, setSelectedSlug] = useState<string>(
		projects[0]?.slug ?? "",
	);
	const [userTookControl, setUserTookControl] = useState(false);
	const railRef = useRef<HTMLDivElement>(null);

	const facets = useMemo(() => collectFacets(projects), [projects]);

	const visible = useMemo(
		() => filterProjects(projects, filters),
		[projects, filters],
	);

	// Tabs always need a selection, and filtering can hide whatever was
	// chosen, so the fallback is derived rather than synced - an effect
	// would render one empty frame before correcting itself
	const tabSlug = visible.some((project) => project.slug === selectedSlug)
		? selectedSlug
		: (visible[0]?.slug ?? "");

	const cycleSlugs = useMemo(
		() => visible.map((project) => project.slug),
		[visible],
	);

	// Radix only calls onValueChange for real interaction, so a change
	// arriving there is the visitor taking over - auto advancing writes
	// to state directly and never trips this
	const handleUserSelect = (slug: string) => {
		setSelectedSlug(slug);
		setUserTookControl(true);
	};

	const { isCycling, isPaused } = useAutoCycle({
		items: cycleSlugs,
		current: tabSlug,
		onAdvance: setSelectedSlug,
		intervalMs: AUTO_CYCLE_INTERVAL_MS,
		stopped: userTookControl,
		containerRef: railRef,
		minWidthPx: AUTO_CYCLE_MIN_WIDTH_PX,
	});

	// Height of exactly VISIBLE_RAIL_ITEMS rows, gaps included
	// Both columns are pinned to it so the section never resizes as the
	// rail scrolls or the selected project changes
	const browserHeightRem =
		VISIBLE_RAIL_ITEMS * RAIL_ITEM_HEIGHT_REM +
		(VISIBLE_RAIL_ITEMS - 1) * RAIL_GAP_REM;

	const showFilters = projects.length > FILTER_VISIBILITY_THRESHOLD;

	const updateFilters = (next: Partial<ProjectFilters>) => {
		setFilters((current) => ({ ...current, ...next }));
	};

	return (
		<div className="flex flex-col gap-8">
			{showFilters && (
				<ProjectFilterBar
					facets={facets}
					filters={filters}
					onChange={updateFilters}
					onClear={() => setFilters(EMPTY_FILTERS)}
					showClear={hasActiveFilters(filters)}
				/>
			)}

			{visible.length === 0 ? (
				<div className="surface-glass flex flex-col items-center gap-2 rounded-2xl px-6 py-16 text-center">
					<p className="font-display text-lg font-bold text-ink-strong">
						{EMPTY_RESULTS_TITLE}
					</p>
					<p className="text-ink-muted">{EMPTY_RESULTS_BODY}</p>
				</div>
			) : (
				<>
					{/* Desktop - vertical rail beside the summary */}
					<Tabs.Root
						ref={railRef}
						value={tabSlug}
						onValueChange={handleUserSelect}
						orientation="vertical"
						style={{ height: `${browserHeightRem}rem` }}
						className="hidden gap-8 lg:grid lg:grid-cols-[minmax(0,22rem)_1fr]"
					>
						{/* Scrolls within the fixed height once there are more
						    than VISIBLE_RAIL_ITEMS - the scrollbar is hidden, so
						    the rail keeps its width */}
						<Tabs.List
							aria-label="Projects"
							className="no-scrollbar flex h-full flex-col gap-2 overflow-y-auto border-r border-border pr-4"
						>
							{visible.map((project) => (
								<Tabs.Trigger
									key={project.slug}
									value={project.slug}
									style={{ height: `${RAIL_ITEM_HEIGHT_REM}rem` }}
									className={cn(
										"group flex shrink-0 flex-col items-start justify-center gap-1 rounded-xl px-4 py-3 text-left transition-colors outline-none",
										"hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink",
										"data-[state=active]:bg-accent/15",
									)}
								>
									<span className="line-clamp-2 font-display font-bold leading-snug text-ink-strong group-data-[state=active]:text-accent-ink">
										{project.title}
									</span>
									<span className="font-mono text-xs text-ink-muted">
										{project.date}
									</span>

									{/* Countdown to the next advance - remounts with each
									    selection so the animation restarts, and freezes
									    rather than vanishing while paused */}
									{isCycling && project.slug === tabSlug && (
										<span
											aria-hidden="true"
											className="mt-1 h-0.5 w-full overflow-hidden rounded-full bg-accent/20"
										>
											<span
												className="cycle-progress block h-full w-full bg-accent"
												style={{
													animationDuration: `${AUTO_CYCLE_INTERVAL_MS}ms`,
													animationPlayState: isPaused ? "paused" : "running",
												}}
											/>
										</span>
									)}
								</Tabs.Trigger>
							))}
						</Tabs.List>

						{/* forceMount keeps every summary in the markup, so the
						    link to each project is crawlable even though only
						    the selected one is shown - Radix still applies hidden
						    to the inactive panels */}
						{visible.map((project) => (
							<Tabs.Content
								key={project.slug}
								value={project.slug}
								forceMount
								className="no-scrollbar h-full overflow-y-auto outline-none data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 data-[state=inactive]:hidden"
							>
								<ProjectSummary project={project} />
							</Tabs.Content>
						))}
					</Tabs.Root>

					{/* Touch - the same list collapsed into an accordion */}
					{/* The accordion holds the raw selection rather than the
					    tab fallback, so collapsing an item stays collapsed
					    instead of snapping the first one back open */}
					<Accordion
						type="single"
						collapsible
						value={selectedSlug}
						onValueChange={handleUserSelect}
						className="lg:hidden"
					>
						{visible.map((project) => (
							<AccordionItem key={project.slug} value={project.slug}>
								<AccordionTrigger>
									<span className="flex flex-col gap-1">
										<span className="leading-snug">{project.title}</span>
										<span className="font-mono text-xs font-normal text-ink-muted">
											{project.date}
										</span>
									</span>
								</AccordionTrigger>
								<AccordionContent>
									<ProjectSummary project={project} showTitle={false} />
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</>
			)}
		</div>
	);
};

export default ProjectBrowser;
