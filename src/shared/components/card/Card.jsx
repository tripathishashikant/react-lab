export default function Card({
  children,
  title,
  action,
  className = "",
  ...props
}) {
  return (
    <div className={`c-card ${className}`} {...props}>
      {(title || action) && (
        <div className="c-card__header">
          {title && <h3 className="c-card__title">{title}</h3>}
          {action && <div className="c-card__action">{action}</div>}
        </div>
      )}

      <div className="c-card__body">
        {children}
      </div>
    </div>
  );
}