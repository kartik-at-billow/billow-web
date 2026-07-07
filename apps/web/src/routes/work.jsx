import PageHeader from "../components/PageHeader.jsx";
import SectionWrapper from "../components/SectionWrapper.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { CASE_STUDIES } from "../lib/content.js";

export function meta() {
	return [
		{ title: "Work — Billow" },
		{ name: "description", content: "Case studies from teams we've partnered with." },
	];
}

export default function Work() {
	return (
		<div>
			<PageHeader
				eyebrow="Work"
				title="Case studies from teams we've partnered with"
				intro="A look at the products we've helped design, build, and scale."
			/>

			<SectionWrapper className="pt-0 md:pt-0">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{CASE_STUDIES.map((w) => (
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
