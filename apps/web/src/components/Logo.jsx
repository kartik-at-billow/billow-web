import { Link } from "react-router";
import { cn } from "@Billow-web/ui/lib/utils";

/** Billow LLC brand logo, rendered from the uploaded SVG asset. */
export function Logo({ className }) {
	return (
		<Link to="/" className="inline-flex items-center">
			<img
				src="/billow_logo.svg"
				alt="Billow LLC — Committed to Your Success"
				className={cn(
					"h-10 w-auto select-none dark:brightness-0 dark:invert",
					className,
				)}
			/>
		</Link>
	);
}
