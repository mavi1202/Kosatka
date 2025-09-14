import { Link } from "react-router-dom"
import {  Github, Mail, Phone } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import logoClaro from "../images/logo-claro.png"
import logoEscuro from "../images/logo-escuro.png"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="mt-auto bg-[#00556B] dark:bg-[#0D1320] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
         
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={theme === "dark" ? logoClaro: logoEscuro}
                alt="Kosatka"
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-lg">Kosatka</span>
            </div>
            <p className="text-sm">
              Inovação que conecta tecnologia e sustentabilidade, cuidando de cada gota
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-primary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/instrucoes" className="hover:text-primary transition-colors">
                  Instruções
                </Link>
              </li>
              <li>
                <Link to="/jogo" className="hover:text-primary transition-colors">
                  Jogo
                </Link>
              </li>
            </ul>
          </div>

          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="font-semibold">Sobre</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobrenos" className="hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/referencias" className="hover:text-primary transition-colors">
                  Referências
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>kosatka671@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 95973-9398</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>github.com/Kosatka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm">© 2025 KOSATKA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
