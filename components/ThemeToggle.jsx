// components/ThemeToggle.jsx
'use client'

import { RiSunLine, RiMoonLine } from 'react-icons/ri'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border border-border hover:bg-secondary transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <RiMoonLine className="w-5 h-5" />
      ) : (
        <RiSunLine className="w-5 h-5" />
      )}
    </button>
  )
}
