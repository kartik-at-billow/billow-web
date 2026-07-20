import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@Billow-web/ui/lib/utils";

/**
 * Light/dark toggle. Deliberately session-only — no localStorage, no
 * next-themes. State always initializes to light, so every fresh page
 * load or refresh resets to light regardless of what was toggled before.
 */
export function ThemeToggle({ className }) {
	const [isDark, setIsDark] = useState(false);

	function toggle() {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle("dark", next);
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className={cn(
				"inline-flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-muted hover:text-brand-navy",
				className,
			)}
		>
			{isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
		</button>
	);
}
