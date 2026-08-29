"use client";

import { useRef } from "react";
import { useLineReveal } from "@/src/hooks/use-line-reveal";
import { NARRATIVE_EYEBROW, NARRATIVE_TITLE } from "../../constants/detail";

interface ProjectNarrativeProps {
	lines: string[];
}

// Project narrative - the role and approach behind the build
// Shares the home page self-introduction reveal, so the two sections
// cannot drift apart in feel
const ProjectNarrative = ({ lines }: ProjectNarrativeProps) => {
	const rootRef = useRef<HTMLElement>(null);

	useLineReveal(rootRef, ".narrative-line");
	return (
		<section
			ref={rootRef}
			id="narrative"
			className="relative flex min-h-screen w-full items-center py-20"
		>
			<div className="mx-auto flex max-w-4xl flex-col gap-6">
				<span className="eyebrow narrative-line">{NARRATIVE_EYEBROW}</span>

				<h2 className="narrative-line text-h2 font-extrabold text-ink-strong">
					{NARRATIVE_TITLE}
				</h2>

				{lines.map((line) => (
					<p
						key={line}
						className="narrative-line text-lead leading-relaxed text-ink"
					>
						{line}
					</p>
				))}
			</div>
		</section>
	);
};

export default ProjectNarrative;
