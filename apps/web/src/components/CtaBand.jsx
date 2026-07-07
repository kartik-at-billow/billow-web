import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// slim closing strip used at the end of every page to funnel toward /contact
export function CtaBand({
	title = "Let's Build Something Great Together",
	subtitle = "Tell us about your project and our team will get back to you within one business day.",
}) {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-2xl px-5 text-center">
				<h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
					{title}
				</h2>
				<p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
				<Link
					to="/contact"
					className="mt-8 inline-flex items-center gap-2 bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
				>
					Get in Touch
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</section>
	);
}
