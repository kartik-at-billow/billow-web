// shared top-of-page intro block used on the non-home marketing pages:
// eyebrow + optional right-aligned action + a highlighted headline + a side
// description, followed by an optional full-bleed divider. the eyebrow,
// headline and description live inside a max-w container so they align
// with the rest of the page's content, but the divider intentionally
// breaks out of that container to span the full section width.
export function SectionIntro({
	as: Heading = "h1",
	eyebrow,
	eyebrowAction,
	headline,
	description,
	showDivider = true,
}) {
	return (
		<>
			<div className="mx-auto mt-30 max-w-[1400px] px-5">
				<div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-end">
					<div>
						<div className="flex flex-wrap items-end justify-between gap-4">
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
								{eyebrow}
							</p>
							{eyebrowAction}
						</div>
						<Heading className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
							{headline}
						</Heading>
					</div>
					{description && (
						<p className="text-sm text-muted-foreground sm:text-base">
							{description}
						</p>
					)}
				</div>
			</div>

			{showDivider && <div className="my-30 border-t border-neutral-300" />}
		</>
	);
}
