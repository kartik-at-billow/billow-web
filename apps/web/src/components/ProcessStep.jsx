import Reveal from "./Reveal.jsx";

// Single numbered step.
export function ProcessStep({ index, title, description, isLast }) {
	const number = String(index + 1).padStart(2, "0");
	return (
		<div className="relative flex flex-col">
			{/* Connecting line (desktop only) */}
			{!isLast && (
				<span
					aria-hidden="true"
					className="absolute left-6 top-6 hidden h-px w-full bg-border md:block"
				/>
			)}
			<span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-accent font-display text-sm font-bold text-primary">
				{number}
			</span>
			<h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
			<p className="mt-2 pr-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
		</div>
	);
}

// Row of process steps with connecting line.
export default function ProcessSteps({ steps = [] }) {
	return (
		<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
			{steps.map((step, i) => (
				<Reveal key={step.title} delay={i * 0.05}>
					<ProcessStep index={i} title={step.title} description={step.description} isLast={i === steps.length - 1} />
				</Reveal>
			))}
		</div>
	);
}
