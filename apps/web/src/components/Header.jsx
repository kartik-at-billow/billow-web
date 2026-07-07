import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button.jsx";

const NAV_LINKS = [
	{ label: "Services", href: "/services" },
	{ label: "Work", href: "/work" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export default function Header({ links = NAV_LINKS }) {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background">
			<div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-6">
				{/* Logo */}
				<a href="/" className="flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-foreground">
					Billow
					<span className="text-primary">.</span>
				</a>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-9 md:flex">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-primary"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="hidden md:block">
					<Button href="/contact" variant="ink" size="sm">
						Get in touch
					</Button>
				</div>

				{/* Mobile toggle */}
				<button
					type="button"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
					className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
				>
					{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className="border-t border-border bg-background md:hidden">
					<nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={() => setOpen(false)}
								className="rounded-md px-2 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
							>
								{link.label}
							</a>
						))}
						<Button href="/contact" variant="ink" size="sm" className="mt-2 w-full">
							Get in touch
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
