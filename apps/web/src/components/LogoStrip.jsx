import SectionWrapper from "./SectionWrapper.jsx";

const DEFAULT_LOGOS = [
	"Northwind",
	"Vertex",
	"Lumina",
	"Nimbus",
	"Hudle",
	"Atlas",
];

// Auto-scrolling marquee of grayscale client logo placeholders.
export default function LogoStrip({ logos = DEFAULT_LOGOS, label = "Trusted by teams at" }) {
	const track = [...logos, ...logos];

	return (
		<SectionWrapper className="py-12 md:py-16">
			<p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
				{label}
			</p>
			<div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
				<div className="flex w-max animate-billow-marquee items-center gap-16">
					{track.map((logo, i) => (
						<span
							key={`${logo}-${i}`}
							className="whitespace-nowrap font-display text-xl font-semibold text-muted-foreground/60"
						>
							{logo}
						</span>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
