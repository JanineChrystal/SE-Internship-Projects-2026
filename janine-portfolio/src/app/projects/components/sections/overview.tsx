import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAspect, ProjectImage } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { OVERVIEW_EYEBROW, OVERVIEW_TITLE } from "../../constants/detail";

interface ProjectOverviewProps {
	text: string;
	images: ProjectImage[];
}

// Whole class names throughout - Tailwind scans source text and would
// not see an interpolated one

// Row layout, used below three images: one column each
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

// Bento placement at exactly three images: the two landscape captures
// stack down the left, and the odd-shaped third runs the full height
// beside them, which squares the block off instead of leaving one
// column hanging lower than the rest
const BENTO_POSITIONS = [
	"lg:col-span-2 lg:col-start-1 lg:row-start-1",
	"lg:col-span-2 lg:col-start-1 lg:row-start-2",
	"lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:aspect-auto lg:h-full",
];

const frameClasses =
	"surface-neu relative overflow-hidden rounded-3xl transition-transform duration-200 hover:-translate-y-1";

// Project overview - summary above the screenshots
// Two images sit in a plain row; three fall into the bento, where the
// tall one earns its own column
const ProjectOverview = ({ text, images }: ProjectOverviewProps) => {
	const isBento = images.length === 3;

	const gridClass = isBento
		? "lg:grid-cols-3 lg:grid-rows-2"
		: (COLUMN_CLASSES[Math.min(images.length, 3)] ?? "md:grid-cols-3");

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

				{/* items-start matters only in the row layout, where frames of
				    different shapes must keep their own heights */}
				<div className={cn("grid grid-cols-1 items-start gap-6", gridClass)}>
					{images.map((image, index) => (
						<div
							key={image.imageUrl}
							className={cn(
								frameClasses,
								// Mobile always stacks, so every frame keeps its shape
								ASPECT_CLASSES[image.aspect ?? "landscape"],
								isBento && BENTO_POSITIONS[index],
							)}
						>
							<Image
								src={image.imageUrl}
								alt={image.altText}
								fill
								sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
