import { Navbar } from "@/components/Navbar";
import { Expertise } from "@/components/Expertise";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Services() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<Expertise />
				<Stats />
				<CtaBand
					title="Ready to Discuss Your Project?"
					subtitle="Tell us which service fits your needs and we'll map out next steps together."
				/>
			</main>
			<Footer />
		</div>
	);
}
