"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useStage } from "@/src/app/(home)/contexts/stageContext";

declare global {
	interface Window {
		gsap?: typeof gsap;
		ScrollTrigger?: typeof ScrollTrigger;
	}
}

gsap.registerPlugin(ScrollTrigger);

const Stage = ({ children }: { children: React.ReactNode }) => {
	const { refs } = useStage();
	const pinRef = useRef<HTMLDivElement>(null);
	const portraitWrapperRef = useRef<HTMLDivElement>(null);
	const portraitInnerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let onRefreshInit: (() => void) | undefined;

		const ctx = gsap.context(() => {
			if (typeof window !== "undefined") {
				window.gsap = gsap;
				window.ScrollTrigger = ScrollTrigger;
			}

			const r = refs.current;
			const pinEl = pinRef.current;
			const {
				heroLeft,
				heroRight,
				heroPortraitSlot,
				aboutPortraitSlot,
				aboutCard,
			} = r;
			const portraitWrapper = portraitWrapperRef.current;
			const portraitInner = portraitInnerRef.current;

			const missing = Object.entries({
				pinEl,
				heroLeft,
				heroRight,
				heroPortraitSlot,
				aboutPortraitSlot,
				aboutCard,
				portraitWrapper,
				portraitInner,
			})
				.filter(([, v]) => !v)
				.map(([k]) => k);

			if (missing.length) {
				console.warn("[Stage] Missing refs:", missing);
				return;
			}

			if (
				!pinEl ||
				!heroLeft ||
				!heroRight ||
				!heroPortraitSlot ||
				!aboutPortraitSlot ||
				!aboutCard ||
				!portraitWrapper ||
				!portraitInner
			) {
				return;
			}

			// Freshly-bound const references — guarantees TS narrowing persists
			// into every closure below (tl.to() configs, onRefreshInit, etc.)
			const pinElSafe = pinEl;
			const heroPortraitSlotSafe = heroPortraitSlot;

			const pinBox = pinElSafe.getBoundingClientRect();
			let heroRect = heroPortraitSlotSafe.getBoundingClientRect();

			gsap.set(portraitWrapper, {
				position: "absolute",
				top: heroRect.top - pinBox.top,
				left: heroRect.left - pinBox.left,
				width: heroRect.width,
				height: heroRect.height,
			});
			gsap.set(portraitInner, {
				scale: 1.25,
				transformOrigin: "center center",
			});
			gsap.set(aboutCard, { opacity: 0, y: 60 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: pinElSafe,
					start: "top top",
					end: "+=2000",
					scrub: 0.5,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
					// markers: true,
					id: "stageTrigger",
					onUpdate: (self) => {
						const aboutSection = document.getElementById("about");
						if (aboutSection) {
							aboutSection.style.pointerEvents =
								self.progress >= 0.5 ? "auto" : "none";
						}

						const heroSection = document.getElementById("hero");
						if (heroSection) {
							heroSection.style.pointerEvents =
								self.progress >= 0.5 ? "none" : "auto";
						}
					},
				},
			});

			tl.to(
				heroLeft,
				{ xPercent: -120, opacity: 0, ease: "power2.inOut", duration: 0.4 },
				0,
			)
				.to(
					heroRight,
					{ xPercent: 120, opacity: 0, ease: "power2.inOut", duration: 0.4 },
					0,
				)
				.to(
					portraitWrapper,
					{
						top: () =>
							aboutPortraitSlot.getBoundingClientRect().top -
							pinElSafe.getBoundingClientRect().top,
						left: () =>
							aboutPortraitSlot.getBoundingClientRect().left -
							pinElSafe.getBoundingClientRect().left,
						width: () => aboutPortraitSlot.getBoundingClientRect().width,
						height: () => aboutPortraitSlot.getBoundingClientRect().height,
						ease: "power2.inOut",
						duration: 0.5,
					},
					0.1,
				)
				.to(
					portraitInner,
					{ scale: 1, ease: "power2.inOut", duration: 0.5 },
					0.1,
				)
				.to(
					aboutCard,
					{ opacity: 1, y: 0, ease: "power2.out", duration: 0.4 },
					0.2,
				)
				.to({}, { duration: 0.2 });

			onRefreshInit = () => {
				heroRect = heroPortraitSlotSafe.getBoundingClientRect();
			};
			ScrollTrigger.addEventListener("refreshInit", onRefreshInit);
		}, pinRef);

		requestAnimationFrame(() => {
			ScrollTrigger.refresh();
		});

		const onWindowLoad = () => ScrollTrigger.refresh();
		if (document.readyState === "complete") {
			ScrollTrigger.refresh();
		} else {
			window.addEventListener("load", onWindowLoad);
		}

		return () => {
			window.removeEventListener("load", onWindowLoad);
			if (onRefreshInit) {
				ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
			}
			ctx.revert();
		};
	}, [refs]);

	return (
		<div
			ref={pinRef}
			className="relative w-full h-screen overflow-hidden bg-background z-40"
		>
			{children}
			<div ref={portraitWrapperRef} className="pointer-events-none z-40">
				<div ref={portraitInnerRef} className="relative w-full h-full">
					<Image
						src="/profile.webp"
						alt="Janine Chrystal Portrait"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-contain object-top drop-shadow-2xl portrait-silhouette-glow"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Stage;
