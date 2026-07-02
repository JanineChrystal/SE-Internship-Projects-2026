import type React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={twMerge(
				`bg-background backdrop-blur-md rounded-3xl shadow-2xl p-5 md:p-12 ${className}`,
			)}
		>
			{children}
		</div>
	);
};

export default Card;
