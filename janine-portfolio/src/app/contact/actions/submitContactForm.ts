"use server";

import { z } from "zod";
import {
	type ContactFormState,
	contactFormSchema,
} from "../schema/contactFormSchema";

export async function submitContactForm(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	// Extraction of data from the form
	const rawData = {
		contactMethod: formData.get("contactMethod"),
		email: formData.get("email"),
		subject: formData.get("subject"),
		body: formData.get("body"),
	};

	// Validate using the zod Schema
	const validatedFields = contactFormSchema.safeParse(rawData);

	// Error message for unsuccessful validation
	if (!validatedFields.success) {
		return {
			success: false,
			errors: z.flattenError(validatedFields.error).fieldErrors,
			message: "Please fix the errors in the form.",
		};
	}

	// Trigger Resend / Twilio
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Success Message
	return {
		success: true,
		message: "Message sent successfully! I'll get back to you soon.",
	};
}
