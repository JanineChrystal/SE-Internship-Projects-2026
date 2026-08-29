"use client";

import { useEffect } from "react";

// Escape to dismiss - shared by the side panel and the certificate
// viewer, which both need the same listener and the same teardown
// The listener is only bound while active, so a closed overlay is not
// paying for a keydown handler
export function useEscapeKey(active: boolean, onEscape: () => void): void {
	useEffect(() => {
		if (!active) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onEscape();
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active, onEscape]);
}
