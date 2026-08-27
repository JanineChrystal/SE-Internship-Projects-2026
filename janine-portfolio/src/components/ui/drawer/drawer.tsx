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
			className={cn("fixed inset-0 z-100 bg-el-deep/70", className)}
			{...props}
		/>
	);
}

// Slides in from the left edge, full height, with its own
// scroll area so long forms stay usable on short screens
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
					"fixed inset-y-0 left-0 z-100 flex h-full w-full max-w-lg flex-col rounded-r-3xl border-r border-border bg-surface-raised shadow-2xl",
					className,
				)}
				{...props}
			>
				{/* Grab handle - vertical, since the panel drags sideways */}
				<div className="absolute right-2 top-1/2 h-12 w-1.5 -translate-y-1/2 rounded-full bg-ink-muted/40" />
				<div className="overflow-y-auto px-6 py-10 md:px-10">{children}</div>
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
