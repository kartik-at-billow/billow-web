import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";

const FIELD =
	"w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 outline-none transition placeholder:text-muted-foreground/60 focus:border-brand-navy";
const LABEL = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-500";

const COUNTRY_CODES = [
	{ value: "+1", label: "US +1" },
	{ value: "+1", label: "CA +1" },
	{ value: "+44", label: "UK +44" },
	{ value: "+91", label: "IN +91" },
	{ value: "+61", label: "AU +61" },
];

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];

function Required() {
	return <span className="text-brand-navy"> *</span>;
}

export function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		// No backend wired up yet — capture values and show confirmation.
		setSubmitted(true);
	}

	return (
		<section id="contact" className="scroll-mt-20 bg-blue-50 pb-16">
			<div className="mx-auto max-w-[1400px] px-5">
				<div className="grid gap-16 lg:grid-cols-2">
					{/* Form */}
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
							01 / Project Inquiry
						</p>
						<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
							A few details to get us started.
						</h2>

						<div className="mt-10">
							{submitted ? (
								<motion.div
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex flex-col items-start py-8"
								>
									<CheckCircle2 className="size-12 text-brand-green" />
									<h3 className="mt-4 text-xl font-bold text-neutral-900">
										Thanks — we've got your message!
									</h3>
									<p className="mt-2 max-w-sm text-sm text-muted-foreground">
										Our team will reach out to you shortly. In the meantime, feel
										free to explore our services.
									</p>
									<button
										type="button"
										onClick={() => setSubmitted(false)}
										className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:underline"
									>
										Send another message
									</button>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className="flex flex-col gap-6">
									<div>
										<label htmlFor="cf-name" className={LABEL}>
											Your Name
											<Required />
										</label>
										<input
											id="cf-name"
											name="name"
											type="text"
											required
											placeholder="Jane Doe"
											className={FIELD}
										/>
									</div>

									<div>
										<label htmlFor="cf-email" className={LABEL}>
											Work Email
											<Required />
										</label>
										<input
											id="cf-email"
											name="email"
											type="email"
											required
											placeholder="jane@company.com"
											className={FIELD}
										/>
									</div>

									<div className="grid grid-cols-[7.5rem_1fr] gap-4">
										<div>
											<label htmlFor="cf-country" className={LABEL}>
												Country
											</label>
											<select id="cf-country" name="countryCode" className={FIELD} defaultValue="+1">
												{COUNTRY_CODES.map((c) => (
													<option key={c.label} value={c.value}>
														{c.label}
													</option>
												))}
											</select>
										</div>
										<div>
											<label htmlFor="cf-phone" className={LABEL}>
												Mobile Number
											</label>
											<input
												id="cf-phone"
												name="phone"
												type="tel"
												placeholder="555 123 4567"
												className={FIELD}
											/>
										</div>
									</div>

									<div>
										<label htmlFor="cf-company" className={LABEL}>
											Company Name
										</label>
										<input
											id="cf-company"
											name="company"
											type="text"
											placeholder="Company, Inc."
											className={FIELD}
										/>
									</div>

									<div className="grid gap-6 sm:grid-cols-2">
										<div>
											<label htmlFor="cf-size" className={LABEL}>
												Company Size
											</label>
											<select id="cf-size" name="companySize" className={FIELD} defaultValue="">
												<option value="" disabled>
													Select company size
												</option>
												{COMPANY_SIZES.map((size) => (
													<option key={size}>{size}</option>
												))}
											</select>
										</div>
										<div>
											<label htmlFor="cf-service" className={LABEL}>
												Service Interested In
											</label>
											<select id="cf-service" name="service" className={FIELD} defaultValue="">
												<option value="" disabled>
													Select a service
												</option>
												<option>Cloud Consulting</option>
												<option>Cybersecurity</option>
												<option>Business Automation</option>
												<option>Custom Software Dev</option>
												<option>Modern Workplace</option>
												<option>IT Staffing</option>
											</select>
										</div>
									</div>

									<div>
										<label htmlFor="cf-message" className={LABEL}>
											Tell Us About Your Project
											<Required />
										</label>
										<textarea
											id="cf-message"
											name="message"
											required
											rows={4}
											placeholder="What are you building, and where are you stuck?"
											className={`${FIELD} resize-y`}
										/>
									</div>

									<div className="mt-2 pt-6">
										<button
											type="submit"
											className="inline-flex items-center justify-center gap-2 bg-black px-8 py-3.5 text-sm font-semibold text-white  transition-transform hover:-translate-y-0.5"
										>
											Send Inquiry
											<ArrowUpRight className="size-4" />
										</button>
									</div>
								</form>
							)}
						</div>
					</div>

					{/* Studio / contact info */}
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
							02 / Studio
						</p>
						<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
							Or find us in person.
						</h2>
						<p className="mt-4 text-sm text-muted-foreground sm:text-base">
							We typically respond within 24 business hours.
						</p>

						<div className="mt-8 flex flex-col gap-4">
							<div className="rounded-xl bg-muted/30 border border-neutral-300 p-6">
								<MapPin className="size-5 text-neutral-900" />
								<p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
									Office
								</p>
								<p className="mt-1 font-semibold text-neutral-900">
									Sacramento, CA · Remote Nationwide
								</p>
							</div>

							<div className="rounded-xl border border-neutral-300 p-6">
								<Mail className="size-5 text-neutral-900" />
								<p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
									Direct Email
								</p>
								<a
									href="mailto:hello@billowllc.com"
									className="mt-1 block font-semibold text-neutral-900 transition-colors hover:text-brand-navy"
								>
									General - hello@billowllc.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
