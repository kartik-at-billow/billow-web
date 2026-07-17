import {
	Cloud,
	Code2,
	Gauge,
	LayoutGrid,
	Rocket,
	Search,
	ShieldCheck,
	Users,
	Workflow,
} from "lucide-react";

// service detail copy is placeholder-grade for team size/engagement length,
// same spirit as the case study data — swap for real figures before launch.
// pricing was deliberately left out of the meta row (see SERVICES_DETAIL
// discussion): a specific number reads as a real commitment, not flavor text.
export const SERVICES = [
	{
		slug: "cloud-consulting",
		icon: Cloud,
		title: "Cloud Consulting",
		description:
			"Cloud strategy, migration planning and multi-cloud architecture services that modernize your infrastructure seamlessly.",
		eyebrow: "Service / Cloud Consulting",
		headline: (
			<>
				Cloud strategy, <span className="italic text-brand-navy">engineered to scale</span>.
			</>
		),
		intro:
			"Migration, architecture and cost optimization across Azure, AWS and Google Cloud — built by engineers who own the outcome, not just the runbook.",
		meta: { engagement: "8–16 weeks", teamSize: "2–5 people" },
		overview: {
			eyebrow: "Overview",
			headline: "Modernizing infrastructure that actually holds up under real load.",
			paragraphs: [
				"We plan and execute cloud migrations for organizations that can't afford downtime or surprise bills. Our cloud practice is led by engineers who've run production workloads at scale across finance, healthcare and public sector environments.",
				"You get one team, one migration plan, one point of accountability. Weekly checkpoints, transparent cost tracking, no vendor lock-in you didn't choose.",
			],
		},
		included: [
			{
				icon: Search,
				title: "Discovery & scoping",
				description:
					"Two-week paid discovery to map your current environment and define a realistic migration path, before any commitment to a timeline.",
			},
			{
				icon: Users,
				title: "Senior team, no bench",
				description:
					"Every engineer on your migration has shipped production cloud infrastructure before. No juniors learning on your workload.",
			},
			{
				icon: Gauge,
				title: "Cost budget",
				description:
					"We commit to a target monthly spend in writing, and instrument the environment to prove it post-migration.",
			},
			{
				icon: ShieldCheck,
				title: "Security & compliance",
				description:
					"Zero-trust network design and compliance mapping (CMMC, SOC 2) baked into the architecture from day one.",
			},
			{
				icon: Rocket,
				title: "Launch & handover",
				description:
					"Documented infrastructure-as-code and a runbook that lets your team take over the moment you're ready.",
			},
		],
	},
	{
		slug: "cybersecurity",
		icon: ShieldCheck,
		title: "Cybersecurity",
		description:
			"Zero-trust frameworks, penetration testing and compliance adherence to protect your most critical business assets.",
		eyebrow: "Service / Cybersecurity",
		headline: (
			<>
				Cybersecurity, <span className="italic text-brand-navy">proven under audit</span>.
			</>
		),
		intro:
			"Zero-trust architecture, penetration testing and compliance work for organizations that can't afford to get it wrong.",
		meta: { engagement: "6–12 weeks", teamSize: "2–4 people" },
		overview: {
			eyebrow: "Overview",
			headline: "Security built to survive contact with a real audit.",
			paragraphs: [
				"We harden systems for organizations where a breach isn't just costly, it's disqualifying. Our security practice is led by engineers who've carried CMMC, SOC 2 and HIPAA-adjacent engagements through to a clean audit.",
				"You get one team, one threat model, one point of accountability. Clear findings, prioritized remediation, no fear-based upselling.",
			],
		},
		included: [
			{
				icon: Search,
				title: "Discovery & scoping",
				description:
					"Two-week paid assessment to map your current exposure and define the shape of the engagement, before any commitment to a timeline.",
			},
			{
				icon: Users,
				title: "Senior team, no bench",
				description:
					"Every engineer on your engagement holds real-world incident response experience. No juniors running your penetration test.",
			},
			{
				icon: Gauge,
				title: "Compliance budget",
				description:
					"We commit to specific compliance targets (CMMC, SOC 2) in writing, and document evidence to prove them at audit.",
			},
			{
				icon: ShieldCheck,
				title: "Zero-trust design",
				description:
					"Identity-first network architecture and least-privilege access baked into every recommendation.",
			},
			{
				icon: Rocket,
				title: "Launch & handover",
				description:
					"Documented policies, tested controls and a runbook that lets your team maintain posture after we leave.",
			},
		],
	},
	{
		slug: "business-automation",
		icon: Workflow,
		title: "Business Automation",
		description:
			"Workflow automation, RPA and process optimization that eliminate inefficiencies and boost productivity at scale.",
		eyebrow: "Service / Business Automation",
		headline: (
			<>
				Automation, <span className="italic text-brand-navy">built to actually get used</span>.
			</>
		),
		intro:
			"Workflow automation and RPA that eliminate real manual hours, not just look good in a demo.",
		meta: { engagement: "6–10 weeks", teamSize: "2–4 people" },
		overview: {
			eyebrow: "Overview",
			headline: "Automating the busywork your team already complains about.",
			paragraphs: [
				"We build automation for teams drowning in manual, repetitive work. Our automation practice is led by engineers who've shipped RPA and workflow tooling across manufacturing, logistics and finance operations.",
				"You get one team, one process map, one point of accountability. Measured time savings, not vague efficiency promises.",
			],
		},
		included: [
			{
				icon: Search,
				title: "Discovery & scoping",
				description:
					"Two-week paid process audit to identify the highest-impact automation targets, before any commitment to a build.",
			},
			{
				icon: Users,
				title: "Senior team, no bench",
				description:
					"Every engineer on your build has shipped production automation before. No juniors experimenting on your workflow.",
			},
			{
				icon: Gauge,
				title: "Time-saved budget",
				description:
					"We commit to a target monthly hours-saved figure in writing, and measure it post-launch.",
			},
			{
				icon: ShieldCheck,
				title: "Error handling & monitoring",
				description:
					"Every automated workflow ships with failure alerts and a manual override path, not a silent black box.",
			},
			{
				icon: Rocket,
				title: "Launch & handover",
				description:
					"Documented workflows and a runbook that lets your team maintain and extend the automation after we leave.",
			},
		],
	},
	{
		slug: "custom-software-dev",
		icon: Code2,
		title: "Custom Software Dev",
		description:
			"End-to-end software development lifecycle services from design to deployment and ongoing maintenance.",
		eyebrow: "Service / Custom Software Dev",
		headline: (
			<>
				Custom software, <span className="italic text-brand-navy">taken seriously</span>.
			</>
		),
		intro:
			"Fast, accessible, product-grade applications built by senior engineers — with performance and accessibility budgets we commit to in writing.",
		meta: { engagement: "12–24 weeks", teamSize: "3–6 people" },
		overview: {
			eyebrow: "Overview",
			headline: "Engineering the software that actually holds up in production.",
			paragraphs: [
				"We build custom software for teams who need something more considered than a template and more accountable than an offshore team. Our engineering practice is led by senior engineers who have shipped at scale — startups, agencies and enterprise alike.",
				"You get one team, one codebase, one cadence. Weekly demos, honest reporting, no black boxes.",
			],
		},
		included: [
			{
				icon: Search,
				title: "Discovery & scoping",
				description:
					"Two-week paid discovery to define the shape of the build, before any commitment to a delivery timeline.",
			},
			{
				icon: Users,
				title: "Senior team, no bench",
				description: "Every engineer on your project has 8+ years of shipping experience. No juniors farmed out.",
			},
			{
				icon: Gauge,
				title: "Performance budget",
				description:
					"We commit to Core Web Vitals targets in writing, and instrument the app to prove them post-launch.",
			},
			{
				icon: ShieldCheck,
				title: "Accessibility & security",
				description:
					"WCAG 2.2 AA baseline. Threat-modelling and dependency review baked into the release process.",
			},
			{
				icon: Rocket,
				title: "Launch & handover",
				description:
					"Documented, tested code and a runbook that lets your team take over the moment you're ready.",
			},
		],
	},
	{
		slug: "modern-workplace",
		icon: LayoutGrid,
		title: "Modern Workplace",
		description:
			"Microsoft 365, Teams, collaboration tools and digital workspace solutions for today's hybrid workforce.",
		eyebrow: "Service / Modern Workplace",
		headline: (
			<>
				Modern Workplace, <span className="italic text-brand-navy">rolled out without the chaos</span>.
			</>
		),
		intro:
			"Microsoft 365, Teams and collaboration tooling rollouts that your staff actually adopts, not just receives a training email about.",
		meta: { engagement: "4–8 weeks", teamSize: "2–3 people" },
		overview: {
			eyebrow: "Overview",
			headline: "Rolling out tools your team will actually use.",
			paragraphs: [
				"We plan and execute workplace technology rollouts for organizations tired of low adoption and support-ticket floods. Our practice is led by engineers who've rolled out Microsoft 365 and Teams to teams ranging from dozens to thousands of seats.",
				"You get one team, one rollout plan, one point of accountability. Measured adoption, not just a completed migration checklist.",
			],
		},
		included: [
			{
				icon: Search,
				title: "Discovery & scoping",
				description:
					"Two-week paid assessment of your current tooling and workflows, before any commitment to a rollout timeline.",
			},
			{
				icon: Users,
				title: "Senior team, no bench",
				description:
					"Every engineer on your rollout has run enterprise Microsoft 365 deployments before. No juniors learning on your staff.",
			},
			{
				icon: Gauge,
				title: "Adoption budget",
				description:
					"We commit to a target support-ticket reduction in writing, and measure it post-rollout.",
			},
			{
				icon: ShieldCheck,
				title: "Security & access control",
				description:
					"Identity and access policies configured to your compliance needs from day one, not bolted on after.",
			},
			{
				icon: Rocket,
				title: "Launch & handover",
				description:
					"Documented configuration and a runbook that lets your IT team maintain the environment after we leave.",
			},
		],
	},
	{
		slug: "it-staffing",
		icon: Users,
		title: "IT Staffing",
		description:
			"Expert talent placement, contract staffing and team augmentation to scale your capabilities on demand.",
		eyebrow: "Service / IT Staffing",
		headline: (
			<>
				IT staffing, <span className="italic text-brand-navy">without the ramp-up tax</span>.
			</>
		),
		intro:
			"Vetted engineers embedded in your team within weeks, not months — with retention built into how we staff.",
		meta: { engagement: "Ongoing", teamSize: "1–8 people" },
		overview: {
			eyebrow: "Overview",
			headline: "Engineers who fit your team, not just your req.",
			paragraphs: [
				"We place engineers for teams who need to scale delivery without the months-long hiring cycle. Our staffing practice draws from the same senior engineer pool that runs our own client engagements, not a separate bench.",
				"You get direct access to the engineer, transparent rates, and a real onboarding plan. No black-box recruiting, no surprise turnover.",
			],
		},
		included: [
			{
				icon: Search,
				title: "Discovery & scoping",
				description:
					"A short intake call to define the exact skills and team fit you need, before any candidates are proposed.",
			},
			{
				icon: Users,
				title: "Senior team, no bench",
				description:
					"Every engineer we place has 5+ years of relevant production experience. No junior placements dressed up as seniors.",
			},
			{
				icon: Gauge,
				title: "Retention commitment",
				description:
					"We commit to a minimum engagement retention rate in writing, and replace at no cost if it's not met.",
			},
			{
				icon: ShieldCheck,
				title: "Fast ramp",
				description:
					"A structured onboarding plan gets placed engineers contributing within their first two weeks, not their first two months.",
			},
			{
				icon: Rocket,
				title: "Ongoing support",
				description: "A dedicated point of contact for the length of the engagement, not just at signing.",
			},
		],
	},
];
