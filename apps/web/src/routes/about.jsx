import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { AboutStory } from "@/components/AboutStory";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function About() {
	return (
		<div className="min-h-screen bg-white text-foreground antialiased">
			<Navbar />
			<main>
				<PageHeader
					eyebrow="About Billow"
					title="Committed to Your Success"
					subtitle="A technology partner built by engineers who have spent their careers solving exactly these problems."
				/>
				<AboutStory />
				<Stats />
				<Partners />
				<CtaBand
					title="Want to Work With Us?"
					subtitle="Tell us about your project and let's see if we're a good fit."
				/>
			</main>
			<Footer />
		</div>
	);
}
