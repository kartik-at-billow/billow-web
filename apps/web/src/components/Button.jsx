// Shared button primitive. Renders an <a> for navigation, or a real <button>
// when a `type` (submit/button/reset) is passed so form submission works.
// variant: "primary" (blue), "ink" (black pill), "outline", "ghost", "light"
export default function Button({
	children,
	href = "#",
	type,
	variant = "primary",
	size = "md",
	className = "",
	icon: Icon,
	...rest
}) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

	const sizes = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-sm",
		lg: "px-8 py-4 text-base",
	};

	const variants = {
		primary: "bg-primary text-primary-foreground hover:bg-blue-700",
		ink: "bg-ink text-ink-foreground hover:bg-neutral-800",
		outline:
			"border border-input text-foreground bg-transparent hover:border-primary hover:text-primary",
		ghost: "text-foreground hover:text-primary",
		light: "bg-white text-navy hover:bg-neutral-100",
	};

	const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

	// A `type` (submit/button/reset) means this belongs inside a <form> — render
	// a real <button> so form submission actually fires. Otherwise render an <a>.
	if (type) {
		return (
			<button type={type} className={classes} {...rest}>
				{children}
				{Icon ? <Icon className="h-4 w-4" /> : null}
			</button>
		);
	}

	return (
		<a href={href} className={classes} {...rest}>
			{children}
			{Icon ? <Icon className="h-4 w-4" /> : null}
		</a>
	);
}
