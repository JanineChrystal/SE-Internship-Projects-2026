import {
	CircleUser,
	CodeXml,
	type LucideIcon,
	Mail,
	Phone,
} from "lucide-react";

export interface contactDetails {
	id: string;
	icon: LucideIcon;
	actionText: string;
	value: string;
	href?: string;
}

const Contact_Details: contactDetails[] = [
	{
		id: "email",
		icon: Mail,
		actionText: "Email me",
		value: "chrystalampusta@gmail.com",
		href: "mailto: chrystalampusta@gmail.com",
	},
	{
		id: "linkedin",
		icon: CircleUser,
		actionText: "Connect with me",
		value: "Linkedin: Janine Chrystal Ampusta",
		href: "https://www.linkedin.com/in/janine-chrystal-ampusta-89814b227/",
	},
	{
		id: "github",
		icon: CodeXml,
		actionText: "Let's Collab!",
		value: "Github: JanineChrystal",
		href: "https://github.com/JanineChrystal",
	},
	{
		id: "phone",
		icon: Phone,
		actionText: "Contact Me",
		value: "+63 960 249 7726",
	},
];

export default Contact_Details;
