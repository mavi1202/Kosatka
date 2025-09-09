import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import  Button  from "./Button"

export function ModeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
   const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
   document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
   document.documentElement.classList.toggle("dark", newTheme === "dark")
 }

 return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-primary/10 relative">
   <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}  
