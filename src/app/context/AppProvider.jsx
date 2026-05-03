import { useState, useEffect, useCallback, useMemo } from "react"
import AppContext from '@/app/context/AppContext'
import { THEMES } from '@/shared/constants/theme'

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme')

        return storedTheme === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK
      }
    } catch (error) {
      console.warn('Failed to access localStorage:', error)
    }

    return THEMES.DARK
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.warn('Failed to update theme in DOM or localStorage:', error)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK))
  }, [])

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme, toggleTheme])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
