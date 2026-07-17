import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { CASE_STUDIES } from "@/lib/caseStudies";

function StoryBlock({ number, eyebrow, headline, description, reversed }) {
	return (
		<section className="pb-16 mb-8">
			<div className="mx-auto max-w-[1400px] border-t border-neutral-300 px-5 pt-16">
				<div className="grid gap-8 lg:grid-cols-2 mt-8">
					<div className={reversed ? "lg:order-2" : undefined}>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
							{number} — {eyebrow}
						</p>
						<h2 className="mt-3 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
							{headline}
						</h2>
					</div>
					<p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
						{description}
					</p>
				</div>
			</div>
		</section>
	);
}

function StatBlock({ value, suffix, label }) {
	return (
		<div>
			<div className="flex items-baseline gap-1">
				<span className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
					{value}
				</span>
				{suffix && (
					<span className="text-lg font-bold text-brand-navy sm:text-xl">{suffix}</span>
				)}
			</div>
			<div className="mt-3 border-t border-neutral-300 pt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
				{label}
			</div>
		</div>
	);
}

export default function CaseStudyDetail() {
	const { slug } = useParams();
	const index = CASE_STUDIES.findIndex((c) => c.slug === slug);
	const study = index !== -1 ? CASE_STUDIES[index] : null;
	const nextStudy = study ? CASE_STUDIES[(index + 1) % CASE_STUDIES.length] : null;
	const resultsNumber = study
		? String(study.detail.sections.length + 1).padStart(2, "0")
		: null;

	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				{study ? (
					<>
						<div className="relative z-0 pt-50">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 -z-10 hidden bg-grid-corner-fade lg:block"
							/>

							<div className="mx-auto max-w-[1400px] px-5">
								<div className="max-w-2xl">
									<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
										{study.detail.eyebrow}
									</p>
									<h1 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
										{study.detail.headline}
									</h1>
									<p className="mt-4 text-sm text-muted-foreground sm:text-base">
										{study.detail.intro}
									</p>
								</div>
							</div>

							<div className="mx-auto max-w-[1400px] px-5">
								<div className="mt-6 flex w-fit flex-wrap gap-x-10 gap-y-3 border-t border-neutral-300 pb-16 pt-6 mb-16">
									{[
										["Client", study.detail.meta.client],
										["Services", study.detail.meta.services],
										["Year", study.detail.meta.year],
										["Team", study.detail.meta.team],
									].map(([label, value]) => (
										<div key={label}>
											<p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
												{label}
											</p>
											<p className="mt-1 text-sm font-semibold text-neutral-900">
												{value}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="border-t border-neutral-300 pb-16" />

						{study.detail.sections.map((s, i) => (
							<StoryBlock key={s.number} {...s} reversed={i % 2 === 1} />
						))}

						{/* Results */}
						<section className="border-y border-neutral-300 bg-blue-100 py-22">
							<div className="mx-auto max-w-[1400px] px-5">
								<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
									{resultsNumber} — Results
								</p>
								<h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
									{study.detail.results.headline}
								</h2>

								<div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
									{study.detail.results.stats.map((stat) => (
										<StatBlock key={stat.label} {...stat} />
									))}
								</div>
							</div>
						</section>

						{/* Next Case Study */}
						<Link
							to={`/work/${nextStudy.slug}`}
							className="group block bg-blue-50 px-5 py-20 transition-colors duration-300 hover:bg-brand-navy"
						>
							<div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
								<div>
									<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy transition-colors duration-300 group-hover:text-brand-sky">
										Next Case Study
									</p>
									<h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-white sm:text-3xl md:text-4xl">
										{nextStudy.title}
									</h2>
								</div>
								<ArrowUpRight className="size-8 shrink-0 text-neutral-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
							</div>
						</Link>

						<CtaBand title="Have a similar project in mind? Let's talk." />
					</>
				) : (
					<section className="py-24 text-center">
						<p className="text-sm text-muted-foreground">
							We couldn't find that case study.
						</p>
						<Link
							to="/work"
							className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:underline"
						>
							<ArrowLeft className="size-4" />
							Back to all work
						</Link>
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
}
