import { useParams } from "react-router";

import Hero from "../components/Hero.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import TwoColGrid from "../components/TwoColGrid.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { CASE_STUDIES, SERVICES } from "../lib/content.js";

export function meta({ params }) {
	const service = SERVICES.find((s) => s.slug === params.slug);
	return [{ title: service ? `${service.title} — Billow` : "Service — Billow" }];
}

export default function ServiceDetail() {
	const { slug } = useParams();
	const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];
	const relatedWork = CASE_STUDIES.slice(0, 2);

	return (
		<div>
			<Hero variant="static" eyebrow="Service" title={service.title} subtitle={service.description} />

			<SectionWrapper>
				<TwoColGrid
					left={
						<Reveal>
							<h2 className="text-2xl font-bold tracking-tight text-foreground">Overview</h2>
							{service.overview.map((p, i) => (
								<p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
									{p}
								</p>
							))}
						</Reveal>
					}
					right={
						<Reveal delay={0.1}>
							<img
								src={`https://picsum.photos/seed/${service.slug}/800/600`}
								alt={service.title}
								className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
							/>
						</Reveal>
					}
				/>
			</SectionWrapper>

			<SectionWrapper className="bg-muted/40">
				<Reveal className="mb-12 max-w-xl">
					<h2 className="text-3xl font-bold tracking-tight text-foreground">What's included</h2>
				</Reveal>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{service.features.map((feature) => (
						<Reveal key={feature}>
							<FeatureCard icon={service.icon} title={feature} description="" />
						</Reveal>
					))}
				</div>
			</SectionWrapper>

			<SectionWrapper>
				<Reveal className="mb-12 max-w-xl">
					<h2 className="text-3xl font-bold tracking-tight text-foreground">Related work</h2>
				</Reveal>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{relatedWork.map((w) => (
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
