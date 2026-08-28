import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Frame variants - neu is the house style for photography,
// matching the neumorphism reference
export const frameVariants = cva("relative overflow-hidden rounded-2xl", {
	variants: {
		variant: {
			neu: "surface-neu p-3",
			neuInset: "surface-neu-inset p-3",
			glass: "surface-glass p-3",
			bare: "p-0",
		},
	},
	defaultVariants: {
		variant: "neu",
	},
});

export interface ImageFrameProps extends VariantProps<typeof frameVariants> {
	src: string;
	alt: string;
	className?: string;
	imageClassName?: string;
	// Aspect ratio applied to the inner image area, e.g. "4 / 5"
	ratio?: string;
	sizes?: string;
	// Only the hero portrait should opt out of lazy loading
	priority?: boolean;
	fit?: "cover" | "contain";
}

const ImageFrame = ({
	src,
	alt,
	className,
	imageClassName,
	variant,
	ratio = "4 / 3",
	sizes = "(max-width: 768px) 100vw, 50vw",
	priority = false,
	fit = "cover",
}: ImageFrameProps) => {
	return (
		<div className={cn(frameVariants({ variant }), className)}>
			<div
				className="relative w-full rounded-xl overflow-hidden"
				style={{ aspectRatio: ratio }}
			>
				<Image
					src={src}
					alt={alt}
					fill
					sizes={sizes}
					priority={priority}
					loading={priority ? undefined : "lazy"}
					className={cn(
						fit === "cover" ? "object-cover" : "object-contain",
						imageClassName,
					)}
				/>
			</div>
		</div>
	);
};

export default ImageFrame;
