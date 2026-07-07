const HEIGHT = "pt-40 pb-16";

// simple intro banner for non-home pages, sits under the fixed navbar
export function PageHeader({ eyebrow, title, subtitle }) {
	return (
		<section className={`bg-gradient-to-b from-brand-navy/10 via-brand-navy/5 to-white ${HEIGHT}`}>
			<div className="mx-auto max-w-4xl px-5 text-center">
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
					{eyebrow}
				</p>
				<h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
					{title}
				</h1>
				{subtitle && (
					<p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
}
