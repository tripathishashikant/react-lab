import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { THEMES } from '@/shared/constants/theme';
import '@/shared/components/theme-switcher/themeSwitcher.scss';

function ThemeSwitcher({ theme = THEMES.DARK, onToggle }) {
  const isDark = theme === THEMES.DARK;

  return (
    <div className="c-theme-switcher">
      <button 
        className={`c-theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
        onClick={onToggle}
        aria-pressed={isDark}
        aria-label="Toggle dark mode"
      >
        <div className="c-theme-toggle__track">
          <div className="c-theme-toggle__icon c-theme-toggle__icon--light">
            <MdOutlineLightMode />
          </div>
          <div className="c-theme-toggle__icon c-theme-toggle__icon--dark">
            <MdOutlineDarkMode />
          </div>
          <div className="c-theme-toggle__thumb">
            {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </div>
        </div>
      </button>
    </div>
  );
}

export default ThemeSwitcher;
