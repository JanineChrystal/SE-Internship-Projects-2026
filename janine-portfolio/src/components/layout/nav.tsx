import Link from "next/link";
import { WORDMARK } from "../../constants/nav";

// Minimal navbar - the wordmark only
// Section navigation lives in the side panel so the page stays clean
const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full flex items-center justify-center py-7 z-50 bg-transparent pointer-events-none">
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
