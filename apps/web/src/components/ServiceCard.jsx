import { ArrowUpRight } from "lucide-react";

// Card with icon/number, title, one-line description.
// Whole card hover transitions to the blue brand color.
export default function ServiceCard({ icon: Icon, number, title, description, href = "/services" }) {
	return (
		<a
			href={href}
			className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-colors duration-300 hover:border-primary hover:bg-primary"
		>
			<div className="mb-8 flex items-center justify-between">
				<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground">
					{Icon ? <Icon className="h-6 w-6" /> : null}
				</span>
				{number && (
					<span className="font-display text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/60">
						{number}
					</span>
				)}
			</div>

			<h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
				{title}
			</h3>
			<p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80">
				{description}
			</p>

			<span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors duration-300 group-hover:text-primary-foreground">
				Learn more
				<ArrowUpRight className="h-4 w-4" />
			</span>
		</a>
	);
}
