import { cn } from "@Billow-web/ui/lib/utils";

/** Small reusable section title used across marketing sections. */
export function SectionHeading({ title, className, as: Tag = "h2" }) {
	return (
		<Tag className={cn("text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl", className)}>
			{title}
		</Tag>
	);
}
