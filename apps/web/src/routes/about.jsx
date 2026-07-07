import Hero from "../components/Hero.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import NarrativeSection from "../components/NarrativeSection.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import StatRow from "../components/StatRow.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";

export function meta() {
	return [
		{ title: "About — Billow" },
		{ name: "description", content: "A software services agency partnering with teams to design, build, and scale exceptional digital products." },
	];
}

export default function About() {
	return (
		<div>
			<Hero
				variant="static"
				eyebrow="About Billow"
				title="We believe great software is built by small, senior teams"
				subtitle="Billow exists to give teams a partner that moves as fast and cares as much as they do."
			/>

			<NarrativeSection
				eyebrow="Our story"
				title="Founded to close the gap between agencies and in-house teams"
				body={[
					"Billow started because too many software projects got lost between slow agencies and overstretched in-house teams. We built the studio we wished we could hire — senior, focused, and fully accountable for outcomes.",
					"Today we partner with teams across design, engineering, and AI to ship products people actually use.",
				]}
				image="https://picsum.photos/seed/about-story/800/600"
				imageAlt="Billow team at work"
			/>

			<SectionWrapper className="bg-muted/40">
				<Reveal className="mb-12 max-w-xl">
					<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">What we value</h2>
				</Reveal>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[
						{ title: "Craft over speed-for-its-own-sake", description: "We move fast, but never at the cost of quality that lasts." },
						{ title: "Transparent by default", description: "You see progress, decisions, and tradeoffs as they happen." },
						{ title: "Senior on every project", description: "No junior hand-offs — the people who scope it, build it." },
						{ title: "Outcomes, not hours", description: "We're accountable to what ships, not just time logged." },
					].map((v) => (
						<Reveal key={v.title}>
							<FeatureCard {...v} />
						</Reveal>
					))}
				</div>
			</SectionWrapper>

			<SectionWrapper>
				<StatRow
					stats={[
						{ value: "4+", label: "Years in business" },
						{ value: "120+", label: "Projects delivered" },
						{ value: "40+", label: "Clients served" },
						{ value: "98%", label: "Client retention" },
					]}
				/>
			</SectionWrapper>

			<CtaBand />
		</div>
	);
}
