const CASES = [
	{
		badge: "Cloud",
		category: "Financial Services",
		title: "Full Azure Cloud Migration for Regional Credit Union",
		metrics: [
			{ value: "40%", label: "Cost reduction" },
			{ value: "60d", label: "Delivery" },
			{ value: "99.9%", label: "Uptime" },
		],
	},
	{
		badge: "Security",
		category: "Public Sector",
		title: "CMMC Level 2 Compliance for Government Contractor",
		metrics: [
			{ value: "100%", label: "Compliance" },
			{ value: "3mo", label: "Delivery" },
			{ value: "Zero", label: "Incidents" },
		],
	},
	{
		badge: "Automation",
		category: "Manufacturing",
		title: "RPA Automation Eliminates 320 Monthly Manual Hours",
		metrics: [
			{ value: "320h", label: "Saved/mo" },
			{ value: "6wk", label: "ROI hit" },
			{ value: "98%", label: "Accuracy" },
		],
	},
];

export function CaseStudies() {
	return (
		<section id="case-studies" className="bg-muted/40 py-16">
			<div className="mx-auto max-w-[1400px] px-5">
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
					Case Studies
				</p>
				<h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
					Real Projects. Real Results.
				</h2>
				<p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
					See how we have transformed businesses across industries with
					measurable, documented outcomes.
				</p>

				{/* Scroll-stacking cards: each card is sticky with an increasing top
				    offset, so the next one slides up and stacks over the previous.
				    The extra bottom padding on each wrapper gives scroll room between
				    transitions. Reverses automatically on scroll-up. */}
				<div className="mt-12">
					{CASES.map((study, i) => (
						<div
							key={study.title}
							className="sticky pb-8"
							style={{ top: `calc(6rem + ${i * 1.75}rem)` }}
						>
							<article className="mx-auto flex min-h-[19rem] max-w-4xl flex-col justify-between overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl shadow-black/10">
								{/* neutral top accent — visible on the peeking edge when stacked */}
								<span className="block h-2 w-full shrink-0 bg-brand-navy" />

								<div className="flex flex-1 flex-col p-8 sm:p-10">
									<div className="flex items-center gap-3">
										<span className="rounded-full bg-brand-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
											{study.badge}
										</span>
										<span className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">
											{study.category}
										</span>
									</div>

									<h3 className="mt-5 max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
										{study.title}
									</h3>

									<div className="mt-auto grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
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
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
