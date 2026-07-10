import { useEffect, useState } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "@Billow-web/ui/lib/utils";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
	{ label: "Services", href: "/services" },
	{ label: "Work", href: "/work" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-all duration-300",
				scrolled
					? "border-b border-black/5 bg-white/65 backdrop-blur-md"
					: "border-b border-transparent bg-transparent",
			)}
		>
			<nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5">
				<Logo className="h-15" />

				<div className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							className={cn(
								"border-b-2 py-2 text-sm font-medium transition-colors",
								location.pathname === link.href
									? "border-brand-navy text-brand-navy"
									: "border-transparent text-foreground/70 hover:text-brand-navy",
							)}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="hidden md:block">
					<Link
						to="/contact"
						className="inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-black/85"
					>
						Get in Touch
						<ArrowUpRight className="size-4" />
					</Link>
				</div>

				<button
					type="button"
					aria-label="Toggle menu"
					onClick={() => setOpen((v) => !v)}
					className="inline-flex size-10 items-center justify-center rounded-lg text-brand-navy md:hidden"
				>
					{open ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</nav>

			{open && (
				<div className="border-t border-black/5 px-5 py-4 md:hidden">
					<div className="flex flex-col gap-1">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.label}
								to={link.href}
								onClick={() => setOpen(false)}
								className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
							>
								{link.label}
							</Link>
						))}
						<Link
							to="/contact"
							onClick={() => setOpen(false)}
							className="mt-2 inline-flex items-center justify-center gap-2 bg-black px-5 py-3 text-sm font-semibold text-white"
						>
							Get in Touch
							<ArrowUpRight className="size-4" />
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}