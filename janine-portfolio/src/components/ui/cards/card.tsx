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
				`bg-white backdrop-blur-md rounded-3xl shadow-xl border border-white/70 p-5 md:p-12 ${className}`,
			)}
		>
			{children}
		</div>
	);
};

export default Card;
