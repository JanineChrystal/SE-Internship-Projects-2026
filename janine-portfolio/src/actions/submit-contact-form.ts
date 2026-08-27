"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { isWithinRateLimit } from "@/lib/rate-limit";
import { escapeHtml, escapeHtmlWithLineBreaks } from "@/lib/sanitize";
import {
	type ContactFormState,
	contactFormSchema,
} from "../schemas/contactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

// Resolves the caller address from proxy headers set by the host
async function getClientKey(): Promise<string> {
	const headerList = await headers();
	const forwardedFor = headerList.get("x-forwarded-for");

	if (forwardedFor) {
		return forwardedFor.split(",")[0].trim();
	}

	return headerList.get("x-real-ip") ?? "unknown";
}

export async function submitContactForm(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	// Anti-spam checks
	const honeypot = formData.get("company");
	const formLoadTime = Number(formData.get("formLoadTime"));
	const submitDuration = formLoadTime ? Date.now() - formLoadTime : 0;

	const isLikelyBot =
		!!honeypot || // honeypot filled -> definitely a bot
		!formLoadTime; // missing timing field entirely -> bot skipped the JS

	// Suspiciously fast, but not impossible (paste/autofill) - treat as
	// a weaker signal, not an automatic reject on its own.
	const isSuspiciouslyFast = submitDuration > 0 && submitDuration < 2000;

	if (isLikelyBot) {
		// Pretend success so the bot doesn't learn to route around this check.
		return {
			success: true,
			message: "Message sent successfully! I will get back to you soon.",
		};
	}

	// Rate limit - caps submissions per address before any work is done
	const clientKey = await getClientKey();

	if (!isWithinRateLimit(clientKey)) {
		return {
			success: false,
			message: "Too many messages sent. Please try again later.",
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

	const validatedFields = contactFormSchema.safeParse(rawData);

	if (!validatedFields.success) {
		return {
			success: false,
			errors: z.flattenError(validatedFields.error).fieldErrors,
			message: "Please fix the errors in the form.",
		};
	}

	const { contactMethod, email, phone, subject, body } = validatedFields.data;

	// Escaped copies - safe to interpolate into the HTML email
	const safeEmail = escapeHtml(email ?? "");
	const safePhone = escapeHtml(phone ?? "");
	const safeBody = escapeHtmlWithLineBreaks(body);

	try {
		const { error } = await resend.emails.send({
			from: "Portfolio Form <onboarding@resend.dev>",
			to: ["chrystalampusta@gmail.com"],
			replyTo: contactMethod === "email" && email ? email : undefined,
			subject: `New Contact from Portfolio: ${subject}${isSuspiciouslyFast ? " [flagged: fast submission]" : ""}`,
			html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h3 style="color: #333;">New message from your portfolio site!</h3>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0;"><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
                        ${safeEmail ? `<p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${safeEmail}</p>` : ""}
                        ${safePhone ? `<p style="margin: 0;"><strong>Phone:</strong> ${safePhone}</p>` : ""}
                    </div>
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #666;"><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap; color: #111;">${safeBody}</p>
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

		if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
			const botToken = process.env.TELEGRAM_BOT_TOKEN;

			// Plain text - no parse_mode, so user content needs no escaping
			await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					chat_id: process.env.TELEGRAM_CHAT_ID,
					text: `New Portfolio Message\n\nMethod: ${contactMethod}\nEmail: ${email || "N/A"}\nPhone: ${phone || "N/A"}\nSubject: ${subject}\n\nMessage:\n${body}`,
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
