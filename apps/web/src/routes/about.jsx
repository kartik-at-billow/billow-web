import { Navbar } from "@/components/Navbar";
import { SectionIntro } from "@/components/SectionIntro";
import { AboutStory } from "@/components/AboutStory";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function About() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
			<Navbar />
			<main className="pt-24">
				<SectionIntro
					eyebrow="About Billow"
					headline={
						<>
							Committed to <span className="italic text-brand-navy">your success.</span>
						</>
					}
					description="A technology partner built by engineers who have spent their careers solving exactly these problems."
				/>
				<AboutStory />
				<Stats />
				<Partners />
				<CtaBand title="Interested in working with us? Let's have a proper conversation." />
			</main>
			<Footer />
		</div>
	);
}
