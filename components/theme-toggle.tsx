"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="glass border-0 backdrop-blur-md hover:scale-110 transition-all duration-300 hover-glow"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-all duration-300 hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-300 hover:rotate-12" style={{ color: "hsl(154 44% 20%)" }} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
