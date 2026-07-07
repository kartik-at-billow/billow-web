import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

import PageHeader from "../components/PageHeader.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import TwoColGrid from "../components/TwoColGrid.jsx";
import FormField from "../components/FormField.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";

export function meta() {
	return [
		{ title: "Contact — Billow" },
		{ name: "description", content: "Tell us about your project and we'll get back within one business day." },
	];
}

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", service: "design", message: "" });
	const [submitted, setSubmitted] = useState(false);
	const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div>
			<PageHeader eyebrow="Contact" title="Let's talk" intro="Tell us about your project and we'll get back within one business day." />

			<SectionWrapper className="pt-0 md:pt-0">
				<TwoColGrid
					left={
						<Reveal>
							<form className="flex flex-col gap-5" onSubmit={onSubmit}>
								<FormField label="Full name" name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" required />
								<FormField label="Email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" required />
								<FormField
									label="Service"
									name="service"
									type="select"
									value={form.service}
									onChange={onChange}
									options={[
										{ value: "design", label: "Design" },
										{ value: "engineering", label: "Engineering" },
										{ value: "ai", label: "AI & ML" },
									]}
								/>
								<FormField label="Message" name="message" type="textarea" value={form.message} onChange={onChange} placeholder="What are you building?" required />
								<Button type="submit" variant="primary" size="lg" className="self-start">
									Send message
								</Button>

								{submitted && (
									<p className="rounded-xl bg-success-soft px-4 py-3 text-sm text-success">
										Thanks — we'll be in touch within one business day.
									</p>
								)}
							</form>
						</Reveal>
					}
					right={
						<Reveal delay={0.1}>
							<div className="flex flex-col gap-6 rounded-2xl border border-border bg-muted/40 p-8">
								<div className="flex items-start gap-3">
									<Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
									<div>
										<p className="text-sm font-semibold text-foreground">Email</p>
										<a href="mailto:hello@billow.studio" className="text-sm text-muted-foreground hover:text-primary">
											hello@billow.studio
										</a>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
									<div>
										<p className="text-sm font-semibold text-foreground">Location</p>
										<p className="text-sm text-muted-foreground">San Francisco, CA</p>
									</div>
								</div>
								<p className="text-sm leading-relaxed text-muted-foreground">
									We typically respond within one business day.
								</p>
							</div>
						</Reveal>
					}
				/>
			</SectionWrapper>
		</div>
	);
}
