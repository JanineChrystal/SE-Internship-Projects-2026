// Fixed window rate limiter - in-memory, best effort only
// Serverless instances do not share this map, so it throttles
// casual abuse rather than acting as a hard security boundary

interface RateLimitWindow {
	count: number;
	expiresAt: number;
}

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const windows = new Map<string, RateLimitWindow>();

// Drops expired entries so the map does not grow without bound
function pruneExpiredWindows(now: number): void {
	for (const [key, window] of windows) {
		if (window.expiresAt <= now) {
			windows.delete(key);
		}
	}
}

// Returns false once a key exceeds the allowed submissions per window
export function isWithinRateLimit(key: string): boolean {
	const now = Date.now();
	pruneExpiredWindows(now);

	const existing = windows.get(key);

	if (!existing || existing.expiresAt <= now) {
		windows.set(key, { count: 1, expiresAt: now + WINDOW_MS });
		return true;
	}

	if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
		return false;
	}

	existing.count += 1;
	return true;
}
