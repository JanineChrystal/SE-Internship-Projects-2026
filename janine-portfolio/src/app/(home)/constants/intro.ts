// Intro reveal copy - one array entry per line
// Rendered uppercase, so keep lines short: the type scales with the
// viewport and anything past roughly eighteen characters shrinks
export const INTRO_LINES: string[] = [
	"Design it.",
	"Build it.",
	"Ship it.",
	"Meet Janine.",
];

export const INTRO_SKIP_LABEL = "Skip intro";

// Pixel magnet - grid spacing, dot size, and how far the pointer reaches
// Larger gap means fewer dots, which is the main cost lever here
export const PIXEL_MAGNET_GAP = 26;

export const PIXEL_MAGNET_SIZE = 2;

export const PIXEL_MAGNET_RADIUS = 170;

// Share of the distance to the pointer a dot travels at full strength
export const PIXEL_MAGNET_PULL = 0.32;
