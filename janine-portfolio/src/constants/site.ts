// Canonical origin - every absolute URL in metadata derives from this
// Vercel exposes the deployment host, so preview builds advertise
// themselves rather than claiming to be production
const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

export const SITE_URL = VERCEL_URL
	? `https://${VERCEL_URL}`
	: "https://devchrystl.vercel.app";

export const SITE_NAME = "Chrystl.";

// Generated share card at src/app/opengraph-image.tsx
// Routes that declare their own openGraph block replace the root one
// wholesale, so they have to point back at this explicitly
export const OG_IMAGE = "/opengraph-image";

export const SITE_AUTHOR = "Janine Chrystal Ampusta";

export const SITE_TITLE = "Janine Chrystal | Software Engineer";

export const SITE_DESCRIPTION =
	"Software engineer building web and frontend products with Next.js, React and TypeScript. Portfolio of shipped projects, stack and experience.";

// Search keywords - kept short, since bloated lists are discounted
export const SITE_KEYWORDS = [
	"Janine Chrystal Ampusta",
	"software engineer",
	"frontend developer",
	"Next.js",
	"React",
	"TypeScript",
	"portfolio",
];

// Resume link - paste the Google Drive share URL between the quotes
// The Drive file must be shared as "Anyone with the link", otherwise
// visitors hit a request-access wall. Prefer the /view preview URL
// over uc?export=download so the button previews rather than downloads.
// Leave empty and every resume button hides itself automatically.
export const RESUME_URL =
	"https://drive.google.com/file/d/1kzCF28JO1osnWPv0q40fstl6tLlIoTAY/view?usp=sharing";

// True once a resume link has been provided
export const hasResume = RESUME_URL.trim().length > 0;
