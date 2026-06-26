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
		<Button type="submit" disabled={pending} className="w-full md:w-auto px-8">
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

	return (
		<div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-black/5 w-full max-w-xl">
			<div className="text-center mb-8">
				<h3 className="text-2xl font-bold uppercase tracking-wide">
					Contact Form
				</h3>
			</div>

			<form action={formAction} className="space-y-6">
				{/* Radio Group Selection */}
				<div className="flex justify-center mb-6">
					<RadioGroup
						value={contactMethod} // Simple comment: Binds the visual state
						onValueChange={(val: "email" | "phone") => setContactMethod(val)} // Simple comment: Updates state on click
						name="contactMethod"
						className="flex gap-8"
					>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="email"
								id="method-email"
								className="border-black text-black"
							/>
							<Label
								htmlFor="method-email"
								className="font-semibold text-base cursor-pointer"
							>
								Email
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="phone"
								id="method-phone"
								className="border-black text-black"
							/>
							<Label
								htmlFor="method-phone"
								className="font-semibold text-base cursor-pointer"
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
							className={`bg-white ${state.errors?.email ? "border-red-500 border-2" : "border-black/20"}`}
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
							className={`bg-white ${state.errors?.phone ? "border-red-500 border-2" : "border-black/20"}`}
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
						className={`bg-white ${state.errors?.subject ? "border-red-500 border-2" : "border-black/20"}`}
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
						className={`bg-white resize-none ${state.errors?.body ? "border-red-500 border-2" : "border-black/20"}`}
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
				<div className="flex justify-end pt-4">
					<SubmitButton />
				</div>
			</form>
		</div>
	);
}
