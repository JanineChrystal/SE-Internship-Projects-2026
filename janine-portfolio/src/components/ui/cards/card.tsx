import type React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={`bg-white backdrop-blur-md rounded-3xl shadow-xl border border-white/70 p-5 md:p-12 ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
