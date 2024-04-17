const Input = () => {
	return (
		<div className="mb-3">
			<label
				htmlFor="FieldName"
				className="form-label"
				style={{
					color: "#333",
					fontFamily: "Roboto",
					fontSize: "12px",
					fontStyle: "normal",
					fontWeight: "400",
					lineHeight: "16px" /* 133.333% */,
					letterSpacing: "0.1px",
				}}
			>
				Field Name
			</label>
			<input
				type="text"
				className="form-control"
				id="FieldName"
				placeholder="Please input text"
				style={{
					borderRadius: "8px",
					border: "1px solid #BDBDBD",
					background: "#FFF",
					fontSize: "14px",
					maxWidth: "450px",
				}}
				// value={value}
				// onChange={(e) => onChange(name, e.target.value)}
			/>
		</div>
	);
};
export default Input;
