import Image from "next/image";
import Card from "../cards/card";
import type { BaseCardItem } from ".";

const TechnologyCard = ({ title, imageSrc, altText }: BaseCardItem) => {
	return (
		<Card className="flex flex-col p-8 md:p-10 h-full">
			<div className="relative w-30 h-30 shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2">
				<Image
					src={imageSrc as string}
					alt={altText || `${title} Image`}
					fill
					className="object-contain"
				/>
			</div>
		</Card>
	);
};

export default TechnologyCard;
