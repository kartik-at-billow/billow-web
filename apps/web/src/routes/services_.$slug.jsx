import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CtaBand } from "@/components/CtaBand";
import { CaseCard } from "@/components/CaseCard";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/lib/services";
import { CASE_STUDIES } from "@/lib/caseStudies";

function IncludedCard({ icon: Icon, title, description, index }) {
	return (
		<div className="rounded-xl border border-neutral-300 bg-blue-50 p-6">
			<div className="flex items-center justify-between">
				<span className="flex size-9 items-center justify-center rounded-lg border border-neutral-300 text-brand-navy">
					<Icon className="size-4" />
				</span>
				<span className="text-xs font-semibold text-muted-foreground">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>
			<h3 className="mt-4 text-base font-semibold text-neutral-900">{title}</h3>
			<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
				{description}
			</p>
		</div>
	);
}

export default function ServiceDetail() {
	const { slug } = useParams();
	const service = SERVICES.find((s) => s.slug === slug);
	const related = service
		? CASE_STUDIES.filter((c) => c.service === service.title).slice(0, 2)
		: [];

	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				{service ? (
					<>
						<div className="relative z-0 pt-50">
							<div
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 -z-10 hidden bg-grid-corner-fade lg:block"
							/>

							<div className="mx-auto max-w-[1400px] px-5">
								<div className="max-w-2xl">
									<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
										{service.eyebrow}
									</p>
									<h1 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
										{service.headline}
									</h1>
									<p className="mt-4 text-sm text-muted-foreground sm:text-base">
										{service.intro}
									</p>
								</div>
							</div>

							<div className="mx-auto max-w-[1400px] px-5">
								<div className="mt-6 flex max-w-2xl flex-wrap gap-x-10 gap-y-3 border-t border-neutral-300 pb-16 pt-6">
									<div>
										<p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
											Typical Engagement
										</p>
										<p className="mt-1 text-sm font-semibold text-neutral-900">
											{service.meta.engagement}
										</p>
									</div>
									<div>
										<p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
											Team Size
										</p>
										<p className="mt-1 text-sm font-semibold text-neutral-900">
											{service.meta.teamSize}
										</p>
									</div>
								</div>
							</div>

							<div className="border-t border-neutral-300 mt-16" />

							{/* Overview */}
							<section className="border-b border-neutral-300 py-16 mt-16">
								<div className="mx-auto grid max-w-[1400px] gap-8 px-5 lg:grid-cols-[1fr_1.3fr] mb-16">
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
											{service.overview.eyebrow}
										</p>
										<h2 className="mt-3 text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
											{service.overview.headline}
										</h2>
									</div>
									<div className="flex flex-col gap-4">
										{service.overview.paragraphs.map((p) => (
											<p
												key={p}
												className="text-sm leading-relaxed text-muted-foreground sm:text-base"
											>
												{p}
											</p>
										))}
									</div>
								</div>
							</section>
						</div>

						{/* What's Included */}
						<section
							className={`bg-blue-100 py-16 ${related.length > 0 ? "border-b border-neutral-300" : ""}`}
						>
							<div className="mx-auto max-w-[1400px] px-5">
								<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
									What's Included
								</p>
								<h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
									A complete {service.title.toLowerCase()} practice, in one engagement.
								</h2>

								<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
									{service.included.map((item, i) => (
										<IncludedCard key={item.title} {...item} index={i} />
									))}
								</div>
							</div>
						</section>

						{/* Related Work */}
						{related.length > 0 && (
							<section className="py-16">
								<div className="mx-auto max-w-[1400px] px-5">
									<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
										Related Work
									</p>
									<h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
										Selected {service.title.toLowerCase()} engagements.
									</h2>

									<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
										{related.map((study) => (
											<CaseCard key={study.slug} {...study} />
										))}
									</div>
								</div>
							</section>
						)}

						<CtaBand
							title={`Have a ${service.title.toLowerCase()} project in mind? Let's talk it through.`}
						/>
					</>
				) : (
					<section className="py-24 text-center">
						<p className="text-sm text-muted-foreground">
							We couldn't find that service.
						</p>
						<Link
							to="/services"
							className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:underline"
						>
							<ArrowLeft className="size-4" />
							Back to all services
						</Link>
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
}
