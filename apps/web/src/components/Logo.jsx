import { Link } from "react-router";
import { cn } from "@Billow-web/ui/lib/utils";

const MASK_STYLE = {
	maskImage: "url(/billow_logo.svg)",
	maskSize: "contain",
	maskRepeat: "no-repeat",
	maskPosition: "left center",
	WebkitMaskImage: "url(/billow_logo.svg)",
	WebkitMaskSize: "contain",
	WebkitMaskRepeat: "no-repeat",
	WebkitMaskPosition: "left center",
};

/**
 * Billow LLC brand logo. In dark mode, a plain CSS invert() on the raster
 * asset produces off-brand yellow/brown (the source has more than one hue,
 * so inverting each channel independently scrambles them) -- rendering it as
 * a mask instead uses only the shape/alpha of the asset with a flat
 * background-color, guaranteeing a clean solid-white mark regardless of the
 * source's actual colors.
 */
export function Logo({ className }) {
	return (
		<Link
			to="/"
			aria-label="Billow LLC — Committed to Your Success"
			className="inline-flex items-center"
		>
			<img
				src="/billow_logo.svg"
				alt=""
				aria-hidden="true"
				className={cn("h-10 w-auto select-none dark:hidden", className)}
			/>
			<span
				aria-hidden="true"
				style={MASK_STYLE}
				className={cn(
					"hidden h-10 aspect-[2172/724] select-none bg-white dark:block",
					className,
				)}
			/>
		</Link>
	);
}
