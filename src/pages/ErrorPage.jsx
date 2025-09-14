import { Link } from "react-router-dom"
import Button from "../components/Button"
import { Card, CardContent } from "../components/Card"
import errorclaro from "../images/kosatka_error_background_light.png"
import erroresc from "../images/kosatka_error_background_dark.png"
import { useTheme } from "../context/ThemeContext"

const ErrorPage = () => {
  const { theme } = useTheme()
   const bgImage = theme === "dark" ? erroresc : errorclaro

  return (
    <div
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Card className="text-center max-w-md mx-auto backdrop-blur-sm shadow-xl rounded-2xl border border-white/20">
        <CardContent>

          <div className="w-24 h-24 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <svg
              className="w-12 h-12 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

       
          <h1 className="text-5xl font-bold text-foreground mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Página Não Encontrada
          </h2>

          <p className="text-foreground/80 mb-8 leading-relaxed">
            Ops! Parece que você navegou para águas desconhecidas. A página que
            você está procurando não existe ou foi movida.
          </p>

          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="lg" className="w-full bg-transparent border border-foreground/40 hover:border-foreground mb-2">
                Voltar ao Início
              </Button>
            </Link>

            <Link to="/jogo">
              <Button
                variant="outline"
                size="lg"
                className="w-full bg-transparent border border-foreground/40 hover:border-foreground"
              >
                Ir para o Jogo
              </Button>
            </Link>
          </div>

          {/* Rodapé */}
          <div className="mt-8 pt-6 border-t border-foreground/20">
            <p className="text-sm text-foreground/70">
              Se você acredita que isso é um erro, entre em contato conosco.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ErrorPage