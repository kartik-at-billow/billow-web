import { Navbar } from "@/components/Navbar";
import { CaseStudies } from "@/components/CaseStudies";
import { Clients } from "@/components/Clients";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Work() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<CaseStudies />
				<Clients />
				<CtaBand
					title="Have a Project in Mind?"
					subtitle="Let's talk about how we can deliver similar results for your business."
				/>
			</main>
			<Footer />
		</div>
	);
}
