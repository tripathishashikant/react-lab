import '@/shared/components/card/card.scss'

import Badge from '@/shared/components/badge/Badge'

export default function Card({
  children,
  title,
  difficulty,
  action,
  className = "",
  ...props
}) {
  return (
    <div className={`c-card ${className}`} {...props}>
      {(title || action) && (
        <header className="c-card__header">
          {title && <h3 className="c-card__title">{title}</h3>}
          {difficulty && <Badge difficulty={difficulty} />}
        </header>
      )}

      <section className="c-card__body">
        {children}
      </section>

      <footer className="c-card__footer">
        {action && <div className="c-card__action">{action}</div>}
      </footer>
    </div>
  );
}
