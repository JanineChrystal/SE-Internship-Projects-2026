export default function ProjectDetailLoading() {
	return (
		<main
			id="project-details"
			className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col items-center"
		>
			{/* Main Project Title Skeleton */}
			<div className="w-64 md:w-96 h-12 md:h-14 bg-slate-200 animate-pulse rounded-xl" />

			{/* Wrapper for the three main sections */}
			<div className="w-full flex flex-col gap-24 mt-2">
				{/* Project Overview Bento Box Skeleton */}
				<div className="w-full flex flex-col items-center mt-12">
					<div className="w-56 h-10 bg-slate-200 animate-pulse rounded-lg mb-8" />

					<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-100">
						{/* Left Column: Text Paragraph Box */}
						<div className="rounded-3xl p-8 flex flex-col gap-4 lg:col-span-1 shadow-sm border border-slate-50 bg-white">
							<div className="w-full h-4 bg-slate-200 animate-pulse rounded-md" />
							<div className="w-full h-4 bg-slate-200 animate-pulse rounded-md" />
							<div className="w-11/12 h-4 bg-slate-200 animate-pulse rounded-md" />
							<div className="w-full h-4 bg-slate-200 animate-pulse rounded-md mt-4" />
							<div className="w-4/5 h-4 bg-slate-200 animate-pulse rounded-md" />
							<div className="w-full h-4 bg-slate-200 animate-pulse rounded-md" />
						</div>

						{/* Right Column: Split Image Grids */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
							{/* Sub-column 1: Two stacked images */}
							<div className="flex flex-col gap-6">
								<div className="bg-slate-200 animate-pulse rounded-3xl flex-1 min-h-45" />
								<div className="bg-slate-200 animate-pulse rounded-3xl flex-1 min-h-45" />
							</div>
							{/* Sub-column 2: One tall image */}
							<div className="bg-slate-200 animate-pulse rounded-3xl h-full min-h-75" />
						</div>
					</div>
				</div>

				{/* Feature Highlights Zig-Zag Skeleton */}
				<div className="w-full flex flex-col items-center">
					<div className="w-64 h-10 bg-slate-200 animate-pulse rounded-lg mb-10" />

					<div className="flex flex-col gap-12 w-full">
						{/* Iterate 2 dummy features to mimic the even/odd alternating rows */}
						{[0, 1].map((index) => {
							const isEven = index % 2 === 0;
							return (
								<div
									key={`feature-skel-${index}`}
									className={`flex flex-col md:flex-row gap-8 min-h-75 ${
										!isEven ? "md:flex-row-reverse" : ""
									}`}
								>
									{/* Feature Image Box Placeholder */}
									<div className="bg-slate-200 animate-pulse rounded-3xl flex-1 min-h-62 shadow-sm" />

									{/* Descriptions Column Placeholder */}
									<div className="flex-1 flex flex-col gap-6">
										{/* Short Description Box */}
										<div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex-1 flex flex-col justify-center gap-4">
											<div className="w-1/2 h-6 bg-slate-200 animate-pulse rounded-md mb-2" />
											<div className="w-full h-4 bg-slate-200 animate-pulse rounded-md" />
											<div className="w-4/5 h-4 bg-slate-200 animate-pulse rounded-md" />
										</div>

										{/* Extended Description Box */}
										<div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex-1 flex flex-col justify-center gap-2">
											<div className="w-full h-3 bg-slate-200 animate-pulse rounded-md" />
											<div className="w-5/6 h-3 bg-slate-200 animate-pulse rounded-md" />
											<div className="w-11/12 h-3 bg-slate-200 animate-pulse rounded-md" />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Tech Stack Skeleton */}
				<div className="w-full flex flex-col items-center mb-12">
					<div className="w-56 h-10 bg-slate-200 animate-pulse rounded-lg mb-8" />
					{/* Infinite Slider Placeholder */}
					<div className="w-full h-20 bg-slate-200 animate-pulse rounded-xl" />
				</div>
			</div>
		</main>
	);
}
