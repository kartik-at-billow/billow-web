// Generic 2-column layout. Pass `left` and `right` nodes.
// `reverse` flips the visual order on desktop while keeping source order for a11y.
export default function TwoColGrid({
	left,
	right,
	reverse = false,
	className = "",
	align = "start",
	gap = "gap-10 md:gap-16",
}) {
	const alignItems =
		align === "center" ? "items-center" : align === "end" ? "items-end" : "items-start";

	return (
		<div className={`grid grid-cols-1 md:grid-cols-2 ${gap} ${alignItems} ${className}`}>
			<div className={reverse ? "md:order-2" : "md:order-1"}>{left}</div>
			<div className={reverse ? "md:order-1" : "md:order-2"}>{right}</div>
		</div>
	);
}
