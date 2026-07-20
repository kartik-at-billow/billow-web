import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@Billow-web/ui/lib/utils";

/**
 * Light/dark toggle. `theme` is undefined until after mount (next-themes
 * reads the persisted preference from localStorage on the client), so the
 * icon is only rendered once mounted to avoid briefly showing the wrong one.
 */
export function ThemeToggle({ className }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className={cn(
				"inline-flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-muted hover:text-brand-navy",
				className,
			)}
		>
			{mounted && (isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />)}
		</button>
	);
}
