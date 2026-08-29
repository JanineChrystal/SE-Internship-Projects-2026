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
// All closed by default, so the section reads as a scannable list of
// what the project does and opens only what is asked for, rather than
// stacking every screenshot down the page
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
							<div className="flex flex-col gap-6 pb-6">
								<p className="max-w-3xl leading-relaxed text-ink">
									{feature.description}
								</p>

								{/* Sized by the file rather than a fixed frame: the
								    captures vary from wide dashboards to tall pages,
								    and a set aspect would crop the long ones
								    width and height are a ratio hint that reserves
								    space before load; h-auto hands the final height
								    back to the image itself */}
								<div className="surface-neu overflow-hidden rounded-2xl">
									<Image
										src={feature.imageUrl}
										alt={feature.altText}
										width={1600}
										height={900}
										sizes="(max-width: 768px) 100vw, 60rem"
										className="h-auto w-full"
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
