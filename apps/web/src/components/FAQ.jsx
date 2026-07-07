import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@Billow-web/ui/lib/utils";

const FAQS = [
	{
		q: "What services do you offer?",
		a: "We provide end-to-end IT solutions including cloud migration, cybersecurity, AI & automation, managed IT services, application development, and digital transformation consulting tailored to your business needs.",
	},
	{
		q: "How do you ensure the security of our data?",
		a: "Security is built into every engagement through Zero Trust principles, encryption, identity management, continuous monitoring, and industry best practices to protect your business.",
	},
	{
		q: "Can you help migrate our existing systems to the cloud?",
		a: "Yes. We assess your current infrastructure, create a migration strategy, minimize downtime, and ensure a secure transition to cloud platforms like Microsoft Azure and AWS.",
	},
	{
		q: "Do you provide ongoing support after deployment?",
		a: "Absolutely. We offer managed support, maintenance, monitoring, performance optimization, and regular updates to ensure your systems continue running smoothly.",
	},
	{
		q: "What cloud platforms do you support?",
		a: "We work with leading cloud providers including Microsoft Azure, Amazon Web Services (AWS), and hybrid cloud environments based on your business needs.",
	},
];

function FaqItem({ item, isOpen, onToggle }) {
	return (
		<div className="overflow-hidden rounded-xl border border-black/10 bg-muted/30">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={isOpen}
				className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
			>
				<span className="text-sm font-semibold text-brand-navy sm:text-base">{item.q}</span>
				<ChevronDown
					className={cn(
						"size-5 shrink-0 text-muted-foreground transition-transform duration-300",
						isOpen && "rotate-180 text-brand-blue",
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
				<h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
					Frequently Asked Questions
				</h2>

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
