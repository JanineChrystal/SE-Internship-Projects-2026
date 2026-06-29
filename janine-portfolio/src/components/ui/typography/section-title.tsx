interface SectionTitleProps {
	className?: string;
	align?: "left" | "center";
	title: string;
}

const SectionTitle = ({ title, align, className = "" }: SectionTitleProps) => {
	const alignmentType = align === "left" ? "text-left" : "text-center";

	return (
		<h2 className={`text-5xl mb-12 ${alignmentType} ${className}`}>{title}</h2>
	);
};

export default SectionTitle;
