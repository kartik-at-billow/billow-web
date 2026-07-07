import { ArrowUpRight } from "lucide-react";

// Work/case-study card. Supports `layout="grid"` (default) and `layout="list"`.
export default function CaseStudyCard({
	image,
	imageAlt = "",
	client,
	title,
	tags = [],
	href = "/work",
	layout = "grid",
}) {
	const isList = layout === "list";

	return (
		<a
			href={href}
			className={`group block overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/40 hover:shadow-lg ${
				isList ? "sm:flex sm:items-stretch" : ""
			}`}
		>
			<div className={`overflow-hidden bg-muted ${isList ? "sm:w-2/5" : ""}`}>
				<img
					src={image}
					alt={imageAlt}
					className={`h-full w-full object-cover ${isList ? "aspect-[16/10] sm:aspect-auto" : "aspect-[16/10]"}`}
				/>
			</div>

			<div className={`flex flex-col p-6 ${isList ? "sm:w-3/5 sm:justify-center sm:p-8" : ""}`}>
				{client && (
					<span className="text-xs font-semibold uppercase tracking-wider text-primary">{client}</span>
				)}
				<h3 className="mt-2 flex items-start justify-between gap-3 text-xl font-semibold text-foreground">
					<span>{title}</span>
					<ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
				</h3>

				{tags.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</div>
		</a>
	);
}
