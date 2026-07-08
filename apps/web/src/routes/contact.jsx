import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Contact() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<ContactForm />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}
