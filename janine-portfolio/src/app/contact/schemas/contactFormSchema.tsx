import { z } from "zod";

export const contactFormSchema = z
	.object({
		contactMethod: z.enum(["email", "phone"], {
			message: "Please select a contact method.",
		}),

		email: z.string().optional(),
		phone: z.string().optional(),

		subject: z
			.string()
			.trim()
			.min(2, "Subject must be at least 2 characters.")
			.max(120, "Subject must be at most 120 characters."),

		body: z
			.string()
			.trim()
			.min(10, "Message body must be at least 10 characters.")
			.max(2000, "Message body must be at most 2000 characters."),
	})
	.superRefine((data, ctx) => {
		// Custom logic to require email if "email" is selected
		if (data.contactMethod === "email" && !data.email?.includes("@")) {
			ctx.addIssue({
				code: "custom",
				message: "Please enter a valid email address.",
				path: ["email"],
			});
		}
		// Custom logic to require phone if "phone" is selected
		if (
			data.contactMethod === "phone" &&
			(!data.phone || data.phone.trim().length < 10)
		) {
			ctx.addIssue({
				code: "custom",
				message: "Please enter a valid contact number.",
				path: ["phone"],
			});
		}
	});

export type ContactFormState = {
	success: boolean;
	message?: string;
	errors?: {
		contactMethod?: string[];
		email?: string[];
		phone?: string[];
		subject?: string[];
		body?: string[];
	};
};
