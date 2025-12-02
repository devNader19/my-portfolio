import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    // Check system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Initialize theme immediately on mount
  useEffect(() => {
    const applyTheme = (dark) => {
      const root = document.documentElement
      root.setAttribute('data-theme', dark ? 'dark' : 'light')
      
      if (dark) {
        root.style.setProperty('--bg-primary', '#0f172a')
        root.style.setProperty('--bg-secondary', '#1e293b')
        root.style.setProperty('--text-primary', '#f1f5f9')
        root.style.setProperty('--text-secondary', '#94a3b8')
        root.style.setProperty('--accent-primary', '#818cf8')
        root.style.setProperty('--accent-secondary', '#a78bfa')
        root.style.setProperty('--accent-tertiary', '#f472b6')
        root.style.setProperty('--border-color', '#334155')
        root.style.setProperty('--card-bg', '#1e293b')
        root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.3)')
      } else {
        root.style.setProperty('--bg-primary', '#ffffff')
        root.style.setProperty('--bg-secondary', '#f8f9fa')
        root.style.setProperty('--text-primary', '#1a1a1a')
        root.style.setProperty('--text-secondary', '#6c757d')
        root.style.setProperty('--accent-primary', '#6366f1')
        root.style.setProperty('--accent-secondary', '#8b5cf6')
        root.style.setProperty('--accent-tertiary', '#ec4899')
        root.style.setProperty('--border-color', '#e5e7eb')
        root.style.setProperty('--card-bg', '#ffffff')
        root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)')
      }
      
      document.body.style.backgroundColor = dark ? '#0f172a' : '#ffffff'
      document.body.style.color = dark ? '#f1f5f9' : '#1a1a1a'
    }

    // Apply theme immediately
    applyTheme(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      // Only auto-update if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches)
        applyTheme(e.matches)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
