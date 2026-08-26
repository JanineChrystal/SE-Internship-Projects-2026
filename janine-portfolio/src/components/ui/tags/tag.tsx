import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

// Tag variants - accent keys off the active element palette
export const tagVariants = cva(
	"inline-flex items-center rounded-full font-mono font-medium tracking-wide whitespace-nowrap",
	{
		variants: {
			variant: {
				accent: "bg-accent/12 text-accent-ink border border-accent/25",
				muted: "bg-surface-raised text-ink-muted border border-border",
				solid: "bg-accent text-surface-top border border-transparent",
			},
			size: {
				sm: "px-2 py-0.5 text-[0.7rem]",
				md: "px-2.5 py-1 text-xs",
			},
		},
		defaultVariants: {
			variant: "accent",
			size: "md",
		},
	},
);

export interface TagProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof tagVariants> {
	children: React.ReactNode;
}

const Tag = ({ children, className, variant, size, ...props }: TagProps) => {
	return (
		<span className={cn(tagVariants({ variant, size }), className)} {...props}>
			{children}
		</span>
	);
};

export default Tag;
