import type { Project } from "@/src/types/project";

export const blogsiteProject: Project = {
	slug: "chrystl-blogs",
	title: "Chrystl.Blogs: Full-Stack Blogging Platform and Admin Console",
	liveUrl: "https://chrystl-blogs.vercel.app",
	repoUrl: "https://github.com/JanineChrystal/BlogSite",
	date: "June 2026 - August 2026",
	role: "Full Stack Developer",
	description: `A full-stack blogging platform built with Next.js, pairing a public reading site with a secure administrative
		dashboard. It handles a complete editorial workflow: a draft, published and scheduled post lifecycle, threaded reader
		discussions, and soft-delete across posts, comments and categories.`,
	imageSrc: "/projects/blogsite-1.png",
	altText: "Chrystl.Blogs home page hero with a featured post",
	tags: [
		"Next.js",
		"TypeScript",
		"Drizzle ORM",
		"Tailwind CSS",
		"PostgreSQL",
		"Full Stack",
	],
	overviewText: `Chrystl.Blogs is a full-stack blogging platform I built during my internship at Stratpoint Technologies and
		later took through to a complete full-stack build. A public site handles browsing, reading and threaded discussion, while a
		gated admin console manages posts. It runs on the Next.js App Router with Server Actions, Drizzle ORM over
		Postgres, and Zod validation, and nothing is ever hard-deleted.`,
	overviewImages: [
		{
			imageUrl: "/projects/blogsite-2.png",
			altText: "Home page showing the What's New grid and category rows",
		},
		{
			imageUrl: "/projects/blogsite-3.png",
			altText: "Individual post page with byline, read time and breadcrumbs",
		},
	],
	narrative: [
		"I built this during my internship at Stratpoint Technologies, starting on the public site and taking it through to a complete full-stack application.",
		"I designed the schema in Drizzle ORM, wrote the Server Actions behind every mutation, and kept read-side data access separate from write-side actions so the query layer stays independent of the mutation layer.",
		"Validation is deliberately asymmetric: a draft needs only a title, while publishing runs the full Zod schema. Saving an unfinished thought should not be punished, so the two are separate server paths rather than one form with a flag.",
	],
	features: [
		{
			title: "Post Management",
			description:
				"A searchable, sortable console listing every post by title, category, publish date and status, with inline edit and soft-delete actions and paged loading.",
			imageUrl: "/projects/blogsite-4.png",
			altText: "Admin post management table with status badges",
		},
		{
			title: "Draft, Publish and Schedule",
			description:
				"A composer covering the full post lifecycle. A draft can be saved with nothing but a title, while publishing enforces a complete post, and scheduling defers it to a future date.",
			imageUrl: "/projects/blogsite-6.png",
			altText: "Compose post modal with draft and publish actions",
		},
		{
			title: "Rich Post Editing",
			description:
				"Editing covers the title, URL slug, category, featured image upload with live preview, comma-separated tags and an optional primary affiliate link.",
			imageUrl: "/projects/blogsite-5.png",
			altText: "Edit post modal with featured image preview and slug field",
		},
		{
			title: "Threaded Comments",
			description:
				"Readers join the discussion under a display name and reply to one another in nested threads, with comment counts on each post and paged loading for longer conversations.",
			imageUrl: "/projects/blogsite-7.png",
			altText: "Public discussion thread with a nested reply",
		},
		{
			title: "Reader Reactions",
			description:
				"Beyond comments, each post carries a lightweight reaction bar - Deep, Hot Take, Grounded and Cool - giving readers a one-tap response with running counts.",
			imageUrl: "/projects/blogsite-8.png",
			altText: "Reaction bar with Deep, Hot Take, Grounded and Cool counts",
		},
	],
	technologies: [
		{
			id: 1,
			imageUrl: "/techStack/Typescript.webp",
			altText: "TypeScript logo",
		},
		{
			id: 2,
			imageUrl: "/techStack/React.webp",
			altText: "React logo",
		},
		{
			id: 3,
			imageUrl: "/techStack/Zod.webp",
			altText: "Zod logo",
		},
		{
			id: 4,
			imageUrl: "/techStack/shadcn.png",
			altText: "shadcn/ui logo",
		},
		{
			id: 5,
			imageUrl: "/techStack/Git.png",
			altText: "Git logo",
		},
		{
			id: 6,
			imageUrl: "/techStack/Github.webp",
			altText: "Github logo",
		},
	],
};
