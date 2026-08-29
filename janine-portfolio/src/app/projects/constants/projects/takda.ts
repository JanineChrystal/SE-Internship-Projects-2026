import type { Project } from "@/src/types/project";

export const takdaProject: Project = {
	slug: "takda-ph",
	title: "Takda PH: Team Project Management with Bilingual Moderation",
	liveUrl: "https://nextjs-internship-capstone-iota.vercel.app",
	repoUrl: "https://github.com/JanineChrystal/nextjs-internship-capstone",
	date: "June 2026 - August 2026",
	role: "Full Stack Developer",
	description: `A team project management tool built around Kanban boards, with the parts that usually get skipped actually
		built: bilingual comment moderation that catches Tagalog and Visayan as well as English, email notifications people can
		switch off per category, and an archive that lets you undo a delete. Named for the Filipino takda, an assigned task.`,
	imageSrc: "/projects/takda-1.png",
	altText: "Takda PH landing page with the product preview",
	tags: [
		"Next.js",
		"TypeScript",
		"PostgreSQL",
		"Drizzle ORM",
		"Clerk",
		"Full Stack",
	],
	overviewText: `Takda PH is a team project management tool built around Kanban boards, developed as my internship capstone at
		Stratpoint Technologies. A project opens on a board and switches to grid, calendar, charts or settings without leaving the
		page, every view reading the same store. It runs on Next.js 16 with Server Actions, Drizzle ORM over Neon Postgres and
		Clerk authentication, with every query and permission check resolved in a single data access layer.`,
	overviewImages: [
		{
			imageUrl: "/projects/takda-7.png",
			altText:
				"Kanban board with To Do, In Progress, Completed and Done columns",
		},
		{
			imageUrl: "/projects/takda-10.png",
			altText:
				"Project charts showing status, priority and board column breakdowns",
		},
	],
	features: [
		{
			title: "Kanban Board and Five Views",
			description:
				"A project opens on a Kanban board and switches to Grid, Calendar, Charts or Settings without leaving the page. Tasks drag between columns, and one column per project can be marked the completion column - completing a task moves it there, and un-completing sends it back where it came from rather than dumping it in the first column.",
			imageUrl: "/projects/takda-7.png",
			altText: "Kanban board with a task card in the completion column",
			extendedDescription: `The backend is six layers, each depending only on the one before: db, validations, types, dtos,
			dal, then actions. Authorisation is resolved where the row is read rather than by a route matcher, because a path
			matcher can diverge from how the framework actually routes a request - a URL nobody anticipated walks straight past a
			matcher, but it cannot walk past a permission check inside the query itself. An action that wanted to skip that check
			would have to write its own query, and there are none outside the data access layer.`,
		},
		{
			title: "Bilingual Comment Moderation",
			description:
				"Comments are checked against two detectors before they are stored, not after: an in-process English word list, and a Filipino and Visayan service backed by a local list. Anything flagged surfaces in a per-project queue with its reason and timestamp.",
			imageUrl: "/projects/takda-12.png",
			altText:
				"Comment moderation queue showing comments flagged as Filipino profanity",
			extendedDescription: `Each detail here was a bug first. The profanity service's check endpoint does not apply its
			leetspeak variants, so both endpoints are called in parallel and either one firing flags the comment. Substring
			matching once flagged an innocent username, so a match now has to begin a word - bounded on the left only, because
			Tagalog takes suffixes and the suffixed forms must still match. A local word list backs the service up, measured
			rather than assumed: common Filipino profanity is missing from its database entirely. Detection fails open, so if a
			detector throws, the comment posts and is queued for a recheck - a moderation outage should not stop a team talking
			to each other.`,
		},
		{
			title: "Project Analytics",
			description:
				"Status, priority and board-column breakdowns for every project, each chart backed by a table view showing the same data as text rather than colour alone.",
			imageUrl: "/projects/takda-10.png",
			altText:
				"Status donut, priority bar chart and bucket chart for a project",
			extendedDescription: ``,
		},
		{
			title: "Calendar and Deadlines",
			description:
				"Month, week and day views of task deadlines with an upcoming deadlines rail beside them, plus a global calendar spanning every project a member belongs to.",
			imageUrl: "/projects/takda-9.png",
			altText:
				"Project calendar in month view with an upcoming deadlines panel",
			extendedDescription: ``,
		},
		{
			title: "Notifications You Can Switch Off",
			description:
				"An in-app inbox alongside seven email categories: project and workspace invites, comment mentions, comment violations, task and project completions, and overdue projects. Each preference is resolved once in the data layer, so no sender can bypass it.",
			imageUrl: "/projects/takda-5.png",
			altText: "Notifications inbox with member added and invite sent entries",
			extendedDescription: ``,
		},
		{
			title: "Archive and Trash",
			description:
				"Deleting is reversible. Projects and tasks go to Archive, kept indefinitely, or Trash, purged after thirty days, and both can be restored. Deleting a project asks you to type its name first.",
			imageUrl: "/projects/takda-17.png",
			altText: "Archive page with Archive and Trash tabs and an empty state",
			extendedDescription: ``,
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
