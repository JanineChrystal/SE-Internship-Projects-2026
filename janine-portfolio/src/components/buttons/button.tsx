import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
	return (
		<button
			className={`bg-linear-to-r from-(--color-brand-yellow)] to-yellow-300 text-black font-black text-xl px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
