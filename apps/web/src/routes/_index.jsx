import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Expertise } from "@/components/Expertise";
import { Stats } from "@/components/Stats";
import { WhyBillow } from "@/components/WhyBillow";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

export function meta() {
	return [
		{ title: "Billow LLC — We Turn Ideas Into Powerful Digital Products" },
		{
			name: "description",
			content:
				"From strategy to launch, Billow LLC partners with you to build exceptional digital experiences that drive real impact.",
		},
	];
}

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-foreground antialiased">
			<Navbar />
			<main>
				<Hero />
				<Clients />
				<Expertise />
				<Stats />
				<WhyBillow />
				<CaseStudies />
				<ContactForm />
				<FAQ />
				<Partners />
			</main>
			<Footer />
		</div>
	);
}
