import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { CASE_STUDIES } from "@/lib/caseStudies";

export default function CaseStudyDetail() {
	const { slug } = useParams();
	const study = CASE_STUDIES.find((c) => c.slug === slug);

	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased dark:bg-brand-midnight">
			<Navbar />
			<main className="pt-24">
				{study ? (
					<section className="py-12">
						<div className="mx-auto max-w-[1000px] px-5">
							<Link
								to="/work"
								className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-navy"
							>
								<ArrowLeft className="size-4" />
								All work
							</Link>

							<p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
								{study.client} · {study.year}
							</p>
							<h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
								{study.title}
							</h1>
							<p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
								{study.description}
							</p>
							<div className="mt-6 flex flex-wrap gap-2">
								<span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-800 dark:border-neutral-700 dark:bg-white/5 dark:text-neutral-300">
									{study.industry}
								</span>
								<span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-800 dark:border-neutral-700 dark:bg-white/5 dark:text-neutral-300">
									{study.service}
								</span>
							</div>

							<div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-white/10">
								<img
									src={study.image}
									alt=""
									className="size-full object-cover"
								/>
							</div>

							<div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-neutral-300 pt-8 dark:border-white/10">
								{study.metrics.map((m) => (
									<div key={m.label}>
										<div className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
											{m.value}
										</div>
										<div className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
											{m.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
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
			<CtaBand title="Have a similar project in mind? Let's talk." />
			<Footer />
		</div>
	);
}
