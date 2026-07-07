import SectionWrapper from "./SectionWrapper.jsx";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";

// Full-width headline + button, reused near the bottom of most pages.
export default function CtaBand({
	title = "Let's build something great together",
	subtitle = "Tell us about your project and we'll get back within one business day.",
	ctaLabel = "Get started now",
	ctaHref = "/contact",
}) {
	return (
		<SectionWrapper className="bg-ink text-ink-foreground">
			<Reveal className="flex flex-col items-center gap-6 text-center">
				<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
				{subtitle && (
					<p className="max-w-xl text-pretty text-base leading-relaxed text-ink-foreground/70">
						{subtitle}
					</p>
				)}
				<Button href={ctaHref} variant="light" size="lg">
					{ctaLabel}
				</Button>
			</Reveal>
		</SectionWrapper>
	);
}
