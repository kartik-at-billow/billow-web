import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CASE_STUDIES, INDUSTRIES, SERVICES } from "@/lib/caseStudies";
import { SectionIntro } from "@/components/SectionIntro";
import { CaseCard } from "@/components/CaseCard";

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
							? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
							: "border-neutral-300 bg-blue-50 text-neutral-800 hover:border-neutral-900 dark:border-neutral-700 dark:bg-brand-midnight dark:text-neutral-300 dark:hover:border-white"
					}`}
				>
					{option}
				</button>
			))}
		</div>
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
				<div className="mx-auto mt-8 flex max-w-[1400px] flex-col gap-4 border-y border-neutral-300 px-5 py-8 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
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
							className="inline-flex items-center gap-2 border border-black/15 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-muted dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
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
