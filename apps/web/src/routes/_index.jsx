import { Layers, PenTool, Rocket, Search } from "lucide-react";

import Hero from "../components/Hero.jsx";
import LogoStrip from "../components/LogoStrip.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import StatRow from "../components/StatRow.jsx";
import NarrativeSection from "../components/NarrativeSection.jsx";
import ProcessSteps from "../components/ProcessStep.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { CASE_STUDIES, SERVICES } from "../lib/content.js";

export function meta() {
	return [
		{ title: "Billow — Software services, done right" },
		{ name: "description", content: "Billow is a software services agency partnering with teams to design, build, and scale exceptional digital products." },
	];
}

export default function Home() {
	const featuredWork = CASE_STUDIES.slice(0, 3);

	return (
		<div>
			<Hero variant="carousel" />

			<LogoStrip />

			<SectionWrapper id="services">
				<Reveal className="mb-12 max-w-xl">
					<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
						Design, engineering & AI capabilities under one roof
					</h2>
				</Reveal>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{SERVICES.map((s) => (
						<Reveal key={s.slug}>
							<ServiceCard
								icon={s.icon}
								number={s.number}
								title={s.title}
								description={s.description}
								href={`/services/${s.slug}`}
							/>
						</Reveal>
					))}
				</div>
			</SectionWrapper>

			<SectionWrapper className="bg-muted/40">
				<StatRow
					stats={[
						{ value: "120+", label: "Products shipped" },
						{ value: "15", label: "Years combined" },
						{ value: "40+", label: "Team members" },
						{ value: "98%", label: "Client retention" },
					]}
				/>
			</SectionWrapper>

			<NarrativeSection
				eyebrow="Who we are"
				title="A partner from first sketch to production"
				body={[
					"Billow is a software services agency that works as an extension of your team. We combine design, engineering, and AI to build products people love.",
					"No handoffs, no silos — just a focused group of specialists shipping real outcomes.",
				]}
				image="https://picsum.photos/seed/narrative/800/600"
				imageAlt="The Billow team collaborating"
				cta={{ label: "About Billow", href: "/about" }}
			/>

			<SectionWrapper className="bg-muted/40">
				<h2 className="mb-12 max-w-xl text-3xl font-bold tracking-tight text-foreground">How we work</h2>
				<ProcessSteps
					steps={[
						{ title: "Discover", description: "We dig into goals, users, and constraints to frame the right problem." },
						{ title: "Design", description: "We prototype and refine until the experience feels inevitable." },
						{ title: "Build", description: "We ship in tight iterations with quality built in from day one." },
						{ title: "Scale", description: "We monitor, optimize, and grow the product alongside you." },
					]}
				/>
			</SectionWrapper>

			<SectionWrapper>
				<Reveal className="mb-12 max-w-xl">
					<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Why teams work with us</h2>
				</Reveal>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{[
						{ icon: Rocket, title: "Fast delivery", description: "Momentum from week one with weekly, visible progress." },
						{ icon: Search, title: "Deep discovery", description: "We understand the why before writing a line of code." },
						{ icon: PenTool, title: "Craft-led", description: "Details matter — in the pixels and in the codebase." },
						{ icon: Layers, title: "Full-stack", description: "One team across design, frontend, backend, and infra." },
					].map((f) => (
						<Reveal key={f.title}>
							<FeatureCard {...f} />
						</Reveal>
					))}
				</div>
			</SectionWrapper>

			<SectionWrapper id="work" className="bg-muted/40">
				<Reveal className="mb-12 max-w-xl">
					<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Featured work</h2>
				</Reveal>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{featuredWork.map((w) => (
						<Reveal key={w.slug}>
							<CaseStudyCard
								client={w.client}
								title={w.title}
								tags={w.tags}
								image={w.image}
								imageAlt={`${w.client} case study`}
								href={`/work/${w.slug}`}
							/>
						</Reveal>
					))}
				</div>
			</SectionWrapper>

			<CtaBand />
		</div>
	);
}
