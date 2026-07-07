import { motion } from "framer-motion";

// Scroll-triggered fade + rise. Motion budget: subtle, once per element, no bounce.
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
	const MotionTag = motion[as] || motion.div;
	return (
		<MotionTag
			className={className}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5, delay, ease: "easeOut" }}
		>
			{children}
		</MotionTag>
	);
}
