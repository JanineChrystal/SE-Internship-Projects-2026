import SectionTitle from "@/src/components/ui/typography/section-title";
import ProjectBrowser from "./components/sections/project-browser";
import {
	BROWSER_DESCRIPTION,
	BROWSER_EYEBROW,
	BROWSER_TITLE,
} from "./constants/browser";
import PROJECTS from "./constants/projects";

// Projects index - the page stays a server component and hands the
// data to the browser, so the project records never ship as a second
// client payload beyond what the markup already contains
const ProjectsPage = () => {
	return (
		<section
			id="projects"
			className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:px-16 lg:px-24"
		>
			<SectionTitle
				as="h1"
				eyebrow={BROWSER_EYEBROW}
				title={BROWSER_TITLE}
				description={BROWSER_DESCRIPTION}
				align="left"
			/>

			<ProjectBrowser projects={PROJECTS} />
		</section>
	);
};

export default ProjectsPage;
