import '@/shared/components/loader/loader.scss'

export default function Loader({
  variant = "spinner",
  size = "md",
  fullScreen = false,
}) {
  const classes = `
    c-loader
    c-loader--${variant}
    c-loader--${size}
    ${fullScreen ? "c-loader--fullscreen" : ""}
  `;

  return (
    <div className={classes}>
      <div className="c-loader__spinner"></div>
    </div>
  );
}
