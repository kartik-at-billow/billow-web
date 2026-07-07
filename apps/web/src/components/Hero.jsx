import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";

// ONE hero component with a `variant` prop.
//  - variant="carousel": text-only rotating statements (Home)
//  - variant="static":   image + heading (interior pages)
export default function Hero(props) {
	if (props.variant === "static") return <StaticHero {...props} />;
	return <CarouselHero {...props} />;
}

function CarouselHero({
	statements = [
		"We design software that feels effortless.",
		"We ship products that scale with you.",
		"We turn complex ideas into clean experiences.",
	],
	subhead = "From strategy to launch, Billow partners with you to build digital products that drive real impact.",
	ctaLabel = "Start a project",
	ctaHref = "/contact",
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", duration: 30 });
	const [selected, setSelected] = useState(0);

	const onSelect = useCallback((api) => setSelected(api.selectedScrollSnap()), []);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect(emblaApi);
		emblaApi.on("select", onSelect);
		// Slow auto-advance (motion budget: nothing flashy).
		const timer = setInterval(() => emblaApi.scrollNext(), 4500);
		return () => {
			clearInterval(timer);
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, onSelect]);

	return (
		<section className="relative w-full overflow-hidden bg-accent">
			<div className="mx-auto flex min-h-[78vh] w-full max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center">
				<Reveal>
					<span className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-sm font-medium text-accent-foreground">
						Software services, done right
					</span>
				</Reveal>

				{/* Rotating statements */}
				<div className="w-full overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{statements.map((statement, i) => (
							<div key={i} className="min-w-0 flex-[0_0_100%]">
								<h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl">
									{statement}
								</h1>
							</div>
						))}
					</div>
				</div>

				<Reveal delay={0.1}>
					<p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
						{subhead}
					</p>
				</Reveal>

				<Reveal delay={0.15}>
					<div className="mt-10">
						<Button href={ctaHref} variant="primary" size="lg">
							{ctaLabel}
							<ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</Reveal>

				{/* Dots */}
				<div className="mt-12 flex items-center gap-2">
					{statements.map((_, i) => (
						<button
							key={i}
							type="button"
							aria-label={`Go to statement ${i + 1}`}
							onClick={() => emblaApi && emblaApi.scrollTo(i)}
							className={`h-2 rounded-full transition-all duration-300 ${
								selected === i ? "w-8 bg-primary" : "w-2 bg-primary/30"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function StaticHero({ eyebrow, title, subtitle, image, imageAlt = "" }) {
	return (
		<section className="relative w-full overflow-hidden bg-navy text-navy-foreground">
			<div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:py-28">
				<Reveal className="mx-auto max-w-3xl text-center">
					{eyebrow && (
						<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
							{eyebrow}
						</p>
					)}
					<h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
						{title}
					</h1>
					{subtitle && (
						<p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
							{subtitle}
						</p>
					)}
				</Reveal>

				{image && (
					<Reveal delay={0.1} className="mt-14">
						<img
							src={image}
							alt={imageAlt}
							className="mx-auto aspect-[16/7] w-full rounded-2xl object-cover shadow-2xl"
						/>
					</Reveal>
				)}
			</div>
		</section>
	);
}
