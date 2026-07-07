import { Mail, MapPin } from "lucide-react";
import { SERVICES } from "../lib/content.js";

const QUICK_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "Work", href: "/work" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export default function Footer({
	quickLinks = QUICK_LINKS,
	email = "hello@billow.studio",
	location = "San Francisco, CA",
}) {
	const serviceLinks = SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` }));

	return (
		<footer className="w-full border-t border-border bg-background">
			<div className="mx-auto w-full max-w-[1200px] px-6 py-16">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div>
						<a href="/" className="flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-foreground">
							Billow
							<span className="text-primary">.</span>
						</a>
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
							A software services agency partnering with teams to design, build, and scale exceptional
							digital products.
						</p>
					</div>

					{/* Quick links */}
					<div>
						<h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
							Company
						</h3>
						<ul className="mt-4 space-y-3">
							{quickLinks.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
							Services
						</h3>
						<ul className="mt-4 space-y-3">
							{serviceLinks.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
							Contact
						</h3>
						<ul className="mt-4 space-y-3">
							<li className="flex items-start gap-3 text-sm text-muted-foreground">
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<a href={`mailto:${email}`} className="transition-colors hover:text-primary">
									{email}
								</a>
							</li>
							<li className="flex items-start gap-3 text-sm text-muted-foreground">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
								<span>{location}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Legal strip */}
				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
					<p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Billow. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
							Privacy Policy
						</a>
						<a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
