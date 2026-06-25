import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/nav";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Janine Portfolio",
	description: "Professional portfolio for project and skills showcase",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body className="min-h-screen flex flex-col m-0 p-0">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
