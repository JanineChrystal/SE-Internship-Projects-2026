"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RoleCycleProps {
	roles: string[];
	className?: string;
}

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

// Type cycle - types a role, holds, deletes, moves to the next
// The visible text is decorative; the full list is exposed once to
// assistive tech so the heading has a stable accessible name
const RoleCycle = ({ roles, className }: RoleCycleProps) => {
	const [typed, setTyped] = useState(roles[0] ?? "");
	const [isStatic, setIsStatic] = useState(true);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (roles.length === 0) {
			return;
		}

		// Reduced motion keeps the first role on screen, unmoving
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		setIsStatic(false);

		let roleIndex = 0;
		let charIndex = roles[0].length;
		let deleting = true;

		const step = () => {
			const current = roles[roleIndex];

			if (deleting) {
				charIndex -= 1;
				if (charIndex <= 0) {
					deleting = false;
					roleIndex = (roleIndex + 1) % roles.length;
				}
			} else {
				charIndex += 1;
				if (charIndex >= current.length) {
					deleting = true;
				}
			}

			const next = roles[roleIndex].slice(0, Math.max(charIndex, 0));
			setTyped(next);

			const atFullWord = !deleting && charIndex >= roles[roleIndex].length;
			timer.current = setTimeout(
				step,
				atFullWord ? HOLD_MS : deleting ? DELETE_MS : TYPE_MS,
			);
		};

		timer.current = setTimeout(step, HOLD_MS);

		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		};
	}, [roles]);

	return (
		<span className={cn("inline-flex items-baseline", className)}>
			<span className="sr-only">{roles.join(", ")}</span>

			<span aria-hidden="true" className="whitespace-pre">
				{typed}
			</span>

			{!isStatic && (
				<span
					aria-hidden="true"
					className="ml-1 inline-block w-[0.08em] self-stretch bg-accent-ink animate-pulse"
				/>
			)}
		</span>
	);
};

export default RoleCycle;
