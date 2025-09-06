import { Link } from "react-router-dom"


export function Home() {
  return (
    <div className="min-h-screen bg-home" style={{ backgroundImage: "url(/images/bg-home.jpg)" }}>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-deep-800 dark:text-white mb-6">
            Explore o Mundo
            <span className="block bg-ocean-gradient bg-clip-text text-transparent">Kosatka</span>
          </h1>
          <p className="text-xl text-deep-600 dark:text-deep-300 mb-8 max-w-3xl mx-auto">
            Dispositivo subaquático desenvolvido para monitorar a qualidade da água em aquários e tanques, medindo parâmetros como pH e acidez, além de liberar substâncias reguladoras automaticamente.Tecnologia que transforma seu aquário em um ecossistema perfeitamente equilibrado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Instrucoes">
              <Button size="lg" className="w-full sm:w-auto">
                Começar
              </Button>
            </Link>
            <Link to="/Referencias">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Ver Referencias
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-deep-800 dark:text-white mb-12">Recursos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-10v20m0-20V3a2 2 0 114 0v1M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deep-800 dark:text-white mb-2">Jogos Interativos</h3>
              <p className="text-deep-600 dark:text-deep-300">
                Aprenda sobre a vida marinha através de jogos educativos e divertidos.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deep-800 dark:text-white mb-2">Conteúdo Educativo</h3>
              <p className="text-deep-600 dark:text-deep-300">
                Acesse informações detalhadas sobre ecossistemas marinhos e conservação.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deep-800 dark:text-white mb-2">Experiência Imersiva</h3>
              <p className="text-deep-600 dark:text-deep-300">
                Interface moderna e responsiva para uma experiência única em qualquer dispositivo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ocean-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto para Mergulhar?</h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão explorando o mundo oceânico conosco.
          </p>
          <Link to="/cadastro">
            <Button variant="secondary" size="lg">
              Criar Conta Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}


  


