import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/nav";

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
		<html lang="en">
			<body className="min-h-screen flex flex-col m-0 p-0 overflow-hidden">
				<Navbar />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
