import PageHeader from "../components/PageHeader.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ProcessSteps from "../components/ProcessStep.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { SERVICES } from "../lib/content.js";

export function meta() {
	return [
		{ title: "Services — Billow" },
		{ name: "description", content: "Design, engineering, and AI capabilities under one roof." },
	];
}

export default function Services() {
	return (
		<div>
			<PageHeader
				eyebrow="Services"
				title="Design, engineering & AI capabilities under one roof"
				intro="Everything you need to take a product from idea to scale, delivered by one senior, cross-functional team."
			/>

			<SectionWrapper className="pt-0 md:pt-0">
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
				<h2 className="mb-12 max-w-xl text-3xl font-bold tracking-tight text-foreground">How we work</h2>
				<ProcessSteps
					steps={[
						{ title: "Discover", description: "We dig into goals, users, and constraints to frame the right problem." },
						{ title: "Strategy", description: "Planning roadmap, positioning, and growth strategy." },
						{ title: "Design & Development", description: "Designing interfaces and building scalable solutions." },
						{ title: "Launch & Growth", description: "Launching and continuously optimizing performance." },
					]}
				/>
			</SectionWrapper>

			<CtaBand />
		</div>
	);
}
