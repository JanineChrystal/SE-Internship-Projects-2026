"use client";

import { Search, X } from "lucide-react";
import { useId } from "react";
import type { ProjectFacets, ProjectFilters } from "@/lib/project-filters";
import { cn } from "@/lib/utils";
import {
	ANY_OPTION,
	CLEAR_FILTERS_LABEL,
	FILTER_LABELS,
	SEARCH_LABEL,
	SEARCH_PLACEHOLDER,
} from "../../constants/browser";

interface ProjectFilterBarProps {
	facets: ProjectFacets;
	filters: ProjectFilters;
	onChange: (next: Partial<ProjectFilters>) => void;
	onClear: () => void;
	showClear: boolean;
}

// Facet keys paired with their option lists, so the three dropdowns
// render from one loop instead of three near-identical blocks
type FacetKey = keyof typeof FILTER_LABELS;

const selectClasses =
	"w-full appearance-none rounded-lg border border-border bg-surface-top px-3 py-2 text-sm text-ink-strong outline-none transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink";

// Filter bar - free text search plus three derived facets
// Native selects on purpose: they are accessible by default and give
// touch devices the platform picker rather than a custom menu
const ProjectFilterBar = ({
	facets,
	filters,
	onChange,
	onClear,
	showClear,
}: ProjectFilterBarProps) => {
	const searchId = useId();

	const facetOptions: Record<FacetKey, string[]> = {
		tag: facets.tags,
		role: facets.roles,
		year: facets.years,
	};

	return (
		<div className="flex flex-col gap-3">
			{/* Search */}
			<div className="relative">
				<label className="sr-only" htmlFor={searchId}>
					{SEARCH_LABEL}
				</label>
				<Search
					aria-hidden="true"
					className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
				/>
				<input
					id={searchId}
					type="search"
					value={filters.query}
					onChange={(event) => onChange({ query: event.target.value })}
					placeholder={SEARCH_PLACEHOLDER}
					className="w-full rounded-lg border border-border bg-surface-top py-2 pl-9 pr-3 text-sm text-ink-strong outline-none transition-colors placeholder:text-ink-muted hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink"
				/>
			</div>

			{/* Facets */}
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
				{(Object.keys(FILTER_LABELS) as FacetKey[]).map((key) => (
					<div key={key} className="flex flex-col gap-1">
						<span className="eyebrow">{FILTER_LABELS[key]}</span>
						<select
							value={filters[key]}
							aria-label={FILTER_LABELS[key]}
							onChange={(event) => onChange({ [key]: event.target.value })}
							className={selectClasses}
						>
							<option value="">{ANY_OPTION[key]}</option>
							{facetOptions[key].map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				))}
			</div>

			{/* Reset - only offered when something is actually filtered */}
			<button
				type="button"
				onClick={onClear}
				className={cn(
					"inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-accent-ink transition-colors hover:bg-accent/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink",
					showClear ? "visible" : "invisible",
				)}
			>
				<X aria-hidden="true" className="size-3.5" />
				{CLEAR_FILTERS_LABEL}
			</button>
		</div>
	);
};

export default ProjectFilterBar;
