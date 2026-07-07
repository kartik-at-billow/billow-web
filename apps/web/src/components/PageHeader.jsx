import SectionWrapper from "./SectionWrapper.jsx";
import Reveal from "./Reveal.jsx";

// Title + intro block for listing / interior pages.
export default function PageHeader({ eyebrow, title, intro, align = "left" }) {
	const centered = align === "center";
	return (
		<SectionWrapper className="pb-8 pt-16 md:pb-10 md:pt-24">
			<Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
				{eyebrow && (
					<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
						{eyebrow}
					</p>
				)}
				<h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
					{title}
				</h1>
				{intro && (
					<p className={`mt-5 text-lg leading-relaxed text-muted-foreground ${centered ? "mx-auto" : ""}`}>
						{intro}
					</p>
				)}
			</Reveal>
		</SectionWrapper>
	);
}
