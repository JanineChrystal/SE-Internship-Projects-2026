import Image from "next/image";
import SectionTitle from "../../../../components/ui/typography/section-title";

interface Feature {
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	extendedDescription: string;
}

interface FeatureHighlightsProps {
	features: Feature[];
}

const FeatureHighlights = ({ features }: FeatureHighlightsProps) => {
	return (
		<section className="w-full min-h-screen flex flex-col items-center">
			<SectionTitle title="Feature Highlights" align="center" />

			<div className="flex flex-col gap-12">
				{features.map((feature, index) => {
					const isEven = index % 2 === 0;

					return (
						<div
							key={feature.title}
							className={`flex flex-col md:flex-row gap-8 min-h-75 ${!isEven ? "md:flex-row-reverse" : ""}`}
						>
							{/* Column 1: Feature Image Box */}
							<div className="bg-[#fefce8] rounded-3xl flex-1 shadow-2xl flex items-center justify-center min-h-62 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
								<Image
									src={feature.imageUrl}
									alt={feature.altText}
									fill
									className="object-cover"
								/>
							</div>

							{/* Column 2: Contains BOTH descriptions stacked vertically */}
							<div className="flex-1 flex flex-col gap-6">
								{/* Short Description Box */}
								<div className="bg-background rounded-3xl shadow-2xl p-8 flex-1 flex flex-col justify-center transition-transform duration-200 hover:-translate-y-1">
									<h3 className="text-xl font-bold text-foreground mb-4">
										{feature.title}
									</h3>
									<p className="text-foreground/80">{feature.description}</p>
								</div>

								{/* Extended Description Box (Now sits neatly below the short one in the same column) */}
								{feature.extendedDescription && (
									<div className="bg-background rounded-3xl shadow-2xl p-8 flex-1 flex flex-col justify-center transition-transform duration-200 hover:-translate-y-1">
										<p className="text-sm text-foreground/60 italic">
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
