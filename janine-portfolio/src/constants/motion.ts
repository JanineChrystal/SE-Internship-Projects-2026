// Shared motion values - the tuning levers that more than one section
// relies on, so a change lands everywhere at once
// Per-section one-offs stay inline where they are read

// Staggered line rise, used by the self-introduction and the project
// narrative
export const LINE_REVEAL = {
	y: 28,
	duration: 0.7,
	ease: "power3.out",
	stagger: 0.14,
	// Fires once the section is a quarter into view
	start: "top 75%",
} as const;
