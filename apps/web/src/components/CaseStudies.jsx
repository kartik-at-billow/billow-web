import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { CASE_STUDIES, INDUSTRIES, SERVICES } from "@/lib/caseStudies";
import { SectionIntro } from "@/components/SectionIntro";

function FilterGroup({ label, options, active, onChange }) {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<span className="mr-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
				{label}
			</span>
			{options.map((option) => (
				<button
					key={option}
					type="button"
					onClick={() => onChange(option)}
					className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
						active === option
							? "border-neutral-900 bg-neutral-900 text-white"
							: "border-neutral-300 bg-blue-50 text-neutral-800 hover:border-neutral-900"
					}`}
				>
					{option}
				</button>
			))}
		</div>
	);
}

function CaseCard({ slug, title, client, year, industry, service, description, image }) {
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

export function CaseStudies({
	limit,
	showViewAll = false,
	showFilters = false,
	headingLevel = "h2",
}) {
	const [industry, setIndustry] = useState("All");
	const [service, setService] = useState("All");

	const filtered = useMemo(
		() =>
			CASE_STUDIES.filter(
				(c) =>
					(industry === "All" || c.industry === industry) &&
					(service === "All" || c.service === service),
			),
		[industry, service],
	);

	const cases = limit ? CASE_STUDIES.slice(0, limit) : filtered;

	return (
		<section id="case-studies">
			<SectionIntro
				as={headingLevel}
				eyebrow="Selected Work · Since 2014"
				headline={
					<>
						A curated record of what we've{" "}
						<span className="italic text-brand-navy">delivered.</span>
					</>
				}
				description="Filter by industry or service to see engagements closest to your own. Every project shown was built by the same team you'd work with."
				showDivider={showFilters}
			/>

			{showFilters && (
				<div className="mx-auto mt-8 flex max-w-[1400px] flex-col gap-4 border-y border-neutral-300 px-5 py-8 lg:flex-row lg:items-center lg:justify-between">
					<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
						<FilterGroup
							label="Industry"
							options={INDUSTRIES}
							active={industry}
							onChange={setIndustry}
						/>
						<FilterGroup
							label="Service"
							options={SERVICES}
							active={service}
							onChange={setService}
						/>
					</div>
					<span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
						{filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
					</span>
				</div>
			)}

			<div className="mx-auto max-w-[1400px] px-5">
				<div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
					{cases.map((study) => (
						<CaseCard key={study.slug} {...study} />
					))}
				</div>

				{showViewAll && (
					<div className="mt-10 mb-10 flex justify-center">
						<Link
							to="/work"
							className="inline-flex items-center gap-2 border border-black/15 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-muted"
						>
							View All Case Studies
							<ArrowRight className="size-4" />
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
