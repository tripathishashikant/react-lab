import { useState } from 'react';
import ThemeSwitcher from '@/shared/components/theme-switcher';
import { THEMES } from '@/shared/constants/theme';

const ThemeSwitcherExample = () => {
  const [theme, setTheme] = useState(THEMES.DARK);
  const handleToggle = () => setTheme(prev => prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  
  return <ThemeSwitcher theme={theme} onToggle={handleToggle} />;
};

export default ThemeSwitcherExample;
