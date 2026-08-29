"use client";

import { useRef } from "react";
import { useLineReveal } from "@/src/hooks/use-line-reveal";
import {
	SELF_INTRO_EYEBROW,
	SELF_INTRO_HEADING,
	SELF_INTRO_LINES,
} from "../../constants/about";

// Self-introduction - lines reveal as the section enters
// Not pinned: the hero and the teaser already hold the page still, and
// pinning every section would turn the page into a slideshow
const SelfIntro = () => {
	const rootRef = useRef<HTMLElement>(null);

	useLineReveal(rootRef, ".self-intro-line");
	return (
		<section
			ref={rootRef}
			id="about"
			className="relative flex min-h-screen w-full items-center px-6 py-28 md:px-16 md:py-36 lg:px-24"
		>
			<div className="max-w-4xl mx-auto flex flex-col gap-6">
				<span className="eyebrow self-intro-line">{SELF_INTRO_EYEBROW}</span>

				<h2 className="self-intro-line text-h2 font-extrabold text-ink-strong">
					{SELF_INTRO_HEADING}
				</h2>

				{SELF_INTRO_LINES.map((line) => (
					<p
						key={line}
						className="self-intro-line text-lead text-ink leading-relaxed"
					>
						{line}
					</p>
				))}
			</div>
		</section>
	);
};

export default SelfIntro;
