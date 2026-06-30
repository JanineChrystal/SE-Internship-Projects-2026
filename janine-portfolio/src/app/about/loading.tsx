export default function AboutLoading() {
	return (
		<main className="flex flex-col w-full grow">
			{/* About Me Section Skeleton */}
			<section className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col items-center">
				<div className="w-64 h-12 bg-slate-200 animate-pulse rounded-lg mb-10" />
				<div className="w-full p-4 md:p-6 lg:p-6 border border-slate-100 shadow-sm rounded-2xl bg-white">
					<div className="flex flex-col md:flex-row gap-2 lg:gap-3 items-center md:items-start">
						{/* Portrait Wrapper Skeleton */}
						<div className="relative w-full md:w-1/2 h-125 bg-slate-200 animate-pulse rounded-xl" />

						{/* Information Stack Skeleton */}
						<div className="flex flex-col justify-center w-full md:w-1/2 mt-4 md:mt-6 px-4">
							{/* Contact Info Placeholder */}
							<div className="flex flex-col items-center md:items-start mb-10 md:mb-12 gap-3">
								<div className="w-3/4 h-10 bg-slate-200 animate-pulse rounded-md" />
								<div className="w-1/2 h-6 bg-slate-200 animate-pulse rounded-md" />
								<div className="w-1/2 h-6 bg-slate-200 animate-pulse rounded-md" />
							</div>

							{/* Education Placeholder */}
							<div className="flex flex-col items-center md:items-start gap-3">
								<div className="w-1/3 h-8 bg-slate-200 animate-pulse rounded-md mb-2" />
								<div className="w-full h-6 bg-slate-200 animate-pulse rounded-md" />
								<div className="w-2/3 h-5 bg-slate-200 animate-pulse rounded-md mt-2" />
								<div className="w-1/2 h-5 bg-slate-200 animate-pulse rounded-md" />
								<div className="w-3/4 h-5 bg-slate-200 animate-pulse rounded-md" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Career (Work Experience) Section Skeleton */}
			<section className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
				<div className="w-56 h-12 bg-slate-200 animate-pulse rounded-lg mb-10" />
				<div className="flex flex-col gap-8 md:gap-10 w-full">
					{/* Generate 3 experience card placeholders */}
					{[1, 2, 3].map((i) => (
						<div
							key={`work-skel-${i}`}
							className="w-full h-40 bg-slate-200 animate-pulse rounded-2xl"
						/>
					))}
				</div>
			</section>

			{/* Technical Skills Section Skeleton */}
			<section className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
				<div className="w-64 h-12 bg-slate-200 animate-pulse rounded-lg mb-10" />
				<div className="w-full flex flex-col gap-8 mt-8">
					{/* Infinite Slider Placeholders */}
					<div className="w-full h-20 bg-slate-200 animate-pulse rounded-xl" />
					<div className="w-full h-20 bg-slate-200 animate-pulse rounded-xl" />
				</div>
			</section>

			{/* Activities and Events Section Skeleton */}
			<section className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
				<div className="w-72 h-12 bg-slate-200 animate-pulse rounded-lg mb-10" />
				<div className="w-full max-w-4xl mx-auto px-12 mt-4">
					{/* Carousel Item Placeholder */}
					<div className="w-full h-112.5 bg-slate-200 animate-pulse rounded-3xl" />
					{/* Slide Counter Placeholder */}
					<div className="w-24 h-4 bg-slate-200 animate-pulse rounded-md mx-auto mt-6" />
				</div>
			</section>
		</main>
	);
}
