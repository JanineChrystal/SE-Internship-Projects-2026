import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
	return (
		<button
			className={`btn-gradient-brand text-black font-black text-xl px-10 py-4 rounded-full shadow-md shadow-black hover:scale-105 transition-transform ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
