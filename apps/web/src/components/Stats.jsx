import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
	{ value: 500, suffix: "+", label: "Projects Delivered" },
	{ value: 100, suffix: "+", label: "Expert Consultants" },
	{ value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
	{ value: 10, suffix: "+", label: "Years of Excellence" },
	{ value: 40, suffix: "+", label: "Technologies Mastered" },
];

function useCountUp(target, active, decimals = 0, duration = 1400) {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (!active) return;
		let raf;
		let start;
		const step = (ts) => {
			if (start === undefined) start = ts;
			const progress = Math.min((ts - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(target * eased);
			if (progress < 1) raf = requestAnimationFrame(step);
			else setValue(target);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [active, target, duration]);
	return decimals ? value.toFixed(decimals) : Math.round(value);
}

function Stat({ stat, active }) {
	const display = useCountUp(stat.value, active, stat.decimals ?? 0);
	return (
		<div className="text-center">
			<div className="text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
				{display}
				{stat.suffix}
			</div>
			<div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
				{stat.label}
			</div>
		</div>
	);
}

export function Stats() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section className="mt-10 border-y border-neutral-300 bg-blue-50 py-10 dark:border-white/10 dark:bg-brand-midnight">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ duration: 0.5 }}
				className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 sm:grid-cols-3 md:grid-cols-5"
			>
				{STATS.map((stat) => (
					<Stat key={stat.label} stat={stat} active={inView} />
				))}
			</motion.div>
		</section>
	);
}
