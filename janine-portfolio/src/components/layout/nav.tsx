import Link from "next/link";
import { WORDMARK } from "../../constants/nav";

// Minimal navbar - the wordmark only
// Absolutely placed at the top of the scrolling content, so it
// scrolls away with the page but adds no layout height - otherwise
// every min-h-screen section starts below it and overflows
// Section navigation lives in the side panel
const Navbar = () => {
	return (
		<nav className="absolute top-0 left-0 w-full flex items-center justify-center py-7 z-10 bg-transparent pointer-events-none">
			<Link
				href="/"
				aria-label="Back to home"
				className="pointer-events-auto text-3xl font-serif font-black tracking-wide text-ink-strong hover:opacity-70 transition-opacity"
			>
				{WORDMARK}
			</Link>
		</nav>
	);
};

export default Navbar;
