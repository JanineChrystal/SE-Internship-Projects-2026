import { cn } from "@/lib/utils";

interface SectionTitleProps {
	title: string;
	// Small mono label sitting above the heading
	eyebrow?: string;
	description?: string;
	align?: "left" | "center";
	as?: "h1" | "h2" | "h3";
	className?: string;
}

const SectionTitle = ({
	title,
	eyebrow,
	description,
	align = "center",
	as: Heading = "h2",
	className,
}: SectionTitleProps) => {
	const isCentered = align === "center";

	return (
		<div
			className={cn(
				"flex flex-col gap-3 mb-8 md:mb-12",
				isCentered ? "items-center text-center" : "items-start text-left",
				className,
			)}
		>
			{eyebrow && <span className="eyebrow">{eyebrow}</span>}

			<Heading className="text-h2 font-extrabold text-ink-strong">
				{title}
			</Heading>

			{description && (
				<p
					className={cn(
						"text-lead text-ink-muted max-w-2xl",
						isCentered && "mx-auto",
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
};

export default SectionTitle;
