import { useParams } from "react-router";

import Hero from "../components/Hero.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import NarrativeSection from "../components/NarrativeSection.jsx";
import StatRow from "../components/StatRow.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { CASE_STUDIES } from "../lib/content.js";

export function meta({ params }) {
	const study = CASE_STUDIES.find((c) => c.slug === params.slug);
	return [{ title: study ? `${study.client} — Billow` : "Case study — Billow" }];
}

export default function CaseStudyDetail() {
	const { slug } = useParams();
	const index = CASE_STUDIES.findIndex((c) => c.slug === slug);
	const study = index >= 0 ? CASE_STUDIES[index] : CASE_STUDIES[0];
	const next = CASE_STUDIES[(Math.max(index, 0) + 1) % CASE_STUDIES.length];

	return (
		<div>
			<Hero variant="static" eyebrow={study.client} title={study.title} image={study.image} imageAlt={study.client} />

			<SectionWrapper className="pb-0 pt-12 md:pb-0 md:pt-16">
				<Reveal>
					<div className="flex flex-wrap gap-x-10 gap-y-3 border-b border-border pb-10 text-sm">
						<div>
							<span className="font-semibold uppercase tracking-wider text-muted-foreground">Client</span>
							<p className="mt-1 text-foreground">{study.client}</p>
						</div>
						<div>
							<span className="font-semibold uppercase tracking-wider text-muted-foreground">Services</span>
							<p className="mt-1 text-foreground">{study.services}</p>
						</div>
						<div>
							<span className="font-semibold uppercase tracking-wider text-muted-foreground">Year</span>
							<p className="mt-1 text-foreground">{study.year}</p>
						</div>
					</div>
				</Reveal>
			</SectionWrapper>

			<NarrativeSection
				eyebrow="Challenge"
				title="Where things stood"
				body={study.challenge}
				image={`https://picsum.photos/seed/${study.slug}-challenge/800/600`}
				imageAlt="Challenge"
				imagePosition="right"
			/>
			<NarrativeSection
				eyebrow="Approach"
				title="How we tackled it"
				body={study.approach}
				image={`https://picsum.photos/seed/${study.slug}-approach/800/600`}
				imageAlt="Approach"
				imagePosition="left"
				className="bg-muted/40"
			/>
			<NarrativeSection
				eyebrow="Outcome"
				title="Where things landed"
				body={study.outcome}
				image={`https://picsum.photos/seed/${study.slug}-outcome/800/600`}
				imageAlt="Outcome"
				imagePosition="right"
			/>

			<SectionWrapper className="bg-muted/40">
				<StatRow stats={study.stats} />
			</SectionWrapper>

			<SectionWrapper className="pb-12 pt-12 md:pb-12 md:pt-16">
				<Reveal>
					<a
						href={`/work/${next.slug}`}
						className="group flex items-center justify-between border-t border-border pt-8 text-left"
					>
						<div>
							<span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
								Next case study
							</span>
							<p className="mt-1 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary">
								{next.client} — {next.title}
							</p>
						</div>
					</a>
				</Reveal>
			</SectionWrapper>

			<CtaBand />
		</div>
	);
}
