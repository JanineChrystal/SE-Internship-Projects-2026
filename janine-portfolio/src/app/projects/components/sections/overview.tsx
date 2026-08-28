import Image from "next/image";
import type { ProjectImage } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { OVERVIEW_EYEBROW, OVERVIEW_TITLE } from "../../constants/detail";

interface ProjectOverviewProps {
	text: string;
	images: ProjectImage[];
}

const ProjectOverview = ({ text, images }: ProjectOverviewProps) => {
	return (
		<section id="overview" className="flex w-full flex-col justify-center">
			<SectionTitle
				eyebrow={OVERVIEW_EYEBROW}
				title={OVERVIEW_TITLE}
				align="left"
			/>

			{/* // Bento Box Grid Layout */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-100">
				<div className="rounded-3xl p-8 flex lg:col-span-1 shadow-2xl transition-transform duration-200 hover:-translate-y-1">
					<p className="text-ink font-semibold leading-relaxed text-justify">
						{text}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
					<div className="flex flex-col gap-6">
						<div className="bg-surface-raised rounded-3xl flex-1 flex items-center justify-center text-sm text-ink-muted shadow-2xl min-h-45 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
							{images[0] ? (
								<Image
									src={images[0].imageUrl}
									alt={images[0].altText}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover w-full h-full absolute inset-0"
								/>
							) : (
								"No Image"
							)}
						</div>
						<div className="bg-surface-raised rounded-3xl flex-1 flex items-center justify-center text-sm text-ink-muted shadow-2xl min-h-45 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
							{images[1] ? (
								<Image
									src={images[1].imageUrl}
									alt={images[1].altText}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover w-full h-full absolute inset-0"
								/>
							) : (
								"No Image"
							)}
						</div>
					</div>
					<div className="bg-surface-raised rounded-3xl h-full flex items-center justify-center text-sm text-ink-muted shadow-2xl min-h-75 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
						{images[2] ? (
							<Image
								src={images[2].imageUrl}
								alt={images[2].altText}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="object-cover w-full h-full absolute inset-0"
							/>
						) : (
							"No Image"
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectOverview;
