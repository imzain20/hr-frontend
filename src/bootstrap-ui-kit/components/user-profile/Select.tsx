const Select = ({
  label,
  options,
  color = "#bdbdbd",
  value,
  onChange,
  type,
}: {
  label: string;
  options?: string[];
  color?: string;
  value: string | number;
  onChange?: (fieldName: string, value: string | number) => void;
  type?: string;
}) => {
  return (
    <div style={{ maxWidth: "232px" }} className="mb-3">
      <label
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
        {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{
          borderRadius: "8px",
          border: "1px solid #BDBDBD",
          fontSize: "12px",
          color: "#4f4f4f",
          lineHeight: "16px" /* 133.333% */,
          letterSpacing: "0.1px",
          fontWeight: "300",
          padding: "12px",
        }}
        value={value}
        onChange={(e) => onChange!(type!, e.target.value)}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
