import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import  Button  from "../components/Button"
import { ModeToggle } from "./ModeTogglee"
import { Menu, X, Fish } from "lucide-react"
import { cn } from "../lib/utils"
import logoClaro from "../images/logo-claro.png";
import logoescuro from "../images/logo-escuro.png";



const navItems = [
  { name: "Início", href: "/" },
  { name: "Instruções", href: "/instrucoes" },
  { name: "Produtos", href: "/produtos" },
  { name: "Quem Somos", href: "/sobrenos" },
  { name: "Referências", href: "/referencias" },
  { name: "Jogo", href: "/jogo" }
]

export function Navigation() {
  
  const location = useLocation()
  const pathname = location.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full glass-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
           <img src={logoClaro} alt="Logo" className="h-10 w-10 object-contain" />
          </Link>
        </div>

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
        <div className="md:hidden container mx-auto py-4 pb-6 glass-card border-t border-white/20 px-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded",
                  pathname === item.href ? "text-primary bg-primary/10" : "text-foreground/80"
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
