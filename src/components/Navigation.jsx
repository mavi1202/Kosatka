import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Button from "../components/Button"
import { ModeToggle } from "./ModeTogglee"
import { Menu, X } from "lucide-react"
import { cn } from "../lib/utils"
import { useTheme } from "../context/ThemeContext"
import logoClaro from "../images/logo-claro.png"
import logoEscuro from "../images/logo-escuro.png"

const navItems = [
  { name: "Início", href: "/" },
  { name: "Instruções", href: "/instrucoes" },
  { name: "Produtos", href: "/produtos" },
  { name: "Quem Somos", href: "/sobrenos" },
  { name: "Referências", href: "/referencias" },
  { name: "Jogo", href: "/jogo" },

]

export function Navigation() {
  const location = useLocation()
  const pathname = location.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300 border-b",
        isScrolled
          ? "glass-card border-white/20"
          : "bg-[#137087] dark:bg-[#0D1320] text-white"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
      
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img
            src={theme === "dark" ? logoClaro : logoEscuro}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>

     
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === item.href
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

       
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

     {mobileMenuOpen && (
  <div className="md:hidden container mx-auto py-4 pb-6 glass-card border-t border-white/20 px-4 rounded-b-2xl">
    <nav className="flex flex-col gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded",
            pathname === item.href
              ? "text-primary bg-primary/10"
              : "text-white"
          )}
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)}

    </header>
  )
}