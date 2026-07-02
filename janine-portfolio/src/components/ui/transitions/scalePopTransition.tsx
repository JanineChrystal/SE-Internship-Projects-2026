import type React from "react";

export default function ScalePop({ children }: { children: React.ReactNode }) {
	return (
		<div
			//scale and pop transition
			className="
        w-full transition-all duration-700 delay-100 ease-out
        opacity-100 scale-100
        starting:opacity-0 starting:scale-95 "
		>
			{children}
		</div>
	);
}
