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
				<CaseStudies showFilters />
				<Clients />
				<CtaBand title="Your project belongs in this list. Let's start." />
			</main>
			<Footer />
		</div>
	);
}
