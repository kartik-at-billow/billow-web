import { Navbar } from "@/components/Navbar";
import { SectionIntro } from "@/components/SectionIntro";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Contact() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<SectionIntro
					eyebrow="Get in Touch"
					headline={
						<>
							Let's build <span className="italic text-brand-navy">something great</span> together.
						</>
					}
					description="Tell us about your project and our team will get back to you within one business day."
				/>
				<ContactForm />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}
