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

// placeholder photography (Lorem Picsum) and synthetic project details — swap
// for real project imagery, clients and write-ups once available
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
		metrics: [
			{ value: "40%", label: "Cost reduction" },
			{ value: "60d", label: "Delivery" },
			{ value: "99.9%", label: "Uptime" },
		],
		image: "https://picsum.photos/seed/billow-case-01/1200/900",
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
		metrics: [
			{ value: "100%", label: "Compliance" },
			{ value: "3mo", label: "Delivery" },
			{ value: "Zero", label: "Incidents" },
		],
		image: "https://picsum.photos/seed/billow-case-02/1200/900",
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
		metrics: [
			{ value: "320h", label: "Saved/mo" },
			{ value: "6wk", label: "ROI hit" },
			{ value: "98%", label: "Accuracy" },
		],
		image: "https://picsum.photos/seed/billow-case-03/1200/900",
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
		metrics: [
			{ value: "250k+", label: "Users" },
			{ value: "45d", label: "Delivery" },
			{ value: "60%", label: "Fewer tickets" },
		],
		image: "https://picsum.photos/seed/billow-case-04/1200/900",
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
		metrics: [
			{ value: "100%", label: "MFA coverage" },
			{ value: "4mo", label: "Delivery" },
			{ value: "Zero", label: "Breaches" },
		],
		image: "https://picsum.photos/seed/billow-case-05/1200/900",
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
		metrics: [
			{ value: "30%", label: "Faster filing" },
			{ value: "90d", label: "Delivery" },
			{ value: "99.9%", label: "Uptime" },
		],
		image: "https://picsum.photos/seed/billow-case-06/1200/900",
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
		metrics: [
			{ value: "3.2k", label: "Seats" },
			{ value: "60d", label: "Rollout" },
			{ value: "35%", label: "Fewer tickets" },
		],
		image: "https://picsum.photos/seed/billow-case-07/1200/900",
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
		metrics: [
			{ value: "8", label: "Engineers" },
			{ value: "2wk", label: "Ramp" },
			{ value: "100%", label: "Retention" },
		],
		image: "https://picsum.photos/seed/billow-case-08/1200/900",
	},
];
