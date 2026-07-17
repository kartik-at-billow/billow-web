import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const AUTOPLAY_MS = 5000;

// placeholder quotes — replace with real client testimonials before launch
const TESTIMONIALS = [
	{
		quote:
			"They moved faster than our own team could, without ever cutting corners on security. The migration finished two weeks ahead of schedule.",
		name: "Priya Anand",
		title: "VP Engineering",
		company: "Harborline Systems",
	},
	{
		quote:
			"The rare partner that treats compliance as part of the design, not a checklist at the end. Our audit went from a dreaded quarter to a formality.",
		name: "Marcus Feld",
		title: "CISO",
		company: "Bracken Health",
	},
	{
		quote:
			"We handed them a tangle of manual processes and got back a system our staff actually enjoys using. Adoption was immediate.",
		name: "Sofia Marchetti",
		title: "COO",
		company: "Ridgeway Logistics",
	},
	{
		quote:
			"Old-school craft, modern stack. They pushed back where it mattered and delivered work we're still proud of a year in.",
		name: "Devon Okafor",
		title: "Founder & CEO",
		company: "Latchkey Studio",
	},
	{
		quote:
			"Billow felt like an in-house team from week one. They shipped a v1 our board mistook for a v3, then made it better.",
		name: "Renata Kessler",
		title: "Head of Product",
		company: "Northfield Analytics",
	},
	{
		quote:
			"Every engagement came with a straight answer, even when it wasn't the one we wanted to hear. That honesty is worth more than the code.",
		name: "Tomás Reyes",
		title: "IT Director",
		company: "Calder Municipal Group",
	},
];

function TestimonialCard({ quote, name, title, company }) {
	const initial = name.charAt(0);
	return (
		<div className="flex h-full min-h-[22rem] flex-col rounded-xl border border-neutral-300 bg-blue-50 p-8 dark:border-white/10 dark:bg-brand-midnight">
			<Quote className="size-9 text-brand-navy/25" strokeWidth={1.5} />
			<p className="mt-6 flex-1 text-base leading-relaxed text-neutral-900 dark:text-white">
				{quote}
			</p>
			<div className="mt-8 flex items-center gap-3 border-t border-neutral-300 pt-6 dark:border-white/10">
				<span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-navy-fixed text-sm font-semibold text-white">
					{initial}
				</span>
				<div>
					<p className="text-sm font-semibold text-neutral-900 dark:text-white">{name}</p>
					<p className="text-xs text-muted-foreground">
						{title} · {company}
					</p>
				</div>
			</div>
		</div>
	);
}

export function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
	});
	const [paused, setPaused] = useState(false);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (!emblaApi || paused) return;
		const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
		return () => clearInterval(id);
	}, [emblaApi, paused]);

	return (
		<section className="py-12">
			<div className="mx-auto max-w-[1400px] px-5">
				<div className="flex flex-wrap items-end justify-between gap-4">
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
						What Clients Say
					</p>
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={scrollPrev}
							aria-label="Previous testimonial"
							className="flex size-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-brand-navy hover:bg-brand-navy-fixed hover:text-white dark:border-neutral-700 dark:text-white"
						>
							<ArrowLeft className="size-4" />
						</button>
						<button
							type="button"
							onClick={scrollNext}
							aria-label="Next testimonial"
							className="flex size-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-brand-navy hover:bg-brand-navy-fixed hover:text-white dark:border-neutral-700 dark:text-white"
						>
							<ArrowRight className="size-4" />
						</button>
					</div>
				</div>
				<h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
					A Partner our clients <span className="italic text-brand-navy">quietly recommend.</span>
				</h2>

				<div
					className="relative mt-10"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
				>
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="-ml-1 flex">
							{TESTIMONIALS.map((testimonial) => (
								<div
									key={testimonial.name}
									className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
								>
									<TestimonialCard {...testimonial} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
