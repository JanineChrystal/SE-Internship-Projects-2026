import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAspect, ProjectImage } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { OVERVIEW_EYEBROW, OVERVIEW_TITLE } from "../../constants/detail";

interface ProjectOverviewProps {
	text: string;
	images: ProjectImage[];
}

// One column per image, capped at three so the frames stay readable
// Whole class names on purpose: Tailwind scans source text and would
// not see an interpolated one
const COLUMN_CLASSES: Record<number, string> = {
	1: "md:grid-cols-1",
	2: "md:grid-cols-2",
	3: "md:grid-cols-3",
};

// The frame takes the shape of its image, so a phone capture is never
// squeezed into a widescreen box
const ASPECT_CLASSES: Record<ImageAspect, string> = {
	landscape: "aspect-video",
	square: "aspect-square",
	portrait: "aspect-3/4",
	tall: "aspect-9/16",
};

// Project overview - summary row above a row of screenshots
// Stacked rather than side by side: the summary is taller than a
// landscape frame, so one row left a block of dead space beneath it
const ProjectOverview = ({ text, images }: ProjectOverviewProps) => {
	const columnClass =
		COLUMN_CLASSES[Math.min(images.length, 3)] ?? "md:grid-cols-3";

	return (
		<section id="overview" className="flex w-full flex-col justify-center">
			<SectionTitle
				eyebrow={OVERVIEW_EYEBROW}
				title={OVERVIEW_TITLE}
				align="left"
			/>

			<div className="flex flex-col gap-6">
				<div className="surface-glass rounded-3xl p-8">
					{/* Measure capped for readability - justified text across the
					    full width opens rivers between the words */}
					<p className="max-w-3xl leading-relaxed text-ink">{text}</p>
				</div>

				{/* items-start keeps each frame at its own height rather than
				    stretching every cell to match the tallest */}
				<div className={cn("grid grid-cols-1 items-start gap-6", columnClass)}>
					{images.map((image) => (
						<div
							key={image.imageUrl}
							className={cn(
								"surface-neu relative overflow-hidden rounded-3xl transition-transform duration-200 hover:-translate-y-1",
								ASPECT_CLASSES[image.aspect ?? "landscape"],
							)}
						>
							<Image
								src={image.imageUrl}
								alt={image.altText}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectOverview;
