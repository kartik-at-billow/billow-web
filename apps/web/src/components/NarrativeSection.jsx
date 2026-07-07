import SectionWrapper from "./SectionWrapper.jsx";
import TwoColGrid from "./TwoColGrid.jsx";
import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";

// Image + heading + body block. `imagePosition` = "left" | "right".
// `body` can be a string or an array of paragraphs.
export default function NarrativeSection({
	eyebrow,
	title,
	body,
	image,
	imageAlt = "",
	imagePosition = "right",
	cta,
	className = "",
}) {
	const paragraphs = Array.isArray(body) ? body : body ? [body] : [];

	const text = (
		<Reveal>
			{eyebrow && (
				<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
			)}
			<h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
				{title}
			</h2>
			<div className="mt-5 space-y-4">
				{paragraphs.map((p, i) => (
					<p key={i} className="text-base leading-relaxed text-muted-foreground">
						{p}
					</p>
				))}
			</div>
			{cta && (
				<div className="mt-8">
					<Button href={cta.href || "#"} variant="primary">
						{cta.label}
					</Button>
				</div>
			)}
		</Reveal>
	);

	const media = (
		<Reveal delay={0.1}>
			<img
				src={image}
				alt={imageAlt}
				className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
			/>
		</Reveal>
	);

	return (
		<SectionWrapper className={className}>
			<TwoColGrid align="center" reverse={imagePosition === "left"} left={text} right={media} />
		</SectionWrapper>
	);
}
