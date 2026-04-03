import '@/shared/components/alert/alert.scss'

export default function Alert({
  variant = "info",
  children,
  onClose,
  className = "",
}) {
  return (
    <div className={`c-alert c-alert--${variant} ${className}`}>
      <div className="c-alert__content">{children}</div>

      {onClose && (
        <button className="c-alert__close" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
}
