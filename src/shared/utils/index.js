import { THEMES } from '@/shared/constants/theme'

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme) {
    return storedTheme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK
  }

  const preferedLightTheme = window.matchMedia(`(prefers-color-scheme: ${THEMES.LIGHT})`).matches

  return preferedLightTheme ? THEMES.LIGHT : THEMES.DARK
}

export { getInitialTheme }
