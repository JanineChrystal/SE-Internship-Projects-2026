import Image from "next/image";
import type { ProjectImage } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { OVERVIEW_EYEBROW, OVERVIEW_TITLE } from "../../constants/detail";

interface ProjectOverviewProps {
	text: string;
	images: ProjectImage[];
}

// Project overview - summary above a pair of screenshots
// Every project shows exactly two landscape captures, so the block is
// the same shape on every case study and nothing is cropped to fit
const ProjectOverview = ({ text, images }: ProjectOverviewProps) => {
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

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{images.map((image) => (
						<div
							key={image.imageUrl}
							className="surface-neu relative aspect-video overflow-hidden rounded-3xl transition-transform duration-200 hover:-translate-y-1"
						>
							<Image
								src={image.imageUrl}
								alt={image.altText}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
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
