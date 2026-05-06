import { useState, useEffect, useCallback, useMemo } from "react"
import AppContext from '@/app/context/AppContext'
import { THEMES } from '@/shared/constants/theme'
import { getInitialTheme } from '@/shared/utils'

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
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
