import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Crumb {
	label: string;
	// Omitted on the final crumb - that one is the current page, and a
	// link to where you already are is noise for everyone
	href?: string;
}

interface BreadcrumbProps {
	items: Crumb[];
	className?: string;
}

// Breadcrumb - trail back up the route, styled as an eyebrow so it
// sits with the page heading rather than competing with it
const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
	return (
		<nav aria-label="Breadcrumb" className={className}>
			<ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs tracking-wide">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<li key={item.label} className="flex items-center gap-1.5">
							{item.href && !isLast ? (
								<Link
									href={item.href}
									className="rounded text-ink-muted uppercase transition-colors hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-ink"
								>
									{item.label}
								</Link>
							) : (
								<span
									aria-current="page"
									className={cn(
										"font-bold text-ink-strong uppercase",
										// Project titles run long - truncate rather than
										// let the trail wrap into several lines
										"max-w-[14rem] truncate sm:max-w-[24rem]",
									)}
								>
									{item.label}
								</span>
							)}

							{!isLast && (
								<ChevronRight
									aria-hidden="true"
									className="size-3.5 shrink-0 text-ink-muted"
								/>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
