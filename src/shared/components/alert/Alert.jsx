import '@/shared/components/alert/alert.scss'

export default function Alert({
  type = "info",
  children,
  onClose,
  className = "",
}) {
  return (
    <div className={`c-alert c-alert--${type} ${className}`}>
      <div className="c-alert__content">{children}</div>

      {onClose && (
        <button className="c-alert__close" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
}