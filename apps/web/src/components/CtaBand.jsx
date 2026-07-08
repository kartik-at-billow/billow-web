import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

// closing strip used at the end of every page, sitting directly above the
// footer (also bg-blue-50) so the two read as one continuous block
export function CtaBand({ title = "Have a project in mind? Let's build it together." }) {
	return (
		<section className="bg-blue-50 py-20">
			<div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center">
				<h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
					{title}
				</h2>
				<Link
					to="/contact"
					className="inline-flex shrink-0 items-center gap-2 bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
				>
					Start a project
					<ArrowUpRight className="size-4" />
				</Link>
			</div>
		</section>
	);
}
