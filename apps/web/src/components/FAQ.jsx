import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@Billow-web/ui/lib/utils";

const FAQS = [
	{
		q: "Lightning-Fast Performance",
		a: "Every engagement is engineered for speed — from optimized build pipelines to edge-cached delivery. We benchmark against Core Web Vitals and ship experiences that feel instant on any device.",
	},
	{
		q: "Fully Customizable Components",
		a: "Our solutions are built on modular, reusable components so your product stays flexible. Swap themes, extend behavior, and adapt to new requirements without rewrites.",
	},
	{
		q: "Responsive by Default",
		a: "Mobile, tablet, and desktop layouts are treated as first-class citizens. Interfaces adapt fluidly across breakpoints with no compromise on usability.",
	},
	{
		q: "Tailwind CSS Powered",
		a: "We use a utility-first styling system for consistency and velocity, backed by a design-token foundation that keeps your brand cohesive everywhere.",
	},
	{
		q: "Dark Mode Support",
		a: "Accessible light and dark themes come standard, respecting system preferences and giving your users control over their viewing experience.",
	},
];

function FaqItem({ item, isOpen, onToggle }) {
	return (
		<div className="overflow-hidden rounded-xl border border-black/10 bg-muted/30">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={isOpen}
				className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
			>
				<span className="text-sm font-semibold text-brand-navy sm:text-base">{item.q}</span>
				<ChevronDown
					className={cn(
						"size-5 shrink-0 text-muted-foreground transition-transform duration-300",
						isOpen && "rotate-180 text-brand-green-dark",
					)}
				/>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.28, ease: "easeInOut" }}
					>
						<p className="px-5 pb-5 text-sm leading-relaxed text-foreground/70">{item.a}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export function FAQ() {
	const [open, setOpen] = useState(0);

	return (
		<section id="faq" className="bg-white py-14">
			<div className="mx-auto max-w-3xl px-5">
				<p className="text-center text-xs font-bold uppercase tracking-widest text-brand-navy/60">
					FAQ
				</p>
				<h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
					Frequently Asked Questions
				</h2>
				<p className="mx-auto mt-4 max-w-md text-center text-sm text-muted-foreground">
					Proactively answering FAQs boosts user confidence and cuts down on
					support tickets.
				</p>

				<div className="mt-8 flex flex-col gap-3">
					{FAQS.map((item, i) => (
						<FaqItem
							key={item.q}
							item={item}
							isOpen={open === i}
							onToggle={() => setOpen(open === i ? -1 : i)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
