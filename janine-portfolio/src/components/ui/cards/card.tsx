import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

// Card variants - neu paints its own flat surface, which the
// neumorphic shadow pair needs in order to read correctly
export const cardVariants = cva("rounded-2xl", {
	variants: {
		variant: {
			plain: "bg-surface-raised border border-border",
			glass: "surface-glass",
			neu: "surface-neu",
			neuInset: "surface-neu-inset",
		},
		padding: {
			none: "p-0",
			sm: "p-4",
			md: "p-5 md:p-8",
			lg: "p-6 md:p-12",
		},
	},
	defaultVariants: {
		variant: "plain",
		padding: "md",
	},
});

export interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	children: React.ReactNode;
}

const Card = ({
	children,
	className,
	variant,
	padding,
	...props
}: CardProps) => {
	return (
		<div
			className={cn(cardVariants({ variant, padding }), className)}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;
