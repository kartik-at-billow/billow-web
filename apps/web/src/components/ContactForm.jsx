import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin } from "lucide-react";

const FIELD =
	"w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-muted-foreground/70 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15";
const LABEL = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-800";

const INFO = [
	{ icon: Mail, label: "Email Us", value: "hello@billowllc.com" },
	{ icon: MapPin, label: "Office", value: "Sacramento, CA · Remote Nationwide" },
	{ icon: Clock, label: "Response Time", value: "Within 24 Business Hours" },
];

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
		<section id="contact" className="scroll-mt-20 bg-blue-50 py-16">
			<div className="mx-auto max-w-[1400px] px-5">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
						Get in Touch
					</p>
					<h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
						Let's Build Something Great Together
					</h2>
					<p className="mt-4 text-sm text-muted-foreground sm:text-base">
						Tell us about your project and our team will get back to you within
						one business day.
					</p>
				</div>

				<div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-3">
					{/* Form */}
					<div className="rounded-2xl border border-black/10 bg-muted/30 p-6 ring-1 ring-black/5 sm:p-8 lg:col-span-2">
						{submitted ? (
							<motion.div
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								className="flex flex-col items-center py-8 text-center"
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
							<form onSubmit={handleSubmit} className="flex flex-col gap-5">
								<div className="grid gap-5 sm:grid-cols-2">
									<div>
										<label htmlFor="cf-name" className={LABEL}>
											Full Name
											<Required />
										</label>
										<input
											id="cf-name"
											name="name"
											type="text"
											required
											placeholder="Jane Smith"
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
								</div>

								<div className="grid gap-5 sm:grid-cols-2">
									<div>
										<label htmlFor="cf-company" className={LABEL}>
											Company
										</label>
										<input
											id="cf-company"
											name="company"
											type="text"
											placeholder="Acme Corp"
											className={FIELD}
										/>
									</div>
									<div>
										<label htmlFor="cf-phone" className={LABEL}>
											Phone Number
										</label>
										<input
											id="cf-phone"
											name="phone"
											type="tel"
											placeholder="+1 (555) 000-0000"
											className={FIELD}
										/>
									</div>
								</div>

								<div>
									<label htmlFor="cf-service" className={LABEL}>
										Service Interested In
									</label>
									<select id="cf-service" name="service" className={FIELD} defaultValue="">
										<option value="" disabled>
											Select a service...
										</option>
										<option>Cloud Consulting</option>
										<option>Cybersecurity</option>
										<option>Business Automation</option>
										<option>Custom Software Dev</option>
										<option>Modern Workplace</option>
										<option>IT Staffing</option>
									</select>
								</div>

								<div>
									<label htmlFor="cf-message" className={LABEL}>
										Message
										<Required />
									</label>
									<textarea
										id="cf-message"
										name="message"
										required
										rows={5}
										placeholder="Tell us about your project, timeline, or any questions..."
										className={FIELD + " resize-y"}
									/>
								</div>

								<button
									type="submit"
									className="inline-flex items-center justify-center gap-2 self-start bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
								>
									Submit
									<ArrowRight className="size-4" />
								</button>
							</form>
						)}
					</div>

					{/* Contact info cards */}
					<div className="flex flex-col gap-4">
						{INFO.map((item) => (
							<div
								key={item.label}
								className="rounded-2xl border border-black/10 bg-white p-6 ring-1 ring-black/5"
							>
								<item.icon className="size-6 text-neutral-900" />
								<p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
									{item.label}
								</p>
								<p className="mt-1 font-semibold text-neutral-900">{item.value}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
