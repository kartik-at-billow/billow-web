import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "@/components/Logo";

const NAV_COLUMN = {
	title: "Company",
	links: [
		{ label: "Work", href: "/work" },
		{ label: "About", href: "/about" },
		{ label: "Contact", href: "/contact" },
		{ label: "Careers", href: "#" },
	],
};

const SERVICES_COLUMN = {
	title: "Services",
	links: [
		{ label: "Cloud Consulting", href: "/services" },
		{ label: "Cybersecurity", href: "/services" },
		{ label: "Business Automation", href: "/services" },
		{ label: "Custom Software Dev", href: "/services" },
		{ label: "Modern Workplace", href: "/services" },
		{ label: "IT Staffing", href: "/services" },
	],
};

const CONTACT_INFO = [
	{ label: "General", value: "hello@billowllc.com", href: "mailto:hello@billowllc.com" },
	{ label: "Offices", value: "Sacramento, CA · Remote Nationwide" },
];

export function Footer() {
	return (
		<footer id="site-footer" className="border-t border-black/5 bg-blue-50">
			<div className="mx-auto max-w-[1400px] px-5 py-14">
				<div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
					<div>
						<Logo className="h-15" />
						<p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
							Driving innovation through expert IT solutions - cloud,
							cybersecurity, automation, software development and staffing since
							2014.
						</p>
						<Link
							to="/contact"
							className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 underline decoration-neutral-900/30 underline-offset-4 transition-colors hover:decoration-neutral-900"
						>
							Start a project
							<ArrowUpRight className="size-4" />
						</Link>
					</div>

					<div>
						<h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy">
							{NAV_COLUMN.title}
						</h4>
						<ul className="mt-4 space-y-3">
							{NAV_COLUMN.links.map((link) => (
								<li key={link.label}>
									<Link
										to={link.href}
										className="text-sm text-muted-foreground transition-colors hover:text-brand-navy"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy">
							{SERVICES_COLUMN.title}
						</h4>
						<ul className="mt-4 space-y-3">
							{SERVICES_COLUMN.links.map((link) => (
								<li key={link.label}>
									<Link
										to={link.href}
										className="text-sm text-muted-foreground transition-colors hover:text-brand-navy"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-5">
						{CONTACT_INFO.map((item) => (
							<div key={item.label}>
								<p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
									{item.label}
								</p>
								{item.href ? (
									<a
										href={item.href}
										className="mt-1 block text-sm font-medium text-neutral-900 transition-colors hover:text-brand-navy"
									>
										{item.value}
									</a>
								) : (
									<p className="mt-1 text-sm font-medium text-neutral-900">{item.value}</p>
								)}
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-6 sm:flex-row">
					<p className="text-xs text-black">
						© 2026 Billow LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
