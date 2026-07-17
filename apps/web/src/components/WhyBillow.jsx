import { motion } from "framer-motion";
import { Compass, PenTool, Rocket, LifeBuoy, HandHelping } from "lucide-react";

const STEPS = [
	{
		icon: Compass,
		title: "Discovery & Strategy",
		body: "We start by understanding your business goals, pain points, and technology landscape in depth before recommending any solution.",
	},
	{
		icon: PenTool,
		title: "Solution Design",
		body: "Our experts architect a tailored solution with clear milestones, timelines, and success metrics agreed upfront.",
	},
	{
		icon: Rocket,
		title: "Build and Deploy",
		body: "Agile implementation with weekly check-ins, live demos, and transparent progress reporting throughout.",
	},
	{
		icon: HandHelping,
		title: "Support and Grow",
		body: "Ongoing managed support, training, and optimization to maximize long-term business value after launch.",
	},
];

export function WhyBillow() {
	return (
		<section id="why-billow" className="relative bg-blue-50 dark:bg-brand-midnight">
			<div className="bg-brand-navy-fixed pb-14 pt-20">
				<div className="mx-auto max-w-[1400px] px-5">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
							How We Work
						</p>
						<h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
							A four-step process, <span className="italic text-blue-300">tuned</span> <br /> by every engagement.
						</h2>
						<p className="mt-4 max-w-xl text-sm text-white/60 sm:text-base">
							A structured four-phase methodology, customized to align with your project's specific objectives and requirements.
						</p>
					</div>

					<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{STEPS.map((step, i) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.45, delay: i * 0.08 }}
								className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-sky/40 hover:bg-white/[0.07]"
							>
								<div>
									<h3 className="text-base font-semibold text-white">{step.title}</h3>
									<p className="mt-3 text-sm leading-relaxed text-white/60">{step.body}</p>
								</div>
								<div className="mt-8 flex size-12 items-center justify-center rounded-lg bg-white/5 text-brand-sky ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-brand-sky group-hover:text-brand-navy-fixed">
									<step.icon className="size-6" />
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
