import '@/shared/components/button/button.scss'

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}) {
  return (
    <button
      className={`
        c-button
        c-button--${variant}
        c-button--${size}
        ${fullWidth ? "c-button--block" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
