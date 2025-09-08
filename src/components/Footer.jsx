import { Link } from "react-router-dom"
import { Fish, Github, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-card border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Fish className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-white">Kosatka</span>
            </div>
            <p className="text-white/80 text-sm">
              Inovação que conecta tecnologia e sustentabilidade, cuidando de cada gota
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-white/80 hover:text-primary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/instrucoes" className="text-white/80 hover:text-primary transition-colors">
                  Instruções
                </Link>
              </li>
              <li>
                <Link to="/jogo" className="text-white/80 hover:text-primary transition-colors">
                  Jogo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Sobre</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobrenos" className="text-white/80 hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/referencias" className="text-white/80 hover:text-primary transition-colors">
                  Referências
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contato</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>kosatka671@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>(11) 95973-9398</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Github className="h-4 w-4" />
                <span>github.com/Kosatka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">© 2025 KOSATKA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
