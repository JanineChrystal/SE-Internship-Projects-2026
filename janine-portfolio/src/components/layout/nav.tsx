import Link from "next/link";
import { WORDMARK } from "../../constants/nav";

// Minimal navbar - the wordmark only
// Sits in the scrolling flow rather than fixed, so it stays at the
// top of the page instead of following the reader down it
// Section navigation lives in the side panel
const Navbar = () => {
	return (
		<nav className="relative w-full flex items-center justify-center py-7 z-10 bg-transparent">
			<Link
				href="/"
				aria-label="Back to home"
				className="text-3xl font-serif font-black tracking-wide text-ink-strong hover:opacity-70 transition-opacity"
			>
				{WORDMARK}
			</Link>
		</nav>
	);
};

export default Navbar;
