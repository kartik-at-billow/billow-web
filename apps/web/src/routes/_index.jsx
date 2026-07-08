import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Expertise } from "@/components/Expertise";
import { Stats } from "@/components/Stats";
import { WhyBillow } from "@/components/WhyBillow";
import { CaseStudies } from "@/components/CaseStudies";
import { CtaBand } from "@/components/CtaBand";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<div className="relative z-0 min-h-screen bg-blue-50 text-foreground antialiased">
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-blue" />
			<Navbar />
			<main>
				<Hero />
				<Expertise />
				<Stats bordered={false} />
				<Clients />
				<WhyBillow />
				<CaseStudies limit={2} showViewAll />
				<CtaBand />
				<Partners />
			</main>
			<Footer />
		</div>
	);
}
