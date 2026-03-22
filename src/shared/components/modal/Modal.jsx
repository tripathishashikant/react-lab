import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="c-modal">
      <div className="c-modal__overlay" onClick={onClose}></div>

      <div className="c-modal__content" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="c-modal__header">
            <h3 className="c-modal__title">{title}</h3>
            <button className="c-modal__close" onClick={onClose}>
              ✕
            </button>
          </div>
        )}

        <div className="c-modal__body">{children}</div>

        {footer && <div className="c-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}