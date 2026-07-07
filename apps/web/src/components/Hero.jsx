import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@Billow-web/ui/lib/utils";

/**
 * Hero slides. Each heading is two-tone: `titleTop` renders in black,
 * `titleRest` in brand navy. `subtitle` is a node so key phrases can be
 * emphasized.
 */
const SLIDES = [
	{
		titleTop: "Driving Innovation",
		titleRest: "Through Expert IT Solutions That Work.",
		subtitle: (
			<>
				We empower organizations with{" "}
				<strong className="font-semibold text-brand-navy">
					cutting-edge cloud, cybersecurity, automation
				</strong>{" "}
				and software solutions backed by{" "}
				<strong className="font-semibold text-brand-navy">
					100+ expert consultants
				</strong>{" "}
				across 40+ technologies.
			</>
		),
	},
	{
		titleTop: "Protect What",
		titleRest: "Matters Most With Zero-Trust Security.",
		subtitle: (
			<>
				Defend your organization with{" "}
				<strong className="font-semibold text-brand-navy">
					penetration testing, CMMC compliance
				</strong>{" "}
				and identity-first security frameworks built by{" "}
				<strong className="font-semibold text-brand-navy">
					certified cybersecurity experts
				</strong>{" "}
				across every sector.
			</>
		),
	},
	{
		titleTop: "Migrate. Modernize.",
		titleRest: "Scale Your Business With Confidence.",
		subtitle: (
			<>
				Move to the cloud with{" "}
				<strong className="font-semibold text-brand-navy">
					zero downtime, multi-cloud architecture
				</strong>{" "}
				and cost-optimized infrastructure across{" "}
				<strong className="font-semibold text-brand-navy">
					Azure, AWS and Google Cloud
				</strong>{" "}
				at enterprise scale.
			</>
		),
	},
];

const AUTOPLAY_MS = 5500;

export function Hero() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;
		const id = setInterval(
			() => setIndex((i) => (i + 1) % SLIDES.length),
			AUTOPLAY_MS,
		);
		return () => clearInterval(id);
	}, [paused]);

	const slide = SLIDES[index];

	return (
		<section
  id="top"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
  className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white pt-24 pb-12"
>
			<div className="mx-auto max-w-4xl px-5 text-center">
				{/* Rotating content — fixed min-height keeps the CTA row from jumping */}
				<div className="flex min-h-[20rem] flex-col justify-center sm:min-h-[24rem]">
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -24 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
								<span className="text-neutral-900">{slide.titleTop}</span>{" "}
								<span className="text-brand-navy">{slide.titleRest}</span>
							</h1>

							<p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
								{slide.subtitle}
							</p>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* CTA row — static across slides so the arrow stays anchored */}
				<div className="relative mt-10 flex items-center justify-center gap-4">
					<div className="relative">
						<img
							src="/hero-arrow.png"
							alt=""
							aria-hidden="true"
							className="pointer-events-none absolute -left-[8rem] -top-[4.5rem] hidden w-40 select-none mix-blend-multiply sm:block"
						/>
						<a
							href="#contact"
							className="inline-flex items-center justify-center bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
						>
							Get Started
						</a>
					</div>
					<a
						href="#expertise"
						className="inline-flex items-center justify-center border border-black/15 bg-white px-8 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-muted"
					>
						See Demo
					</a>
				</div>

				{/* Carousel indicators */}
				<div className="mt-9 flex items-center justify-center gap-2.5">
					{SLIDES.map((s, i) => (
						<button
							key={s.titleTop}
							type="button"
							onClick={() => setIndex(i)}
							aria-label={`Go to slide ${i + 1}`}
							aria-current={i === index}
							className={cn(
								"h-2 rounded-full transition-all duration-300",
								i === index
									? "w-7 bg-brand-navy"
									: "w-2 bg-brand-navy/25 hover:bg-brand-navy/40",
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
