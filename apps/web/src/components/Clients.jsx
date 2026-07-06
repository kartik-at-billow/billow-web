import { SectionHeading } from "@/components/SectionHeading";

/**
 * Client trust bar rendered from the uploaded logo assets in /public/clients.
 * Each logo is normalized to a uniform height cell via object-contain.
 * The Xterra logo ships as a white variant, so it gets inverted to read
 * on the light background.
 */
const CLIENTS = [
	{ src: "/clients/caltranslogo.png", alt: "Caltrans" },
	{ src: "/clients/DSH_header_logo.png", alt: "California Department of State Hospitals" },
	{ src: "/clients/calstrs_logo.avif", alt: "CalSTRS" },
	{ src: "/clients/california_public_utilities.png", alt: "California Public Utilities Commission" },
	{ src: "/clients/dmv_log.png", alt: "California DMV" },
	{ src: "/clients/shartsis_logo.svg", alt: "Shartsis" },
	{ src: "/clients/Xterra_Web-Logo_Horz-wht.svg", alt: "Xterra", invert: true },
];

export function Clients() {
	return (
		<section className="border-b border-black/5 py-10">
			<div className="mx-auto max-w-[1400px] px-5">
				<SectionHeading title="Our Clients" />
				<p className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
					Trusted by leading companies worldwide
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
					{CLIENTS.map((c) => (
						<div key={c.alt} className="flex h-20 w-48 items-center justify-center">
							<img
								src={c.src}
								alt={c.alt}
								loading="lazy"
								className={
									"max-h-full max-w-full object-contain" +
									(c.invert ? " invert" : "")
								}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
