import { Navbar } from "@/components/Navbar";
import { CaseStudies } from "@/components/CaseStudies";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Work() {
	return (
		<div className="min-h-screen bg-white text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<CaseStudies />
				<CtaBand
					title="Have a Project in Mind?"
					subtitle="Let's talk about how we can deliver similar results for your business."
				/>
			</main>
			<Footer />
		</div>
	);
}
