import type { Metadata } from "next";
import "./globals.css";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/nav";
import PanelAssistant from "../components/layout/panel-assistant";
import SmoothScroll from "../components/layout/smooth-scroll";

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
	title: "Chrystl",
	description: "Professional portfolio for project and skills showcase",
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
				{/* Fixed chrome sits outside the smooth wrapper, or it
				    would be transformed along with the scrolling content */}
				<Navbar />
				<PanelAssistant />

				<SmoothScroll>
					<main className="w-full grow">{children}</main>
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
