// HTML entity map - characters that would otherwise break out of markup
const HTML_ENTITIES: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

const UNSAFE_HTML_PATTERN = /[&<>"']/g;

// Escapes user text before it is interpolated into an HTML email body
export function escapeHtml(value: string): string {
	return value.replace(UNSAFE_HTML_PATTERN, (char) => HTML_ENTITIES[char]);
}

// Converts newlines to <br /> after the text has already been escaped
export function escapeHtmlWithLineBreaks(value: string): string {
	return escapeHtml(value).replace(/\r?\n/g, "<br />");
}
