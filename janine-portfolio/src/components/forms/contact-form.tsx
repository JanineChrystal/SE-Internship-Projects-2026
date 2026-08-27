"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Button from "../../../components/ui/buttons/button";
import { Input } from "../../../components/ui/forms/input";
import { Label } from "../../../components/ui/forms/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../components/ui/forms/radio-group";
import { Textarea } from "../../../components/ui/forms/textarea";
import { submitContactForm } from "../actions/submitContactForm";

const initialState = {
	success: false,
	message: "",
	errors: {},
};

// Submit Button
function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			variant="solid"
			disabled={pending}
			className="w-full md:w-auto"
		>
			{pending ? "SENDING..." : "SEND"}
		</Button>
	);
}

export function ContactForm() {
	// Hooks that wires Server Action directly to the form
	const [state, formAction] = useActionState(submitContactForm, initialState);
	const [contactMethod, setContactMethod] = useState<"email" | "phone">(
		"email",
	);

	// Captured once when the form mounts — used as an anti-bot timing check.
	// Real users take at least a couple seconds to read the form and type
	// a message; bots that auto-submit immediately will trip this.
	const [formLoadTime] = useState(() => Date.now());

	return (
		<div className="relative bg-background/80 backdrop-blur-sm p-6 md:p-8 mb-10 rounded-3xl shadow-xl border-background/5 w-full max-w-xl mx-auto">
			<div className="text-center mb-8">
				<h3 className="text-2xl font-bold uppercase tracking-wide">
					Contact Form
				</h3>
			</div>

			<form action={formAction} className="space-y-6">
				{/*
					Honeypot field — invisible to real users, but a bot that
					auto-fills every field in the DOM will populate it.
					- Positioned off-screen instead of `display:none`/`hidden`,
					  because unlike those two, off-screen positioning is not
					  a well-known anti-spam signature bots specifically skip.
					- tabIndex={-1} keeps sighted keyboard users from tabbing into it.
					- aria-hidden hides it from screen readers.
					- autoComplete="off" stops browsers auto-filling it for real users.
				*/}
				<div
					className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
					aria-hidden="true"
				>
					<Label htmlFor="company">Company</Label>
					<Input
						id="company"
						name="company"
						type="text"
						tabIndex={-1}
						autoComplete="off"
					/>
				</div>

				{/*
					Timing check field — hidden, holds the timestamp the form
					was rendered. Server compares this against submit time to
					catch bots that submit instantly without reading the form.
				*/}
				<input type="hidden" name="formLoadTime" value={formLoadTime} />

				{/* Radio Group Selection */}
				<div className="flex justify-center mb-6">
					<RadioGroup
						value={contactMethod} // Binds the visual state
						onValueChange={(val: "email" | "phone") => setContactMethod(val)} // Updates state on click
						name="contactMethod"
						className="flex gap-4 md:gap-8"
					>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="email"
								id="method-email"
								className="border-background text-foreground"
							/>
							<Label
								htmlFor="method-email"
								className="font-semibold text-sm md:text-base cursor-pointer"
							>
								Email
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="phone"
								id="method-phone"
								className="border-background text-foreground"
							/>
							<Label
								htmlFor="method-phone"
								className="font-semibold text-sm md:text-base cursor-pointer"
							>
								Contact Number
							</Label>
						</div>
					</RadioGroup>
				</div>
				{state.errors?.contactMethod && (
					<p className="text-red-500 text-sm text-center -mt-4">
						{state.errors.contactMethod[0]}
					</p>
				)}

				{/* Conditional Rendering block for the inputs */}
				{contactMethod === "email" ? (
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							name="email"
							placeholder="example@gmail.com"
							className={`bg-background ${state.errors?.email ? "border-red-500 border-2" : "border-background/20"}`}
						/>
						{state.errors?.email && (
							<p className="text-red-500 text-sm">{state.errors.email[0]}</p>
						)}
					</div>
				) : (
					<div className="space-y-2">
						<Label htmlFor="phone">Contact Number</Label>
						<Input
							id="phone"
							name="phone"
							placeholder="+63 912 345 6789"
							className={`bg-background ${state.errors?.phone ? "border-red-500 border-2" : "border-background/20"}`}
						/>
						{state.errors?.phone && (
							<p className="text-red-500 text-sm">{state.errors.phone[0]}</p>
						)}
					</div>
				)}

				{/* Subject Field */}
				<div className="space-y-2">
					<Label htmlFor="subject">Subject</Label>
					<Input
						id="subject"
						name="subject"
						placeholder="Company - Job Offer"
						className={`bg-background ${state.errors?.subject ? "border-red-500 border-2" : "border-background/20"}`}
					/>
					{state.errors?.subject && (
						<p className="text-red-500 text-sm">{state.errors.subject[0]}</p>
					)}
				</div>

				{/* Body Textarea */}
				<div className="space-y-2">
					<Label htmlFor="body">Body</Label>
					<Textarea
						id="body"
						name="body"
						placeholder="Hello,"
						rows={6}
						className={`bg-background resize-none ${state.errors?.body ? "border-red-500 border-2" : "border-background/20"}`}
					/>
					{state.errors?.body && (
						<p className="text-red-500 text-sm">{state.errors.body[0]}</p>
					)}
				</div>

				{/* Global Status Message Output */}
				{state.message && (
					<div
						className={`p-4 rounded-xl text-sm font-medium ${state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
					>
						{state.message}
					</div>
				)}

				{/* Submit Action Wrapper */}
				<div className="flex justify-center md:justify-end pt-4">
					<SubmitButton />
				</div>
			</form>
		</div>
	);
}
