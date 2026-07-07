// Consistent vertical rhythm + centered max-width container for every section.
export default function SectionWrapper({
	children,
	className = "",
	containerClassName = "",
	id,
	as = "section",
}) {
	const Tag = as;
	return (
		<Tag id={id} className={`w-full px-6 py-20 md:py-28 ${className}`}>
			<div className={`mx-auto w-full max-w-[1200px] ${containerClassName}`}>{children}</div>
		</Tag>
	);
}
