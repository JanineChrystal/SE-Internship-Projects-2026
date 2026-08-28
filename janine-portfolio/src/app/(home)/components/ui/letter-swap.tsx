import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface LetterSwapProps {
	text: string;
	className?: string;
}

// 3D letter swap - each character is a two-faced edge that rolls
// on the X axis when the word is hovered
// Decorative and pure CSS, so this stays a server component and
// the stagger costs no JavaScript
// Per-letter delay comes from the --i custom property
const LetterSwap = ({ text, className }: LetterSwapProps) => {
	return (
		<span className={cn("letter-swap", className)}>
			{/* The faces below are decorative duplicates of this text */}
			<span className="sr-only">{text}</span>

			{Array.from(text).map((char, index) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: fixed string, characters never reorder
					key={`${char}-${index}`}
					className="letter-swap-char"
					aria-hidden="true"
				>
					<span
						className="letter-swap-inner"
						style={{ "--i": index } as CSSProperties}
					>
						<span className="letter-swap-face letter-swap-face--front">
							{char === " " ? " " : char}
						</span>
						<span className="letter-swap-face letter-swap-face--back">
							{char === " " ? " " : char}
						</span>
					</span>
				</span>
			))}
		</span>
	);
};

export default LetterSwap;
