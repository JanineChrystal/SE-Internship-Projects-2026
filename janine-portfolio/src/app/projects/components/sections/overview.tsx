import Image from "next/image";
import type { ProjectImage } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { OVERVIEW_EYEBROW, OVERVIEW_TITLE } from "../../constants/detail";

interface ProjectOverviewProps {
	text: string;
	images: ProjectImage[];
}

// Project overview - summary beside a grid of landscape frames
// The frames are 16:9 because every screenshot is a landscape capture;
// the previous tall cells cropped them through the middle
// Rendered from the data rather than fixed slots, so a project decides
// how many shots it shows by how many it lists
const ProjectOverview = ({ text, images }: ProjectOverviewProps) => {
	return (
		<section id="overview" className="flex w-full flex-col justify-center">
			<SectionTitle
				eyebrow={OVERVIEW_EYEBROW}
				title={OVERVIEW_TITLE}
				align="left"
			/>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="surface-glass flex rounded-3xl p-8 lg:col-span-1">
					<p className="text-justify font-semibold leading-relaxed text-ink">
						{text}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
					{images.map((image) => (
						<div
							key={image.imageUrl}
							className="surface-neu relative aspect-video overflow-hidden rounded-3xl transition-transform duration-200 hover:-translate-y-1"
						>
							<Image
								src={image.imageUrl}
								alt={image.altText}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
