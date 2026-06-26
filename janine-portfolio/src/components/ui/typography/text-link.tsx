import Link from "next/link";
import type React from "react";

interface TextLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const TextLink = ({ href, children, className = "" }: TextLinkProps) => {
	return (
		<Link
			href={href}
			className={`inline-flex items-center gap-2 font-medium text-black hover:opacity-60 transition-opacity ${className}`}
		>
			{children}
		</Link>
	);
};

export default TextLink;
