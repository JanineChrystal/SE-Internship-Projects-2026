import Image from "next/image";
import SectionTitle from "../../../../components/ui/typography/section-title";

interface ProjectImage {
	imageUrl: string;
	altText: string;
}

interface ProjectOverviewProps {
	text: string;
	images: ProjectImage[];
}

const ProjectOverview = ({ text, images }: ProjectOverviewProps) => {
	return (
		<div className="w-full flex flex-col items-center">
			<SectionTitle title="Project Overview" align="center" />
			{/* // Bento Box Grid Layout */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-100">
				<div className="rounded-3xl p-8 flex lg:col-span-1 shadow-2xl transition-transform duration-200 hover:-translate-y-1">
					<p className="text-slate-800 font-semibold leading-relaxed text-justify">
						{text}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
					<div className="flex flex-col gap-6">
						<div className="bg-[#fefce8] rounded-3xl flex-1 flex items-center justify-center text-sm text-slate-500 shadow-2xl min-h-45 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
							{images[0] ? (
								<Image
									src={images[0].imageUrl}
									alt={images[0].altText}
									fill
									className="object-cover w-full h-full absolute inset-0"
								/>
							) : (
								"No Image"
							)}
						</div>
						<div className="bg-[#fefce8] rounded-3xl flex-1 flex items-center justify-center text-sm text-slate-500 shadow-2xl min-h-45 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
							{images[1] ? (
								<Image
									src={images[1].imageUrl}
									alt={images[1].altText}
									fill
									className="object-cover w-full h-full absolute inset-0"
								/>
							) : (
								"No Image"
							)}
						</div>
					</div>
					<div className="bg-[#fefce8] rounded-3xl h-full flex items-center justify-center text-sm text-slate-500 shadow-2xl min-h-75 overflow-hidden relative transition-transform duration-200 hover:-translate-y-1">
						{images[2] ? (
							<Image
								src={images[2].imageUrl}
								alt={images[2].altText}
								fill
								className="object-cover w-full h-full absolute inset-0"
							/>
						) : (
							"No Image"
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectOverview;
