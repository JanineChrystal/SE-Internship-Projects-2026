import type React from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
	return (
		<div
			// fade in transition
			className="
        w-full 
        transition-all duration-700 ease-out
        opacity-100 translate-y-0
        starting:opacity-0 starting:translate-y-8
      "
		>
			{children}
		</div>
	);
}
