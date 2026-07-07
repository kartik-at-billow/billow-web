import { Navbar } from "@/components/Navbar";
import { Expertise } from "@/components/Expertise";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Services() {
	return (
		<div className="min-h-screen bg-white text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<Expertise />
				<CtaBand
					title="Ready to Discuss Your Project?"
					subtitle="Tell us which service fits your needs and we'll map out next steps together."
				/>
			</main>
			<Footer />
		</div>
	);
}
