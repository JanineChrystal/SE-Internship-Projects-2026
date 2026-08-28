// Projects browser copy - edited here rather than in the markup
export const BROWSER_EYEBROW = "Selected work";

export const BROWSER_TITLE = "Projects";

export const BROWSER_DESCRIPTION =
	"Systems and applications I have built and contributed to. Pick one to read the summary, then open the full project details.";

export const SEARCH_PLACEHOLDER = "Search projects, roles or technologies";

export const SEARCH_LABEL = "Search projects";

// Facet dropdown labels, paired with their "any" option
export const FILTER_LABELS = {
	tag: "Technology",
	role: "Role",
	year: "Year",
} as const;

export const ANY_OPTION = {
	tag: "All technologies",
	role: "All roles",
	year: "All years",
} as const;

export const CLEAR_FILTERS_LABEL = "Clear filters";

export const EMPTY_RESULTS_TITLE = "No projects match those filters";

export const EMPTY_RESULTS_BODY =
	"Try a different technology or clear the filters to see everything.";

export const VIEW_DETAILS_LABEL = "View full project details";

// Search and filters only earn their space once the list is long
// enough to be hard to scan - below this the rail is the whole story
export const FILTER_VISIBILITY_THRESHOLD = 5;

// Auto cycle - how long each project holds before the rail advances
// Cycling stops for good once the visitor picks a project themselves
export const AUTO_CYCLE_INTERVAL_MS = 5000;

// Cycling only applies where the rail is the visible presentation
export const AUTO_CYCLE_MIN_WIDTH_PX = 1024;
