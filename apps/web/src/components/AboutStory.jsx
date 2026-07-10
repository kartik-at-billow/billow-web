import { ShieldCheck, Target, Users2 } from "lucide-react";

const VALUES = [
	{
		icon: Target,
		title: "Outcome-Driven",
		body: "Every engagement is measured against clear, agreed success metrics, not just delivered scope.",
	},
	{
		icon: ShieldCheck,
		title: "Security-First",
		body: "Zero-trust principles and compliance are built into our process from day one, not bolted on after.",
	},
	{
		icon: Users2,
		title: "Partnership, Not Vendor",
		body: "We work alongside your team long after go-live, with transparent communication at every stage.",
	},
];

// placeholder company narrative — replace with real facts before launch
export function AboutStory() {
	return (
		<section className="py-12">
			<div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[1.1fr_1fr]">
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
						Our Story
					</p>
					<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
						Built by Engineers Who Have Solved These Problems Before
					</h2>
					<p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
						Billow LLC was founded in 2014 to help organizations modernize
						without the overhead of a traditional systems integrator. What
						started as a small team of cloud and security consultants has
						grown into a full-service technology partner trusted by public
						sector agencies, financial institutions, and enterprises across
						the country.
					</p>
					<p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
						Today we bring together cloud architecture, cybersecurity,
						automation, custom software, and staffing under one roof, so
						clients get a single accountable partner instead of juggling
						multiple vendors.
					</p>
				</div>

				<div className="flex flex-col gap-5">
					{VALUES.map((value) => (
						<div
							key={value.title}
							className="flex gap-4 rounded-xl border border-black/10  p-6"
						>
							<span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-sky text-brand-navy">
								<value.icon className="size-5" />
							</span>
							<div>
								<h3 className="text-base font-semibold text-neutral-900">
									{value.title}
								</h3>
								<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
									{value.body}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
