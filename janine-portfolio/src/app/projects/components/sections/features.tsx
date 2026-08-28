import Image from "next/image";
import type { ProjectFeature } from "@/src/types/project";
import SectionTitle from "../../../../components/ui/typography/section-title";
import { FEATURES_EYEBROW, FEATURES_TITLE } from "../../constants/detail";

interface FeatureHighlightsProps {
	features: ProjectFeature[];
}

const FeatureHighlights = ({ features }: FeatureHighlightsProps) => {
	return (
		<section className="flex w-full flex-col">
			<SectionTitle
				eyebrow={FEATURES_EYEBROW}
				title={FEATURES_TITLE}
				align="left"
			/>

			<div className="flex flex-col gap-12">
				{features.map((feature, index) => {
					const isEven = index % 2 === 0;

					return (
						<div
							key={feature.title}
							className={`flex flex-col md:flex-row gap-8 min-h-75 ${!isEven ? "md:flex-row-reverse" : ""}`}
						>
							{/* Column 1: Feature Image Box */}
							<div className="bg-surface-raised rounded-3xl flex-1 shadow-2xl flex items-center justify-center min-h-62 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
								<Image
									src={feature.imageUrl}
									alt={feature.altText}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover"
								/>
							</div>

							{/* Column 2: Contains BOTH descriptions stacked vertically */}
							<div className="flex-1 flex flex-col gap-6">
								{/* Short Description Box */}
								<div className="bg-surface-raised rounded-3xl shadow-2xl p-8 flex-1 flex flex-col justify-center transition-transform duration-200 hover:-translate-y-1">
									<h3 className="text-xl font-bold text-ink-strong mb-4">
										{feature.title}
									</h3>
									<p className="text-ink">{feature.description}</p>
								</div>

								{/* Extended Description Box (Now sits neatly below the short one in the same column) */}
								{feature.extendedDescription && (
									<div className="bg-surface-raised rounded-3xl shadow-2xl p-8 flex-1 flex flex-col justify-center transition-transform duration-200 hover:-translate-y-1">
										<p className="text-sm text-ink-muted italic">
											{feature.extendedDescription}
										</p>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default FeatureHighlights;
