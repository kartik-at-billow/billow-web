// Label + input/textarea/select + error message wrapper.
export default function FormField({
	label,
	name,
	type = "text",
	value,
	onChange,
	placeholder,
	required = false,
	options = [],
	error,
}) {
	const baseInputClasses =
		"w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-sm font-medium text-foreground">
				{label}
				{required && <span className="text-primary"> *</span>}
			</label>

			{type === "textarea" ? (
				<textarea
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					rows={5}
					className={`${baseInputClasses} resize-none`}
				/>
			) : type === "select" ? (
				<select
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					required={required}
					className={baseInputClasses}
				>
					{options.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>
			) : (
				<input
					id={name}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={baseInputClasses}
				/>
			)}

			{error && <p className="text-sm text-danger">{error}</p>}
		</div>
	);
}
