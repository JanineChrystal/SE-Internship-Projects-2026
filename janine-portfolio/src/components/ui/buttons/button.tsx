import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { cn } from "@/lib/utils";

// Button variants - glass is the house style, solid carries primary actions
export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-wide whitespace-nowrap transition-[transform,background-color,box-shadow,opacity] duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				glass: "surface-glass text-ink-strong hover:bg-accent/15",
				solid:
					"bg-accent text-accent-on shadow-xl shadow-el-deep/45 hover:opacity-90",
				outline:
					"border border-accent/40 text-accent-ink hover:bg-accent/10 hover:border-accent/70",
				ghost: "text-accent-ink hover:bg-accent/10",
			},
			size: {
				sm: "h-9 px-4 text-sm",
				md: "h-11 px-6 text-base",
				lg: "h-14 px-9 text-lg",
			},
		},
		defaultVariants: {
			variant: "glass",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	// Renders the child element instead of a button
	// Use when wrapping a Link so no anchor nests inside a button
	asChild?: boolean;
}

const Button = ({
	className,
	variant,
	size,
	asChild = false,
	type,
	...props
}: ButtonProps) => {
	const Component = asChild ? Slot.Root : "button";

	return (
		<Component
			className={cn(buttonVariants({ variant, size }), className)}
			{...(asChild ? {} : { type: type ?? "button" })}
			{...props}
		/>
	);
};

export default Button;
