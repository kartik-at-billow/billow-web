import { Cloud, Code2, Cpu, Palette, ShieldCheck, Users } from "lucide-react";

const img = (seed, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const SERVICES = [
	{
		slug: "web-app-development",
		icon: Code2,
		number: "01",
		title: "Web & App Development",
		description: "Fast, reliable products built on a modern, scalable stack.",
		overview: [
			"We design and build web and mobile applications on modern, battle-tested stacks — from the first prototype to a production system that scales.",
			"A good fit for teams that need a senior engineering partner to ship a new product or rebuild a legacy one without slowing down.",
		],
		features: [
			"Custom web & mobile apps",
			"API design & integration",
			"Performance optimization",
			"Accessibility & QA baked in",
		],
	},
	{
		slug: "ui-ux-design",
		icon: Palette,
		number: "02",
		title: "UI/UX Design",
		description: "Award-winning design that puts user experience at the heart of every interaction.",
		overview: [
			"We research, prototype, and refine interfaces until the experience feels inevitable — grounded in how people actually use the product.",
			"Good for teams that need a design partner from early concept through a polished, tested UI.",
		],
		features: [
			"User research & testing",
			"Wireframes & prototypes",
			"Design systems",
			"Handoff-ready UI kits",
		],
	},
	{
		slug: "ai-machine-learning",
		icon: Cpu,
		number: "03",
		title: "AI & Machine Learning",
		description: "AI & ML solutions enabling smarter decisions, automated workflows, and faster innovation.",
		overview: [
			"We build AI-powered features that turn your data into an advantage — from recommendation engines to automation pipelines.",
			"Good for teams looking to add intelligent features without hiring a dedicated ML team.",
		],
		features: [
			"Model selection & fine-tuning",
			"LLM-powered features",
			"Data pipelines",
			"Evaluation & monitoring",
		],
	},
	{
		slug: "devops-cloud",
		icon: Cloud,
		number: "04",
		title: "DevOps & Cloud",
		description: "CI/CD, infrastructure automation, and monitoring — for faster, safer releases.",
		overview: [
			"We set up infrastructure and pipelines that let your team ship confidently, multiple times a day.",
			"Good for teams outgrowing manual deploys or looking to reduce infrastructure overhead.",
		],
		features: [
			"CI/CD pipelines",
			"Infrastructure as code",
			"Monitoring & alerting",
			"Cost & performance tuning",
		],
	},
	{
		slug: "staff-augmentation",
		icon: Users,
		number: "05",
		title: "Staff Augmentation",
		description: "Quickly scale your team with vetted engineers — available in your time zone.",
		overview: [
			"Senior engineers who plug straight into your existing team and workflow, ramping fast with minimal overhead.",
			"Good for teams that need to scale capacity quickly without a lengthy hiring process.",
		],
		features: [
			"Vetted senior engineers",
			"Flexible engagement length",
			"Time-zone aligned",
			"Direct integration with your team",
		],
	},
	{
		slug: "qa-security",
		icon: ShieldCheck,
		number: "06",
		title: "QA & Security",
		description: "Testing and hardening baked into every release.",
		overview: [
			"We build testing and security review into your release process, so issues get caught before they reach production.",
			"Good for teams that need to raise release quality and reduce risk without slowing down delivery.",
		],
		features: [
			"Automated test suites",
			"Manual QA & exploratory testing",
			"Security audits",
			"Release hardening",
		],
	},
];

export const CASE_STUDIES = [
	{
		slug: "hudle",
		client: "Hudle",
		title: "Booking platform for sports venues",
		tags: ["Product", "Mobile"],
		image: img("work1"),
		year: "2024",
		services: "Product Design, Mobile Engineering",
		challenge:
			"Hudle needed a single platform where players could discover, compare, and book sports venues — replacing a patchwork of phone calls and spreadsheets.",
		approach:
			"We designed a booking flow that surfaces the right venue in seconds, then built a mobile-first app on a scalable backend that could handle real-time availability.",
		outcome:
			"Hudle launched with a clean, fast booking experience and has since expanded to new cities without re-architecting the platform.",
		stats: [
			{ value: "3x", label: "Faster bookings" },
			{ value: "40+", label: "Venues onboarded" },
			{ value: "4.8", label: "App store rating" },
		],
	},
	{
		slug: "lumina",
		client: "Lumina",
		title: "Battery management dashboard",
		tags: ["Web", "Data Viz"],
		image: img("work2"),
		year: "2023",
		services: "Web Development, Data Visualization",
		challenge:
			"Lumina's engineers were tracking battery health across thousands of units in spreadsheets, with no way to spot problems before failure.",
		approach:
			"We built a real-time dashboard that visualizes fleet-wide battery health, with alerts tuned to catch anomalies early.",
		outcome:
			"Lumina's team now catches degrading units weeks earlier, cutting unplanned downtime significantly.",
		stats: [
			{ value: "60%", label: "Faster issue detection" },
			{ value: "10k+", label: "Units monitored" },
			{ value: "99.9%", label: "Dashboard uptime" },
		],
	},
	{
		slug: "vertex",
		client: "Vertex",
		title: "AI-assisted design system",
		tags: ["AI", "Design"],
		image: img("work3"),
		year: "2024",
		services: "AI & ML, Design Systems",
		challenge:
			"Vertex's design team was spending hours manually keeping design tokens in sync across a growing library of products.",
		approach:
			"We built an AI-assisted tool that flags inconsistencies and suggests token updates automatically as designs evolve.",
		outcome:
			"Vertex cut design-system maintenance time dramatically and shipped consistent UI across every product line.",
		stats: [
			{ value: "70%", label: "Less manual upkeep" },
			{ value: "12", label: "Products unified" },
			{ value: "2 weeks", label: "To first rollout" },
		],
	},
	{
		slug: "northwind",
		client: "Northwind",
		title: "Logistics platform rebuild",
		tags: ["Web", "DevOps"],
		image: img("list1"),
		year: "2022",
		services: "Web Development, DevOps & Cloud",
		challenge:
			"Northwind's legacy logistics platform couldn't handle peak-season load and required manual deploys that risked downtime.",
		approach:
			"We rebuilt the platform on modern infrastructure with automated CI/CD, migrating traffic over with zero downtime.",
		outcome:
			"Northwind now handles peak season traffic comfortably and ships updates multiple times a week instead of once a month.",
		stats: [
			{ value: "5x", label: "Peak load capacity" },
			{ value: "0", label: "Downtime during migration" },
			{ value: "20+", label: "Deploys per month" },
		],
	},
	{
		slug: "nimbus",
		client: "Nimbus",
		title: "Customer support AI copilot",
		tags: ["AI", "SaaS"],
		image: img("list2"),
		year: "2023",
		services: "AI & ML, Web Development",
		challenge:
			"Nimbus's support team was drowning in repetitive tickets, with response times slipping as the customer base grew.",
		approach:
			"We built an AI copilot that drafts responses from past tickets and documentation, with a human always in the loop before sending.",
		outcome:
			"Nimbus's team resolves tickets faster while keeping the same quality bar, freeing them up for harder problems.",
		stats: [
			{ value: "45%", label: "Faster resolution" },
			{ value: "3x", label: "Tickets per agent" },
			{ value: "92%", label: "Customer satisfaction" },
		],
	},
];
