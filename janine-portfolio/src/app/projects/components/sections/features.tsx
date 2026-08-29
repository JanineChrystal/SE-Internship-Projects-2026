"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/src/components/ui/collapsible/collapsible";
import type { ProjectFeature } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { FEATURES_EYEBROW, FEATURES_TITLE } from "../../constants/detail";

interface FeatureHighlightsProps {
	features: ProjectFeature[];
}

// Feature highlights - one collapsible row per feature
// Closed by default apart from the first, so the section reads as a
// scannable list of what the project does and opens only what is asked
// for, rather than stacking every screenshot down the page
const FeatureHighlights = ({ features }: FeatureHighlightsProps) => {
	return (
		<section className="flex w-full flex-col">
			<SectionTitle
				eyebrow={FEATURES_EYEBROW}
				title={FEATURES_TITLE}
				align="left"
			/>

			<div className="flex flex-col gap-3">
				{features.map((feature, index) => (
					<Collapsible
						key={feature.title}
						defaultOpen={index === 0}
						className="surface-glass group rounded-3xl px-6 py-2 md:px-8"
					>
						<CollapsibleTrigger className="flex w-full items-center justify-between gap-4 py-5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink">
							<span className="flex items-center gap-4">
								<span className="font-mono text-xs text-ink-muted">
									{String(index + 1).padStart(2, "0")}
								</span>
								<span className="font-display text-lg font-bold text-ink-strong transition-colors group-hover:text-accent-ink md:text-xl">
									{feature.title}
								</span>
							</span>

							{/* Rotates into a minus when open */}
							<Plus
								aria-hidden="true"
								className="size-5 shrink-0 text-accent-ink transition-transform duration-300 group-data-[state=open]:rotate-45"
							/>
						</CollapsibleTrigger>

						<CollapsibleContent>
							<div className="grid gap-6 pb-6 md:grid-cols-2 md:items-center">
								<p className="leading-relaxed text-ink">
									{feature.description}
								</p>

								<div className="surface-neu relative aspect-video overflow-hidden rounded-2xl">
									<Image
										src={feature.imageUrl}
										alt={feature.altText}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover"
									/>
								</div>
							</div>
						</CollapsibleContent>
					</Collapsible>
				))}
			</div>
		</section>
	);
};

export default FeatureHighlights;
