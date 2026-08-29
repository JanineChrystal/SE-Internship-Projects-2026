import { ImageResponse } from "next/og";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_NAME } from "../constants/site";

export const alt = `${SITE_AUTHOR} - Software Engineer`;

// 1200x630 - the ratio every social card crops to
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

// Share card - rendered once at build time
// Colours are literal here on purpose: this renders through Satori,
// not a browser, so CSS variables and the design tokens do not resolve
export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: "linear-gradient(135deg, #141e30 0%, #35577d 100%)",
				padding: "80px",
			}}
		>
			<div style={{ display: "flex", color: "#ffffff", fontSize: 44 }}>
				{SITE_NAME}
			</div>

			<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
				<div
					style={{
						display: "flex",
						color: "#ffffff",
						fontSize: 84,
						lineHeight: 1.05,
					}}
				>
					{SITE_AUTHOR}
				</div>
				<div
					style={{
						display: "flex",
						color: "#c7d6ea",
						fontSize: 34,
						lineHeight: 1.35,
						maxWidth: "900px",
					}}
				>
					{SITE_DESCRIPTION}
				</div>
			</div>
		</div>,
		size,
	);
}
