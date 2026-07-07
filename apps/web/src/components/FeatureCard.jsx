// Simple icon + title + description card (values, capabilities, benefits).
export default function FeatureCard({ icon: Icon, title, description }) {
	return (
		<div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7">
			{Icon && (
				<span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
					<Icon className="h-6 w-6" />
				</span>
			)}
			<h3 className="text-lg font-semibold text-foreground">{title}</h3>
			<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
		</div>
	);
}
