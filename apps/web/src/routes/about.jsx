import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { AboutStory } from "@/components/AboutStory";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function About() {
	return (
		<div className="min-h-screen bg-blue-50 text-foreground antialiased">
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
				<CtaBand title="Interested in working with us? Let's have a proper conversation." />
			</main>
			<Footer />
		</div>
	);
}
