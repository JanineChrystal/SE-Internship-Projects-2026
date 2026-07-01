import { cn } from "@/lib/utils";

interface SectionTitleProps {
	className?: string;
	align?: "left" | "center";
	title: string;
}

const SectionTitle = ({
	title,
	align = "center",
	className = "",
}: SectionTitleProps) => {
	const alignmentType = align === "left" ? "text-left" : "text-center";

	return (
		<h2
			className={cn(
				`text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10 lg:mb-12 text-foreground font-black tracking-tight ${alignmentType}`,
				className,
			)}
		>
			{title}
		</h2>
	);
};

export default SectionTitle;
