import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export function CaseCard({ slug, title, client, year, industry, service, description, image }) {
	return (
		<Link to={`/work/${slug}`} className="group block">
			<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-300 bg-neutral-200">
				<img
					src={image}
					alt=""
					loading="lazy"
					className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			<div className="mt-4 flex items-center justify-between gap-3">
				<p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
					{client} · {year}
				</p>
				<ArrowUpRight className="size-4 shrink-0 text-neutral-400 transition-colors group-hover:text-brand-navy" />
			</div>
			<h3 className="mt-2 text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-brand-navy">
				{title}
			</h3>
			<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
				{description}
			</p>

			<div className="mt-3 flex flex-wrap gap-2">
				<span className="rounded-full border border-neutral-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600">
					{industry}
				</span>
				<span className="rounded-full border border-neutral-300 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600">
					{service}
				</span>
			</div>
		</Link>
	);
}
