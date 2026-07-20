import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "@/components/Logo";

const OFFICE_TIME_ZONE = "America/Los_Angeles";

// timeZoneName: "short" resolves to PST or PDT automatically depending on
// daylight saving, rather than hardcoding a label that would be wrong half
// the year
function formatOfficeTime() {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: OFFICE_TIME_ZONE,
		hour: "numeric",
		minute: "2-digit",
		timeZoneName: "short",
	}).format(new Date());
}

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
	const [officeTime, setOfficeTime] = useState(formatOfficeTime);

	useEffect(() => {
		const id = setInterval(() => setOfficeTime(formatOfficeTime()), 30_000);
		return () => clearInterval(id);
	}, []);

	return (
		<footer id="site-footer" className="border-t border-black/5 bg-blue-50 dark:border-white/10 dark:bg-brand-midnight">
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
							className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 underline decoration-neutral-900/30 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:text-white dark:decoration-white/30 dark:hover:decoration-white"
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
										className="mt-1 block text-sm font-medium text-neutral-900 transition-colors hover:text-brand-navy dark:text-white"
									>
										{item.value}
									</a>
								) : (
									<p className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">{item.value}</p>
								)}
							</div>
						))}

						<p className="mt-2 text-sm font-medium text-neutral-900">{officeTime}</p>
					</div>
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-6 dark:border-white/10 sm:flex-row">
					<p className="text-xs text-black dark:text-white">
						© 2026 Billow LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
