const PARTNERS = [
	{ src: "/partners/microsoft-partner.png", alt: "Microsoft Partner" },
	{ src: "/partners/Google-partner.png", alt: "Google Partner" },
	{ src: "/partners/aws-partner.png", alt: "AWS Partner" },
];

export function Partners() {
	return (
		<section id="partners" className="w-full">
			<div className="grid md:grid-cols-2">
				{/* Left — blue panel with intro copy */}
				<div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#2563eb] px-8 py-14 text-center text-white">
					{/* radial glow + starburst rays to echo the reference texture */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.35),transparent_60%)]"
					/>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 opacity-15 [background:repeating-conic-gradient(from_0deg_at_50%_42%,rgba(255,255,255,0.6)_0deg_1deg,transparent_1deg_5deg)]"
					/>
					<div className="relative max-w-md">
						<p className="text-sm font-semibold uppercase tracking-[0.35em]">
							Our Partners
						</p>
						<p className="mt-5 text-lg font-medium leading-relaxed">
							Leveraging partnerships with AWS, Microsoft, and Google, we fuse
							our services to deliver solutions that exceed customer
							expectations.
						</p>
					</div>
				</div>

				{/* Right — partner logos on a light panel */}
				<div className="flex flex-wrap items-center justify-center gap-10 bg-[#e9eaec] px-8 py-14 sm:gap-14">
					{PARTNERS.map((partner) => (
						<div
							key={partner.alt}
							className="flex h-16 w-40 items-center justify-center"
						>
							<img
								src={partner.src}
								alt={partner.alt}
								loading="lazy"
								className="max-h-full max-w-full object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
