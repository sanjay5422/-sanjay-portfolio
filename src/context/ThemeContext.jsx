import { createContext, useContext, useState, useEffect } from 'react'

const themes = {
  cyan: {
    primary: '#00FFFF',
    secondary: '#9B59B6',
    bg: '#000000',
    name: 'Cyan Mode'
  },
  purple: {
    primary: '#9B59B6',
    secondary: '#00FFFF',
    bg: '#000000',
    name: 'Purple Mode'
  },
  ultraDark: {
    primary: '#00FF88',
    secondary: '#FF006E',
    bg: '#000000',
    name: 'Ultra Dark'
  },
  matrix: {
    primary: '#00FF00',
    secondary: '#003300',
    bg: '#000000',
    name: 'Matrix'
  }
}

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('cyan')

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage when it changes
    localStorage.setItem('theme', currentTheme)
    
    // Update CSS variables
    const theme = themes[currentTheme]
    document.documentElement.style.setProperty('--primary', theme.primary)
    document.documentElement.style.setProperty('--secondary', theme.secondary)
    document.documentElement.style.setProperty('--bg', theme.bg)
  }, [currentTheme])

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  const value = {
    currentTheme,
    themes,
    changeTheme,
    currentThemeData: themes[currentTheme]
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
