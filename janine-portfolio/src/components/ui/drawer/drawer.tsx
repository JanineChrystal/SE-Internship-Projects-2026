"use client";

import type * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;
const DrawerPortal = DrawerPrimitive.Portal;

function DrawerOverlay({
	className,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
	return (
		<DrawerPrimitive.Overlay
			className={cn(
				"fixed inset-0 z-50 bg-el-deep/60 backdrop-blur-sm",
				className,
			)}
			{...props}
		/>
	);
}

// Slides up from the bottom edge, capped so tall content scrolls
// inside the panel rather than pushing it off screen
function DrawerContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
	return (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content
				className={cn(
					"surface-glass fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[92vh] flex-col rounded-t-3xl",
					className,
				)}
				{...props}
			>
				{/* Grab handle - the affordance for dragging the panel down */}
				<div className="mx-auto mt-4 h-1.5 w-12 shrink-0 rounded-full bg-ink-muted/40" />
				<div className="overflow-y-auto px-5 pb-10 pt-4 md:px-8">
					{children}
				</div>
			</DrawerPrimitive.Content>
		</DrawerPortal>
	);
}

function DrawerTitle({
	className,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
	return (
		<DrawerPrimitive.Title
			className={cn("text-h3 font-extrabold text-ink-strong", className)}
			{...props}
		/>
	);
}

function DrawerDescription({
	className,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
	return (
		<DrawerPrimitive.Description
			className={cn("text-ink-muted", className)}
			{...props}
		/>
	);
}

export {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
};
