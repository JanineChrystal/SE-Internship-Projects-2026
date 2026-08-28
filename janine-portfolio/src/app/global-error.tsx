"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

// Global error boundary - last resort when the root layout itself fails
// Replaces the whole document, so it renders its own html and body
export default function GlobalError({ error, reset }: GlobalErrorProps) {
	useEffect(() => {
		console.error("Root layout error:", error);
	}, [error]);

	return (
		<html lang="en">
			{/* Inline styles only - global stylesheet may not have loaded */}
			<body
				style={{
					margin: 0,
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
					padding: "2rem",
					textAlign: "center",
					fontFamily: "system-ui, sans-serif",
					background: "#ffffff",
					color: "#0f172a",
				}}
			>
				<h1 style={{ fontSize: "1.75rem", fontWeight: 800, margin: 0 }}>
					Something went wrong
				</h1>

				<p style={{ maxWidth: "28rem", margin: 0, color: "#475569" }}>
					The site failed to load. Try again, and if it keeps happening please
					reach out through the contact page.
				</p>

				<button
					type="button"
					onClick={() => reset()}
					style={{
						marginTop: "0.5rem",
						padding: "0.75rem 1.5rem",
						borderRadius: "9999px",
						border: "none",
						background: "#0f172a",
						color: "#ffffff",
						fontWeight: 600,
						fontSize: "1rem",
						cursor: "pointer",
					}}
				>
					Reload page
				</button>
			</body>
		</html>
	);
}
