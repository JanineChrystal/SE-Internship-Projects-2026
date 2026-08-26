import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/src/components/ui/buttons/button";
import TextLink from "@/src/components/ui/typography/text-link";

export const metadata: Metadata = {
	title: "Page Not Found | Janine Chrystal",
	description: "The page you were looking for does not exist.",
};

const NotFoundPage = () => {
	return (
		<main className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-24 text-center">
			{/* Status code - reacts to the selected element theme */}
			<p className="text-7xl md:text-9xl font-black tracking-tight text-brand-yellow select-none">
				404
			</p>

			<h1 className="text-3xl md:text-5xl mt-4 mb-6">Page Not Found</h1>

			<p className="text-lg text-foreground/80 max-w-md mb-10">
				This page does not exist, or it may have moved. Everything else is still
				where you left it.
			</p>

			<div className="flex flex-col sm:flex-row items-center gap-6">
				<Button asChild size="lg">
					<Link href="/">BACK TO HOME</Link>
				</Button>

				<TextLink href="/projects" className="text-foreground">
					<span>View projects instead</span>
					<span className="sr-only">Arrow Icon</span>
					<svg
						className="w-5 h-5 text-brand-yellow"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
						/>
					</svg>
				</TextLink>
			</div>
		</main>
	);
};

export default NotFoundPage;
