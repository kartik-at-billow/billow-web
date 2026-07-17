import { motion } from "framer-motion";
import {
	ArrowRight,
	ArrowUpRight,
	Cloud,
	Code2,
	LayoutGrid,
	ShieldCheck,
	Users,
	Workflow,
} from "lucide-react";
import { Link } from "react-router";
import { SectionIntro } from "@/components/SectionIntro";

const SERVICES = [
	{
		icon: Cloud,
		title: "Cloud Consulting",
		description:
			"Cloud strategy, migration planning and multi-cloud architecture services that modernize your infrastructure seamlessly.",
	},
	{
		icon: ShieldCheck,
		title: "Cybersecurity",
		description:
			"Zero-trust frameworks, penetration testing and compliance adherence to protect your most critical business assets.",
	},
	{
		icon: Workflow,
		title: "Business Automation",
		description:
			"Workflow automation, RPA and process optimization that eliminate inefficiencies and boost productivity at scale.",
	},
	{
		icon: Code2,
		title: "Custom Software & AI/ML Solution",
		description:
			"End-to-end software development lifecycle services from design to deployment and ongoing maintenance.",
	},
	{
		icon: LayoutGrid,
		title: "Modern Workplace",
		description:
			"Microsoft 365, Teams, collaboration tools and digital workspace solutions for today's hybrid workforce.",
	},
	{
		icon: Users,
		title: "IT Staffing",
		description:
			"Expert talent placement, contract staffing and team augmentation to scale your capabilities on demand.",
	},
];

function ServiceCard({ icon: Icon, number, title, description, index }) {
	return (
		<motion.a
			href="/contact"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, delay: index * 0.06 }}
			className="group flex flex-col rounded-xl border border-neutral-300 bg-blue-50 p-7 transition-colors duration-300 hover:border-brand-navy hover:bg-brand-navy-fixed dark:border-white/10 dark:bg-brand-midnight"
		>
			<div className="flex items-center justify-between">
				<span className="flex size-12 items-center justify-center rounded-lg bg-brand-sky text-brand-navy-fixed transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
					<Icon className="size-6" />
				</span>

			</div>

			<h3 className="mt-6 text-lg font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-white dark:text-white">
				{title}
			</h3>
			<p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-white/75">
				{description}
			</p>

			<span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-colors duration-300 group-hover:text-white">
				Learn more
				<ArrowUpRight className="size-4" />
			</span>
		</motion.a>
	);
}

export function Expertise({ limit, showViewAll = false, headingLevel = "h2" }) {
	const services = limit ? SERVICES.slice(0, limit) : SERVICES;

	return (
		<section id="expertise">
			<SectionIntro
				as={headingLevel}
				eyebrow="Services / Capabilities"
				eyebrowAction={
					showViewAll && (
						<Link
							to="/services"
							className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 underline decoration-neutral-900/30 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:text-white dark:decoration-white/30 dark:hover:decoration-white"
						>
							All Services
							<ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
						</Link>
					)
				}
				headline={
					<>
						Delivering excellence <span className="italic text-brand-navy">across every surface</span> of your product.
					</>
				}
				description="From cloud migrations to cybersecurity tailored solutions that drive measurable growth and operational excellence."
				showDivider={!limit}
			/>

			<div className="mx-auto max-w-[1400px] px-5">
				<div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${limit ? "mt-10" : "mt-16"}`}>
					{services.map((service, i) => (
						<ServiceCard key={service.title} {...service} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
