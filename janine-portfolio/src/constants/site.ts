// Resume link - paste the Google Drive share URL between the quotes
// The Drive file must be shared as "Anyone with the link", otherwise
// visitors hit a request-access wall. Prefer the /view preview URL
// over uc?export=download so the button previews rather than downloads.
// Leave empty and every resume button hides itself automatically.
export const RESUME_URL =
	"https://drive.google.com/file/d/1kzCF28JO1osnWPv0q40fstl6tLlIoTAY/view?usp=sharing";

// True once a resume link has been provided
export const hasResume = RESUME_URL.trim().length > 0;
