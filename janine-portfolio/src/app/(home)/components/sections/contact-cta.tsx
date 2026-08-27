"use client";

import { useState } from "react";
import { setScrollPaused } from "@/lib/scroll";
import { ContactForm } from "@/src/app/contact/components/contactForm";
import Button from "@/src/components/ui/buttons/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerTitle,
	DrawerTrigger,
} from "@/src/components/ui/drawer/drawer";
import { hasResume, RESUME_URL } from "@/src/constants/site";
import {
	CONTACT_BODY,
	CONTACT_DRAWER_DESCRIPTION,
	CONTACT_DRAWER_TITLE,
	CONTACT_EYEBROW,
	CONTACT_HEADING,
} from "../../constants/contact";

const ContactCta = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Freeze smooth scrolling while the drawer is up, or the page
	// keeps scrolling behind the modal
	const handleOpenChange = (open: boolean) => {
		setIsOpen(open);
		setScrollPaused(open);
	};

	return (
		<section
			id="contact"
			className="relative flex min-h-screen w-full items-center justify-center px-6 py-16 md:px-16 lg:px-24"
		>
			<div className="surface-glass flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl px-6 py-14 text-center md:px-14 md:py-20">
				<span className="eyebrow">{CONTACT_EYEBROW}</span>

				<h2 className="text-h2 font-extrabold text-ink-strong max-w-2xl">
					{CONTACT_HEADING}
				</h2>

				<p className="text-lead text-ink-muted max-w-xl">{CONTACT_BODY}</p>

				<div className="flex flex-col sm:flex-row gap-4 mt-4">
					<Drawer
						direction="left"
						open={isOpen}
						onOpenChange={handleOpenChange}
					>
						<DrawerTrigger asChild>
							<Button size="lg" variant="solid">
								CONNECT
							</Button>
						</DrawerTrigger>

						<DrawerContent>
							<div className="max-w-xl mx-auto w-full flex flex-col gap-2">
								<DrawerTitle>{CONTACT_DRAWER_TITLE}</DrawerTitle>
								<DrawerDescription>
									{CONTACT_DRAWER_DESCRIPTION}
								</DrawerDescription>

								{/* The form mounts with the drawer, which makes its
								    anti-bot timing check more meaningful than it was
								    on a always-rendered page */}
								<ContactForm />
							</div>
						</DrawerContent>
					</Drawer>

					{hasResume && (
						<Button asChild size="lg" variant="outline">
							<a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
								ACCESS RESUME
							</a>
						</Button>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactCta;
