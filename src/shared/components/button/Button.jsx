export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={`
        c-button
        c-button--${variant}
        c-button--${size}
        ${fullWidth ? "c-button--block" : ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
