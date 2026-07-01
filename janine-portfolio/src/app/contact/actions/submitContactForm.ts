"use server";

import { Resend } from "resend";
import { z } from "zod";
import {
	type ContactFormState,
	contactFormSchema,
} from "../schemas/contactFormSchema";

// Initialize the Resend client using your local environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
	// The underscore tells TypeScript we are intentionally ignoring React's previous state
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {

	// Honeypot check — must run first, before any real processing.
	// "company" is a hidden field that only bots (which fill in every
	// field they find in the DOM) will ever populate. Real users never
	// see it, so if it has a value, this submission is spam.
	const honeypot = formData.get("company");
	if (honeypot) {
		// Pretend success so the bot doesn't learn to route around this check.
		return {
			success: true,
			message: "Message sent successfully! I will get back to you soon.",
		};
	}

	// Extract raw string data from the incoming form submission
	const rawData = {
		contactMethod: formData.get("contactMethod"),
		email: formData.get("email") || "",
		phone: formData.get("phone") || "",
		subject: formData.get("subject") || "",
		body: formData.get("body") || "",
	};

	// Pass the raw data through your strict Zod schema
	const validatedFields = contactFormSchema.safeParse(rawData);

	// Stop execution and return formatting errors to the UI if validation fails
	if (!validatedFields.success) {
		return {
			success: false,
			errors: z.flattenError(validatedFields.error).fieldErrors,
			message: "Please fix the errors in the form.",
		};
	}

	// Destructure the clean, verified data for the email template
	const { contactMethod, email, phone, subject, body } = validatedFields.data;

	try {
		// Send the Email via Resend
		const { error } = await resend.emails.send({
			from: "Portfolio Form <onboarding@resend.dev>",
			to: ["chrystalampusta@gmail.com"],
			replyTo: contactMethod === "email" && email ? email : undefined,
			subject: `New Contact from Portfolio: ${subject}`,
			html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h3 style="color: #333;">New message from your portfolio site!</h3>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0;"><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
                        ${email ? `<p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>` : ""}
                        ${phone ? `<p style="margin: 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
                    </div>
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #666;"><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap; color: #111;">${body}</p>
                </div>
            `,
		});

		if (error) {
			console.error("Resend API Error:", error);
			return {
				success: false,
				message: "Failed to send the message. Please try again later.",
			};
		}

		// Send an instant notification straight to phone via Telegram
		if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
			const botToken = process.env.TELEGRAM_BOT_TOKEN;

			// Telegram's endpoint to fire off a text message
			await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					chat_id: process.env.TELEGRAM_CHAT_ID,
					// Using standard Markdown formatting for the notification view
					parse_mode: "Markdown",
					text: `*🚨 New Portfolio Message!*\n\n*Method:* ${contactMethod === "phone" ? "📱 Phone" : "✉️ Email"}\n*Email:* ${email || "N/A"}\n*Phone:* ${phone || "N/A"}\n*Subject:* ${subject}\n\n*Message:* \n${body}`,
				}),
			});
		}

		return {
			success: true,
			message: "Message sent successfully! I will get back to you soon.",
		};
	} catch (error) {
		console.error("Server Error:", error);
		return {
			success: false,
			message: "An unexpected error occurred.",
		};
	}
}
