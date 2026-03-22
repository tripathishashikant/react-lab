export default function Input({
  label,
  error,
  fullWidth = true,
  className = "",
  ...props
}) {
  return (
    <div className={`
      c-input
      ${fullWidth ? "c-input--block" : ""}
      ${error ? "c-input--error" : ""}
      ${className}
    `}>
      {label && <label className="c-input__label">{label}</label>}

      <input className="c-input__field" {...props} />

      {error && <span className="c-input__error">{error}</span>}
    </div>
  );
}
