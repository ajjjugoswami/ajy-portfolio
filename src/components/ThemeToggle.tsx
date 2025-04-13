"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Set initial theme from localStorage if available
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-pulse"
        disabled
      >
        <Moon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    )
  }

  return (
    <button
      className="rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 animate-scale-in"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 sm:h-6 sm:w-6 animate-float" />
      ) : (
        <Sun className="h-5 w-5 sm:h-6 sm:w-6 animate-float" />
      )}
    </button>
  )
} 