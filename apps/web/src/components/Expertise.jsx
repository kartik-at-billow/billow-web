import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@Billow-web/ui/lib/utils";

const TABS = [
	{
		id: "cloud-consulting",
		label: "Cloud Consulting",
		title: "Cloud Consulting",
		body: "Cloud strategy, migration planning and multi-cloud architecture services that modernize your infrastructure seamlessly.",
	},
	{
		id: "cybersecurity",
		label: "Cybersecurity",
		title: "Cybersecurity",
		body: "Zero-trust frameworks, penetration testing and compliance adherence to protect your most critical business assets.",
	},
	{
		id: "business-automation",
		label: "Business Automation",
		title: "Business Automation",
		body: "Workflow automation, RPA and process optimization that eliminate inefficiencies and boost productivity at scale.",
	},
	{
		id: "custom-software-dev",
		label: "Custom Software Dev",
		title: "Custom Software Dev",
		body: "End-to-end software development lifecycle services from design to deployment and ongoing maintenance.",
	},
	{
		id: "modern-workplace",
		label: "Modern Workplace",
		title: "Modern Workplace",
		body: "Microsoft 365, Teams, collaboration tools and digital workspace solutions for today's hybrid workforce.",
	},
	{
		id: "it-staffing",
		label: "IT Staffing",
		title: "IT Staffing",
		body: "Expert talent placement, contract staffing and team augmentation to scale your capabilities on demand.",
	},
];

export function Expertise() {
	// `selected` is the pinned tab (set on click); `hovered` is a temporary
	// preview (set on hover/focus). The panel shows the hovered tab while the
	// cursor is over a tab, and reverts to the selected one once it leaves.
	const [selected, setSelected] = useState("cloud-consulting");
	const [hovered, setHovered] = useState(null);
	const activeId = hovered ?? selected;
	const current = TABS.find((t) => t.id === activeId) ?? TABS[0];

	return (
		<section id="expertise" className="py-12">
			<div className="mx-auto max-w-[1400px] px-5">
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
					What We Do
				</p>
				<h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
					End-to-End IT Solutions Built for Your Business
				</h2>
				<p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
					From cloud migrations to cybersecurity tailored solutions that drive
					measurable growth and operational excellence.
				</p>

				<div className="mt-8 rounded-2xl bg-muted/40 p-4 ring-1 ring-black/5 sm:p-6">
					{/* Tab bar */}
					<div
						className="flex flex-wrap gap-x-2 gap-y-1 border-b border-black/10"
						onMouseLeave={() => setHovered(null)}
					>
						{TABS.map((tab) => {
							const isActive = tab.id === activeId;
							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setSelected(tab.id)}
									onMouseEnter={() => setHovered(tab.id)}
									onFocus={() => setHovered(tab.id)}
									onBlur={() => setHovered(null)}
									className={cn(
										"relative -mb-px px-3 py-3 text-xs font-medium transition-colors sm:text-sm",
										isActive
											? "text-brand-navy"
											: "text-muted-foreground hover:text-brand-navy",
									)}
								>
									{tab.label}
									{isActive && (
										<motion.span
											layoutId="expertise-underline"
											className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-brand-green"
										/>
									)}
								</button>
							);
						})}
					</div>

					{/* Panel */}
					<div className="flex min-h-[28rem] flex-col justify-center py-8">
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id}
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -12 }}
								transition={{ duration: 0.25 }}
							>
								<h3 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
									{current.title}
								</h3>
								<p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70">
									{current.body}
								</p>
								<a
									href="#contact"
									className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark transition-colors hover:text-brand-green"
								>
									Learn more about {current.label}
									<ArrowRight className="size-4" />
								</a>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
