import { cn } from "@Billow-web/ui/lib/utils";

function Skeleton({ className, ...props }) {
	return (
		<div
			data-slot="skeleton"
			className={cn("animate-pulse rounded-none bg-muted", className)}
			{...props}
		/>
	);
}

export { Skeleton };
