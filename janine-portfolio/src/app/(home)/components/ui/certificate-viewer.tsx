"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import type { SlideData } from "@/src/constants/activities";
import { CERTIFICATE_CLOSE_LABEL } from "../../constants/activities";

interface CertificateViewerProps {
	slide: SlideData;
	onClose: () => void;
}

// Certificate viewer - full screen look at one certificate
// Portalled to the body because ScrollSmoother transforms the scrolling
// content, and a transformed ancestor becomes the containing block for
// fixed children: rendered in place this would anchor to the section
// rather than the viewport
const CertificateViewer = ({ slide, onClose }: CertificateViewerProps) => {
	return createPortal(
		<div
			role="dialog"
			aria-modal="true"
			aria-label={slide.title}
			className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 overflow-hidden bg-el-deep/95 p-6 md:p-10"
		>
			{/* Backdrop dismiss, same as Escape */}
			<button
				type="button"
				onClick={onClose}
				className="absolute inset-0 cursor-zoom-out"
			>
				<span className="sr-only">{CERTIFICATE_CLOSE_LABEL}</span>
			</button>

			<div className="relative z-10 h-[62vh] w-full max-w-5xl md:h-[68vh]">
				<Image
					src={slide.imageSrc}
					alt={slide.altText}
					fill
					sizes="100vw"
					className="object-contain"
				/>
			</div>

			{/* The scrim is dark in both themes, so this text is deliberately
			    fixed rather than theme-aware */}
			<div className="relative z-10 max-w-2xl shrink-0 text-center">
				<p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-white/60">
					{slide.date}
				</p>
				<p className="mt-2 font-display text-base font-bold leading-snug text-white md:text-lg">
					{slide.title}
				</p>
			</div>

			<button
				type="button"
				onClick={onClose}
				className="surface-glass absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white"
			>
				<X size={20} aria-hidden="true" />
				<span className="sr-only">{CERTIFICATE_CLOSE_LABEL}</span>
			</button>
		</div>,
		document.body,
	);
};

export default CertificateViewer;
