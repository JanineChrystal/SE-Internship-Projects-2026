import type { Metadata } from "next";
import "./globals.css";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/nav";
import PanelAssistant from "../components/layout/panel-assistant";
import SmoothScroll from "../components/layout/smooth-scroll";
import {
	SITE_AUTHOR,
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_TITLE,
	SITE_URL,
} from "../constants/site";

// Body face - mapped to Tailwind's --font-sans in globals.css
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

// Display face - headings and the hero wordmark
const archivo = Archivo({
	subsets: ["latin"],
	variable: "--font-archivo",
	weight: ["600", "700", "800", "900"],
});

// Utility face - labels, dates and technical tags
const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	// Base for every relative URL below, so OG and canonical tags
	// resolve absolutely - crawlers reject relative ones
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_TITLE,
		// Child routes supply only their own name
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
	authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
	creator: SITE_AUTHOR,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		siteName: SITE_NAME,
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn(
				"font-sans",
				geist.variable,
				archivo.variable,
				geistMono.variable,
			)}
		>
			<body className="relative m-0 p-0">
				{/* Skip link - first thing in the tab order, hidden until
				    focused, so keyboard users can pass the panel and the
				    intro animation in one keystroke */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-surface-top focus:px-5 focus:py-3 focus:font-bold focus:text-ink-strong focus:outline-2 focus:outline-accent-ink"
				>
					Skip to main content
				</a>

				{/* The panel is fixed, so it stays outside the smooth wrapper
				    or it would be transformed with the scrolling content */}
				<PanelAssistant />

				<SmoothScroll>
					<Navbar />
					<main id="main-content" className="w-full grow" tabIndex={-1}>
						{children}
					</main>
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
