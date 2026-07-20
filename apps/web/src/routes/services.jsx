import { Navbar } from "@/components/Navbar";
import { Expertise } from "@/components/Expertise";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Services() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased dark:bg-brand-midnight">
			<Navbar />
			<main className="pt-24">
				<Expertise headingLevel="h1" />
				<Stats />
				<CtaBand 
					title="Not sure which service fits? Let's talk it through." 
					buttonText="Book a Call"
				/>
			</main>
			<Footer />
		</div>
	);
}
