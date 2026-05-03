import ThemeSwitcherExample from './ThemeSwitcherExample';
import { THEMES } from '@/shared/constants/theme';

export const themeSwitcherRegistry = {
  id: 'theme-switcher',
  title: 'Theme Switcher',
  description: 'A toggle component that allows users to switch between light and dark themes.',
  usage: `The Theme Switcher is a "dumb" component that receives the current theme and a toggle handler as props. It is typically controlled by the AppProvider context in the MainLayout.`,
  props: [
    {
      name: 'theme',
      type: 'light | dark',
      defaultValue: THEMES.DARK,
      description: 'The current active theme.'
    },
    {
      name: 'onToggle',
      type: 'function',
      description: 'Callback function triggered when the toggle is clicked.'
    }
  ],
  examples: [
    {
      name: 'Default',
      description: 'The standard radio-style toggle with light and dark mode icons. (Interactive in this preview)',
      render: () => <ThemeSwitcherExample />,
      code: "<ThemeSwitcher theme={theme} onToggle={handleToggle} />"
    }
  ]
};
