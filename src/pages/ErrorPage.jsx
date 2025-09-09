import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-error"
      style={{ backgroundImage: "url(/images/bg-error.jpg)" }}
    >
      <Card className="text-center max-w-md mx-auto">
        <CardContent>
          <div className="w-24 h-24 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-deep-800 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-deep-800 dark:text-white mb-4">Página Não Encontrada</h2>
          <p className="text-deep-600 dark:text-deep-300 mb-8">
            Ops! Parece que você navegou para águas desconhecidas. A página que você está procurando não existe ou foi
            movida.
          </p>

          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="w-full">
                Voltar ao Início
              </Button>
            </Link>

            <Link to="/jogo">
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                Ir para o Jogo
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-deep-200 dark:border-deep-600">
            <p className="text-sm text-deep-500 dark:text-deep-400">
              Se você acredita que isso é um erro, entre em contato conosco.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorPage;
