import Link from "next/link";
import Button from "../../buttons/button";

const Contact = () => {
	return (
		<section
			id="contact-me"
			className="w-full max-w-7xl mx-auto px-8 py-32 mb-20 flex flex-col items-center justify-center text-center"
		>
			<h2 className="text-8xl md:text-9xl tracking-tight mb-12 select-none">
				Let's Work
				<br />
				Together!
			</h2>

			<p className="text-3xl md:text-3xl font-medium mb-12">
				Want to connect or collaborate?
			</p>

			<div>
				<Link href="/contact">
					<Button>CONTACT ME</Button>
				</Link>
			</div>
		</section>
	);
};

export default Contact;
