import Image from "next/image";
import type { techData } from "@/src/app/about/constants/techStack";

interface InfiniteSliderProps {
	items: techData[];
	direction?: "left" | "right";
}

const InfiniteSlider = ({ items, direction = "left" }: InfiniteSliderProps) => {
	const animationClass =
		direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

	return (
		<div className="w-full overflow-hidden flex relative group">
			<div className={`flex w-max hover-pause ${animationClass}`}>
				<div className="flex gap-8 px-4 items-center">
					{items.map((skill) => (
						<div
							key={`first-${skill.id}`}
							className="relative w-48 h-48 shrink-0 bg-background/50 rounded-xl shadow-sm flex items-center justify-center p-4"
						>
							<Image
								src={skill.imageSrc}
								alt={skill.altText}
								fill
								sizes="96px"
								className="object-contain p-2"
							/>
						</div>
					))}
				</div>

				<div className="flex gap-8 px-4 items-center" aria-hidden="true">
					{items.map((skill) => (
						<div
							key={`second-${skill.id}`}
							className="relative w-48 h-48 shrink-0 bg-background/50 rounded-xl shadow-sm flex items-center justify-center p-4"
						>
							<Image
								src={skill.imageSrc}
								alt={skill.altText}
								fill
								sizes="96px"
								className="object-contain p-2"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default InfiniteSlider;
