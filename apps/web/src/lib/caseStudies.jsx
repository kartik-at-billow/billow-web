export const INDUSTRIES = [
	"All",
	"Public Sector",
	"Financial Services",
	"Healthcare",
	"Manufacturing",
	"Legal",
];

export const SERVICES = [
	"All",
	"Cloud Consulting",
	"Cybersecurity",
	"Business Automation",
	"Custom Software Dev",
	"Modern Workplace",
	"IT Staffing",
];

// placeholder photography (hand-picked, tech-relevant Unsplash photos) and
// synthetic project details — swap for real project imagery, clients and
// write-ups once available. `detail` powers the /work/:slug detail page;
// the top-level fields power the listing cards (CaseCard) unchanged.
export const CASE_STUDIES = [
	{
		slug: "azure-migration-credit-union",
		title: "Full Azure Cloud Migration for Regional Credit Union",
		client: "Regional Credit Union",
		year: 2024,
		industry: "Financial Services",
		service: "Cloud Consulting",
		description:
			"Full infrastructure migration to Azure with zero downtime and a 40% reduction in infrastructure spend.",
		image: "https://images.unsplash.com/photo-1782094673136-5198a372980c?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Financial Services",
			headline: (
				<>
					Migrating a credit union's entire estate to{" "}
					<span className="italic text-brand-navy">Azure, with zero downtime</span>.
				</>
			),
			intro:
				"A ground-up infrastructure migration for a regional credit union running on aging on-prem hardware — cut cloud spend by 40% without a single disruption to member-facing services.",
			meta: {
				client: "Regional Credit Union",
				services: "Cloud Migration · Cost Optimization · DevOps",
				year: 2024,
				team: "5 people, 60 days",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "Core banking infrastructure was outgrowing its own hardware.",
					description:
						"The credit union's on-prem data center was nearing end of life, with no clear path to scale for growing member volume. Compliance requirements ruled out a lift-and-shift, and downtime windows were effectively zero.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "A phased migration, validated at every step.",
					description:
						"We mapped every workload, sequenced a phased cutover by risk tier, and ran shadow environments in parallel until each service matched production behavior exactly before the final switch.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "A leaner, faster estate the internal team now runs alone.",
					description:
						"The full estate moved to Azure in 60 days with zero unplanned downtime. Infrastructure spend dropped 40%, and the credit union's own ops team has owned the environment ever since.",
				},
			],
			results: {
				headline: (
					<>
						A migration that <span className="italic text-brand-navy">paid for itself</span> immediately.
					</>
				),
				stats: [
					{ value: "40", suffix: "%", label: "Cost reduction" },
					{ value: "60", suffix: "d", label: "Delivery" },
					{ value: "99.9", suffix: "%", label: "Uptime" },
					{ value: "0", suffix: "", label: "Unplanned outages" },
				],
			},
		},
	},
	{
		slug: "cmmc-compliance-government-contractor",
		title: "CMMC Level 2 Compliance for Government Contractor",
		client: "Government Contractor",
		year: 2023,
		industry: "Public Sector",
		service: "Cybersecurity",
		description:
			"Achieved CMMC Level 2 certification in three months with zero audit findings.",
		image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Public Sector",
			headline: (
				<>
					Reaching CMMC Level 2 <span className="italic text-brand-navy">with zero audit findings</span>.
				</>
			),
			intro:
				"A defense contractor needed full CMMC Level 2 certification to keep bidding on federal contracts — we closed every control gap and passed audit on the first attempt.",
			meta: {
				client: "Government Contractor",
				services: "Compliance · Security Architecture · Policy",
				year: 2023,
				team: "4 people, 3 months",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "A federal contract deadline, and a security program built ad hoc.",
					description:
						"The contractor's existing controls were a patchwork of legacy tools and undocumented processes. CMMC Level 2 certification was a hard requirement to keep bidding on new federal work, with no room to slip the timeline.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Gap analysis first, remediation second, documentation throughout.",
					description:
						"We ran a full control-by-control gap assessment against the CMMC framework, prioritized fixes by audit risk, and built the policy documentation in parallel so nothing was reconstructed after the fact.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "Certified on the first pass, with a program that scales.",
					description:
						"The contractor passed its CMMC Level 2 audit with zero findings in three months, and now has a documented security program its own team maintains going forward.",
				},
			],
			results: {
				headline: (
					<>
						Compliance, <span className="italic text-brand-navy">done right the first time</span>.
					</>
				),
				stats: [
					{ value: "100", suffix: "%", label: "Compliance" },
					{ value: "3", suffix: "mo", label: "Delivery" },
					{ value: "0", suffix: "", label: "Audit findings" },
					{ value: "0", suffix: "", label: "Security incidents" },
				],
			},
		},
	},
	{
		slug: "rpa-manufacturing-automation",
		title: "RPA Automation Eliminates 320 Monthly Manual Hours",
		client: "Manufacturing Client",
		year: 2024,
		industry: "Manufacturing",
		service: "Business Automation",
		description:
			"Automated 320 hours of manual work per month across finance and logistics operations.",
		image: "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Manufacturing",
			headline: (
				<>
					Eliminating 320 hours a month of <span className="italic text-brand-navy">manual busywork</span>.
				</>
			),
			intro:
				"A manufacturing client's finance and logistics teams were buried in repetitive manual entry — we automated it end to end and had the ROI proven inside six weeks.",
			meta: {
				client: "Manufacturing Client",
				services: "Process Automation · RPA · Systems Integration",
				year: 2024,
				team: "3 people, 8 weeks",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "320 hours a month lost to copy-paste work.",
					description:
						"Finance and logistics staff were manually reconciling data across disconnected systems every day — slow, repetitive, and error-prone work that pulled skilled people away from higher-value tasks.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Automate the repeatable, leave judgment calls to people.",
					description:
						"We mapped every manual workflow, automated the purely mechanical steps with RPA bots, and left exception handling and judgment calls with the humans who understood the business context.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "The team got its time back, almost overnight.",
					description:
						"320 hours a month came off the team's plate within six weeks of go-live, with data accuracy actually improving over the manual process it replaced.",
				},
			],
			results: {
				headline: (
					<>
						Hours back, <span className="italic text-brand-navy">accuracy up</span>.
					</>
				),
				stats: [
					{ value: "320", suffix: "h", label: "Saved per month" },
					{ value: "6", suffix: "wk", label: "Time to ROI" },
					{ value: "98", suffix: "%", label: "Accuracy" },
					{ value: "2", suffix: "", label: "Teams automated" },
				],
			},
		},
	},
	{
		slug: "citizen-services-portal-modernization",
		title: "Citizen Services Portal Modernization for State Transportation Agency",
		client: "State Transportation Agency",
		year: 2025,
		industry: "Public Sector",
		service: "Custom Software Dev",
		description:
			"Rebuilt a legacy citizen portal serving 250,000+ residents, cutting support tickets by 60%.",
		image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Public Sector",
			headline: (
				<>
					Rebuilding a citizen portal <span className="italic text-brand-navy">250,000 residents rely on</span>.
				</>
			),
			intro:
				"A state transportation agency's public-facing portal hadn't been touched in over a decade. We rebuilt it from the ground up without a day of downtime for residents.",
			meta: {
				client: "State Transportation Agency",
				services: "Product Strategy · Web · Design System",
				year: 2025,
				team: "6 people, 45 days",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "A decade-old portal that residents had learned to avoid.",
					description:
						"The existing citizen portal was slow, hard to navigate, and generated a steady stream of support calls for things residents should have been able to do themselves online.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Redesign around the five tasks residents actually came for.",
					description:
						"We pulled real support-ticket data to find the handful of tasks driving most of the volume, redesigned those flows first, and rebuilt the rest of the portal around the same clearer pattern.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "Fewer calls, faster tasks, no disruption to residents.",
					description:
						"The new portal launched in 45 days serving 250,000+ residents, and support tickets dropped 60% in the first full month live.",
				},
			],
			results: {
				headline: (
					<>
						A portal residents <span className="italic text-brand-navy">actually use</span>.
					</>
				),
				stats: [
					{ value: "250", suffix: "k+", label: "Residents served" },
					{ value: "45", suffix: "d", label: "Delivery" },
					{ value: "60", suffix: "%", label: "Fewer support tickets" },
					{ value: "0", suffix: "", label: "Downtime days" },
				],
			},
		},
	},
	{
		slug: "zero-trust-hospital-network",
		title: "Zero-Trust Network Overhaul for Regional Hospital System",
		client: "Regional Hospital System",
		year: 2024,
		industry: "Healthcare",
		service: "Cybersecurity",
		description:
			"Rolled out a zero-trust network architecture across every clinical site with no downtime.",
		image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Healthcare",
			headline: (
				<>
					Rolling out zero-trust across every <span className="italic text-brand-navy">clinical site, live</span>.
				</>
			),
			intro:
				"A regional hospital system needed to close serious network gaps without ever taking a clinical system offline. We rebuilt the architecture around zero-trust while care kept running.",
			meta: {
				client: "Regional Hospital System",
				services: "Network Security · Zero Trust · MFA Rollout",
				year: 2024,
				team: "5 people, 4 months",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "A flat network, dozens of sites, and no room for downtime.",
					description:
						"The hospital system's network trusted anything inside its perimeter by default, a real exposure across dozens of clinical sites. Any fix had to happen without interrupting patient care.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Segment by risk, roll out site by site, verify before cutover.",
					description:
						"We segmented the network by clinical risk, piloted zero-trust policies at a single low-risk site, and rolled it out site by site — validating each one before moving to the next.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "Full zero-trust coverage, with care never interrupted.",
					description:
						"Every clinical site now runs under a zero-trust architecture with full MFA coverage, rolled out in four months with zero incidents and zero care disruptions.",
				},
			],
			results: {
				headline: (
					<>
						Security that never <span className="italic text-brand-navy">touched patient care</span>.
					</>
				),
				stats: [
					{ value: "100", suffix: "%", label: "MFA coverage" },
					{ value: "4", suffix: "mo", label: "Delivery" },
					{ value: "0", suffix: "", label: "Breaches" },
					{ value: "0", suffix: "", label: "Care disruptions" },
				],
			},
		},
	},
	{
		slug: "case-management-law-firm",
		title: "Case Management Platform Migration for Regional Law Firm",
		client: "Regional Law Firm",
		year: 2023,
		industry: "Legal",
		service: "Custom Software Dev",
		description:
			"Migrated a decades-old case management system without losing a single record.",
		image: "https://images.unsplash.com/photo-1763128516808-785e80c1dd68?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Legal",
			headline: (
				<>
					Migrating decades of case records <span className="italic text-brand-navy">without losing one</span>.
				</>
			),
			intro:
				"A regional law firm's case management system was decades old and irreplaceable in the wrong hands. We migrated every record to a modern platform intact.",
			meta: {
				client: "Regional Law Firm",
				services: "Platform Migration · Data Integrity · Web",
				year: 2023,
				team: "4 people, 90 days",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "A system too old to patch, too critical to lose.",
					description:
						"The firm's case management system had been extended and patched for decades. It was fragile, unsupported, and held every active and historical case record the firm had — zero tolerance for data loss.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Migrate in shadow, reconcile every record, cut over once verified.",
					description:
						"We ran the legacy and new systems in parallel, reconciled every migrated record against the source, and only cut over once every case file matched exactly.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "A modern platform, with every record intact.",
					description:
						"The firm now runs on a modern case management platform with filing 30% faster than before, and not a single record was lost in the migration.",
				},
			],
			results: {
				headline: (
					<>
						Modernized, <span className="italic text-brand-navy">without the risk</span>.
					</>
				),
				stats: [
					{ value: "30", suffix: "%", label: "Faster filing" },
					{ value: "90", suffix: "d", label: "Delivery" },
					{ value: "99.9", suffix: "%", label: "Uptime" },
					{ value: "0", suffix: "", label: "Records lost" },
				],
			},
		},
	},
	{
		slug: "modern-workplace-pension-fund",
		title: "Modern Workplace Rollout for State Pension Fund",
		client: "State Pension Fund",
		year: 2025,
		industry: "Financial Services",
		service: "Modern Workplace",
		description:
			"Rolled out Microsoft 365 and Teams to 3,200 employees with a 35% drop in IT tickets.",
		image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Financial Services",
			headline: (
				<>
					Rolling out Microsoft 365 to <span className="italic text-brand-navy">3,200 employees</span>.
				</>
			),
			intro:
				"A state pension fund needed its entire workforce moved onto a modern collaboration stack, without swamping its own IT desk in the process.",
			meta: {
				client: "State Pension Fund",
				services: "Modern Workplace · Microsoft 365 · Change Management",
				year: 2025,
				team: "6 people, 60 days",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "A workforce on legacy tools, and an IT desk bracing for impact.",
					description:
						"Employees were spread across outdated email and file-sharing tools, and the internal IT team expected a wave of support tickets the moment any rollout began.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Wave-based rollout, backed by real training, not just an email.",
					description:
						"We rolled out Microsoft 365 and Teams in waves by department, paired every wave with hands-on training sessions, and staffed extra support during each go-live week.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "A smoother rollout than IT expected, with fewer tickets after.",
					description:
						"All 3,200 employees were migrated within 60 days, and IT ticket volume actually dropped 35% once the rollout settled in.",
				},
			],
			results: {
				headline: (
					<>
						A rollout IT <span className="italic text-brand-navy">didn't dread</span>.
					</>
				),
				stats: [
					{ value: "3.2", suffix: "k", label: "Seats migrated" },
					{ value: "60", suffix: "d", label: "Rollout" },
					{ value: "35", suffix: "%", label: "Fewer IT tickets" },
					{ value: "0", suffix: "", label: "Rollback incidents" },
				],
			},
		},
	},
	{
		slug: "staffing-life-sciences-platform",
		title: "On-Demand Engineering Team for Life Sciences Platform Launch",
		client: "Life Sciences Company",
		year: 2024,
		industry: "Healthcare",
		service: "IT Staffing",
		description:
			"Embedded eight engineers to launch a new platform on a compressed timeline.",
		image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=900&fit=crop&q=80&auto=format",
		detail: {
			eyebrow: "Case Study / Healthcare",
			headline: (
				<>
					Embedding a team of eight to <span className="italic text-brand-navy">hit an immovable launch date</span>.
				</>
			),
			intro:
				"A life sciences company had a hard launch date and not enough engineers to hit it. We embedded a full team inside two weeks and shipped on time.",
			meta: {
				client: "Life Sciences Company",
				services: "IT Staffing · Embedded Engineering",
				year: 2024,
				team: "8 engineers, 2 week ramp",
			},
			sections: [
				{
					number: "01",
					eyebrow: "The Challenge",
					headline: "A launch date that wasn't moving, and a team short eight engineers.",
					description:
						"The client's platform launch was tied to external commitments that couldn't slip, but their own hiring pipeline couldn't fill the gap in time.",
				},
				{
					number: "02",
					eyebrow: "Our Approach",
					headline: "Embed, don't outsource — inside their stack, their standups, their code.",
					description:
						"We placed eight engineers directly inside the client's existing teams, working in their stack and their process from day one rather than running a separate offshore workstream.",
				},
				{
					number: "03",
					eyebrow: "The Outcome",
					headline: "Launched on time, with a team the client wanted to keep.",
					description:
						"The platform launched on schedule, and the client retained the full embedded team past the original engagement.",
				},
			],
			results: {
				headline: (
					<>
						On time, <span className="italic text-brand-navy">and asked to stay</span>.
					</>
				),
				stats: [
					{ value: "8", suffix: "", label: "Engineers embedded" },
					{ value: "2", suffix: "wk", label: "Ramp time" },
					{ value: "100", suffix: "%", label: "Retention" },
					{ value: "0", suffix: "", label: "Missed deadlines" },
				],
			},
		},
	},
];
