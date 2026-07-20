import { Link } from "react-router";
import { cn } from "@Billow-web/ui/lib/utils";

/** Billow LLC brand logo. Rendered the same way in both light and dark mode. */
export function Logo({ className }) {
	return (
		<Link
			to="/"
			aria-label="Billow LLC — Committed to Your Success"
			className="inline-flex items-center"
		>
			<img
				src="/billow_logo.svg"
				alt=""
				aria-hidden="true"
				className={cn("h-10 w-auto select-none", className)}
			/>
		</Link>
	);
}
