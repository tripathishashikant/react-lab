import '@/shared/components/input/input.scss'

export default function Input({
  id,
  label,
  error,
  fullWidth = true,
  className = "",
  ...props
}) {
  if (!id) {
    throw new Error("The 'id' prop is required for the Input component.");
  }

  const classes = ['c-input'];

  if (fullWidth) {
    classes.push('c-input--block');
  }

  if (error) {
    classes.push('c-input--error');
  }

  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')}>
      {label && <label htmlFor={id} className="c-input__label">{label}</label>}

      <input id={id} className="c-input__field" {...props} />

      {error && <span className="c-input__error">{error}</span>}
    </div>
  );
}
