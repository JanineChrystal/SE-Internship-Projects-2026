import Card from "../../components/ui/cards/card";
import Contact_Details from "../../constants/home/contact";
import { ContactForm } from "./components/contactForm";

const ContactPage = () => {
	return (
		<section
			id="contact-me"
			className="w-full min-h-screen max-w-7xl mx-auto px-6 md:px-8 py-15 mt-15 flex flex-col justify-center"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 w-full items-center">
				{/* Left Column: Content */}
				<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
					<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 select-none leading-tight">
						Let's Work
						<br />
						Together!
					</h2>

					<p className="text-xl md:text-2xl font-medium mb-10 text-foreground/80">
						Feel free to approach me
					</p>

					<div className="flex flex-col gap-4 w-full max-w-sm">
						{Contact_Details.map((contact) => {
							const IconComponent = contact.icon;
							return (
								<a
									key={contact.id}
									href={contact.href}
									target={
										contact.id !== "email" && contact.id !== "phone"
											? "_blank"
											: undefined
									}
									rel="noreferrer"
									className="transition-transform duration-200 hover:scale-[1.02] block"
								>
									<Card className="p-3 md:p-4 flex items-center gap-4 bg-background/50 border-border/50">
										<div className="w-14 h-12 rounded-xl flex items-center justify-center shrink-0">
											<IconComponent className="w-7 h-7 text-foreground" />
										</div>
										<div className="flex flex-col min-w-0">
											<h4 className="text-sm font-black uppercase tracking-tight">
												{contact.actionText}
											</h4>
											<p className="text-base font-bold text-foreground truncate">
												{contact.value}
											</p>
										</div>
									</Card>
								</a>
							);
						})}
					</div>
				</div>

				{/* Right Column: Form*/}
				<div className="flex justify-center lg:justify-end w-full">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
