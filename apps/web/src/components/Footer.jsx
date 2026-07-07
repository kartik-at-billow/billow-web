import { Logo } from "@/components/Logo";

const COLUMNS = [
	{
		title: "Services",
		links: [
			"Cloud Consulting",
			"Cybersecurity",
			"Business Automation",
			"Custom Software Dev",
			"Modern Workplace",
			"IT Staffing",
		],
	},
	{
		title: "Company",
		links: ["About Us", "Our Team", "Case Studies", "Blog & Insights", "Careers"],
	},
	{
		title: "Connect",
		links: ["Contact Us", "Get a Quote"],
	},
];

const SOCIALS = [
	{
		label: "LinkedIn",
		path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.6 4.75 6V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z",
	},
	{
		label: "X",
		path: "M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L4 21H1l7.5-8.6L.6 3H7l4.5 5.6zM16.3 19h1.7L7.8 4.8H6z",
	},
	{
		label: "Facebook",
		path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.44 0-4.11 1.49-4.11 4.22V9.9H7.7V13h2.73v8z",
	},
	{
		label: "YouTube",
		path: "M23 12s0-3.2-.4-4.7c-.23-.83-.9-1.48-1.73-1.7C19.36 5.2 12 5.2 12 5.2s-7.36 0-8.87.4c-.83.22-1.5.87-1.73 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.23.83.9 1.48 1.73 1.7 1.51.4 8.87.4 8.87.4s7.36 0 8.87-.4c.83-.22 1.5-.87 1.73-1.7.4-1.5.4-4.7.4-4.7zM9.75 15.25v-6.5L15.5 12z",
	},
];

const PARTNERS = ["Microsoft Partner", "AWS Partner", "Google Partner"];

export function Footer() {
	return (
		<footer id="site-footer" className="border-t border-black/5 bg-white">
			<div className="mx-auto max-w-[1400px] px-5 py-10">
				<div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
					<div>
						<Logo className="h-15" />
						<p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
							Driving innovation through expert IT solutions — cloud,
							cybersecurity, automation, software development and staffing since
							2014.
						</p>
						<div className="mt-6 flex gap-3">
							{SOCIALS.map((s) => (
								<a
									key={s.label}
									href="#"
									aria-label={s.label}
									className="flex size-9 items-center justify-center rounded-lg border border-black/10 text-muted-foreground transition-colors hover:border-brand-blue hover:bg-blue-700 hover:text-white"
								>
									<svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
										<path d={s.path} />
									</svg>
								</a>
							))}
						</div>
					</div>

					{COLUMNS.map((col) => (
						<div key={col.title}>
							<h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy">
								{col.title}
							</h4>
							<ul className="mt-4 space-y-3">
								{col.links.map((link) => (
									<li key={link}>
										<a
											href="#"
											className="text-sm text-muted-foreground transition-colors hover:text-brand-navy"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-6 sm:flex-row">
					<p className="text-xs text-muted-foreground">
						© 2026 Billow LLC. All rights reserved.
					</p>
				
				</div>
			</div>
		</footer>
	);
}
