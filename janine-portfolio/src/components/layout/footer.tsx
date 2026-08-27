import type React from "react";
import {
	BUILT_WITH,
	FOOTER_TAGLINE,
	SOCIAL_LINKS,
} from "../../constants/footer";
import { WORDMARK } from "../../constants/nav";

const Footer = (): React.ReactElement => {
	// Current year, so the notice never goes stale
	const currentYear = new Date().getFullYear();

	return (
		<footer
			id="site-footer"
			className="relative z-10 mt-auto w-full border-t border-border px-6 py-16 md:px-16 lg:px-24"
		>
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
				{/* Identity and socials */}
				<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
					<div className="flex flex-col gap-2">
						<span className="font-serif text-2xl font-black tracking-wide text-ink-strong">
							{WORDMARK}
						</span>
						<p className="max-w-xs text-sm text-ink-muted">{FOOTER_TAGLINE}</p>
					</div>

					<nav aria-label="Social links" className="flex items-center gap-3">
						{SOCIAL_LINKS.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target={social.href.startsWith("http") ? "_blank" : undefined}
								rel={
									social.href.startsWith("http")
										? "noopener noreferrer"
										: undefined
								}
								className="surface-glass flex h-11 w-11 items-center justify-center rounded-full text-ink-strong transition-transform hover:-translate-y-0.5"
							>
								<svg
									className="h-5 w-5"
									viewBox="0 0 24 24"
									fill={social.filled ? "currentColor" : "none"}
									stroke={social.filled ? undefined : "currentColor"}
									strokeWidth={social.filled ? undefined : 2}
									strokeLinecap={social.filled ? undefined : "round"}
									strokeLinejoin={social.filled ? undefined : "round"}
									aria-hidden="true"
								>
									<path d={social.path} />
								</svg>
								<span className="sr-only">{social.label}</span>
							</a>
						))}
					</nav>
				</div>

				{/* What this site is built with */}
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
					{BUILT_WITH.map((group) => (
						<div key={group.heading} className="flex flex-col gap-3">
							<h2 className="eyebrow">{group.heading}</h2>
							<ul className="flex flex-col gap-1.5">
								{group.items.map((item) => (
									<li key={item} className="text-sm text-ink-muted">
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-2 border-t border-border pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
					<p>
						© {currentYear}{" "}
						<span className="font-bold text-ink-strong">{WORDMARK}</span> All
						rights reserved.
					</p>
					<p>Designed and built by Janine Chrystal Ampusta.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
