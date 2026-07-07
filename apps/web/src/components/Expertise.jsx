import { motion } from "framer-motion";
import {
	ArrowUpRight,
	Cloud,
	Code2,
	LayoutGrid,
	ShieldCheck,
	Users,
	Workflow,
} from "lucide-react";

const SERVICES = [
	{
		icon: Cloud,
		number: "01",
		title: "Cloud Consulting",
		description:
			"Cloud strategy, migration planning and multi-cloud architecture services that modernize your infrastructure seamlessly.",
	},
	{
		icon: ShieldCheck,
		number: "02",
		title: "Cybersecurity",
		description:
			"Zero-trust frameworks, penetration testing and compliance adherence to protect your most critical business assets.",
	},
	{
		icon: Workflow,
		number: "03",
		title: "Business Automation",
		description:
			"Workflow automation, RPA and process optimization that eliminate inefficiencies and boost productivity at scale.",
	},
	{
		icon: Code2,
		number: "04",
		title: "Custom Software Dev",
		description:
			"End-to-end software development lifecycle services from design to deployment and ongoing maintenance.",
	},
	{
		icon: LayoutGrid,
		number: "05",
		title: "Modern Workplace",
		description:
			"Microsoft 365, Teams, collaboration tools and digital workspace solutions for today's hybrid workforce.",
	},
	{
		icon: Users,
		number: "06",
		title: "IT Staffing",
		description:
			"Expert talent placement, contract staffing and team augmentation to scale your capabilities on demand.",
	},
];

function ServiceCard({ icon: Icon, number, title, description, index }) {
	return (
		<motion.a
			href="#contact"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.45, delay: index * 0.06 }}
			className="group flex flex-col rounded-xl border border-black/10 bg-white p-7 transition-colors duration-300 hover:border-brand-navy hover:bg-brand-navy"
		>
			<div className="flex items-center justify-between">
				<span className="flex size-12 items-center justify-center rounded-lg bg-brand-sky text-brand-navy transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
					<Icon className="size-6" />
				</span>
				<span className="font-display text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-white/50">
					{number}
				</span>
			</div>

			<h3 className="mt-6 text-lg font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-white">
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

export function Expertise() {
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

				<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{SERVICES.map((service, i) => (
						<ServiceCard key={service.title} {...service} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
