import type React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={`bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-8 md:p-16 ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
