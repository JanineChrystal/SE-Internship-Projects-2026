import Card from "../../components/ui/cards/card";
import Contact_Details from "../../constants/home/contact";
import { ContactForm } from "./components/contactForm";

const ContactPage = () => {
	return (
		<section
			id="contact-me"
			className="w-full max-w-7xl mx-auto px-8 py-32 mb-20 flex flex-col justify-center"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full mb-16">
				<div>
					<h2 className="text-4xl md:text-6xl tracking-tight mb-6 select-none">
						Let's Work
						<br />
						Together!
					</h2>

					<p className="text-3xl md:text-3xl font-medium mb-12">
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
									<Card className="p-2 md:p-3 flex items-center gap-5 bg-white/50">
										{/* Left block */}
										<div className="w-16 h-12 rounded-xl flex items-center justify-center shrink-0">
											<IconComponent className="w-8 h-8 text-black" />
										</div>

										{/* Right block */}
										<div className="flex flex-col min-w-0">
											<h4 className="text-lg font-normal text-black m-0 leading-tight Normalcase select-none tracking-normal">
												<span className="font-black uppercase tracking-tight">
													{contact.actionText}
												</span>
											</h4>
											<p className="text-base font-bold text-black leading-tight mt-1 truncate">
												{contact.value}
											</p>
										</div>
									</Card>
								</a>
							);
						})}
					</div>
				</div>
				<div className="p-7 items-center">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
