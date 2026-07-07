import Reveal from "./Reveal.jsx";

// Single metric: big number + label.
export function StatItem({ value, label, className = "" }) {
	return (
		<div className={className}>
			<div className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
				{value}
			</div>
			<div className="mt-2 text-sm text-muted-foreground">{label}</div>
		</div>
	);
}

// Row of StatItems. Pass `stats` = [{ value, label }].
export default function StatRow({ stats = [], className = "" }) {
	return (
		<div className={`grid grid-cols-2 gap-8 md:grid-cols-4 ${className}`}>
			{stats.map((stat, i) => (
				<Reveal key={stat.label} delay={i * 0.05}>
					<StatItem value={stat.value} label={stat.label} />
				</Reveal>
			))}
		</div>
	);
}
