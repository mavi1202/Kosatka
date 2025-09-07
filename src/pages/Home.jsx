import { Link } from "react-router-dom"
import  Button  from "../components/Button"
import { Card, CardContent } from "../components/Card"
import { ArrowRight, Download, Fish, Waves, Droplets } from "lucide-react"
import logoClaro from "../images/logo-claro.png";
import KosatkaSub from "../images/KosatkaSub.png";
import Botaomonit from "../images/botaomonitoramento.png";
import BotaoTurb from "../images/botaoTurb.png";
import Botaotemp from "../images/botaotemp.png";
import botaopH from "../images/botaopH.png";



export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
   
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <img src={logoClaro} alt="Logo" className="h-9.5 w-9.5 object-contain floating-element" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white drop-shadow-lg">
                  KOSATKA
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl drop-shadow">
                  Dispositivo subaquático desenvolvido para monitorar a qualidade da água em aquários e tanques, medindo parâmetros como pH e acidez, além de liberar substâncias reguladoras automaticamente.Tecnologia que transforma seu aquário em um ecossistema perfeitamente equilibrado.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="aqua-button">
                  <Link to="/cadastro">
                    Começar agora
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" /> Download do App
                </Button>


              </div>
            </div>
            <div className="mx-auto w-full max-w-[400px]  floating-element">
              <img
                src={KosatkaSub}
                alt="Kosatka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className=" gap-6 md text-3xl font-bold tracking-tighter md:text-4xl mb-4  text-white drop-shadow-lg ">
                Diferenciais do Kosatka
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow mb-15">
                
Conheça os recursos que tornam nosso projeto único e valioso para nossos usuários.
              </p>


            </div>
          </div>
          <div className="mx-auto grid max-w-5xl  gap-8 md:grid-cols-4 lg">
            {[
              {
                icon: <img src={Botaomonit}
                alt="botao monit"
                className=""/> ,
                title: "Monitoramento em Tempo real",
              
              },
              {
                icon: <img src={BotaoTurb}
                alt="botao monit"
                className=""/> ,
                title: "Turbidez da água ",
              
              },
              {
                icon: <img src={BotaopH}
                alt="botao ph"
                className=""/> ,
                title: "Monitoramento em Tempo real",
              
              },
              {
                icon: <img src={Botaotemp}
                alt="botao temp"
                className=""/> ,
                title: "Temperatura da água",
              
              },
             
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <CardContent className="flex flex-col items-center space-y-2 p-6 text-center">
                  <div className="rounded-full bg-primary/20 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mt--15  text-white drop-shadow-lg">
                Para Todos os Aquaristas
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow">
                Nosso sistema foi desenvolvido especialmente para a comunidade aquarística, atendendo desde iniciantes
                até especialistas:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            {[
              {
                title: "Aquaristas Iniciantes",
                description:
                  "Ferramentas e guias para quem está começando no hobby da aquariofilia, com dicas essenciais para montar e manter seu primeiro aquário.",
              },
              {
                title: "Aquaristas Experientes",
                description:
                  "Recursos avançados para aquaristas veteranos que buscam otimizar seus sistemas e explorar técnicas mais sofisticadas de aquascaping.",
              },
              {
                title: "Criadores de Peixes",
                description:
                  "Soluções especializadas para reprodução e criação de peixes ornamentais, com controle preciso de parâmetros da água.",
              },
              {
                title: "Aquascapers",
                description:
                  "Ferramentas para criar paisagens aquáticas deslumbrantes, com foco no design, iluminação e disposição de plantas aquáticas.",
              },
            ].map((audience, index) => (
              <Card
                key={index}
                className="glass-card border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <CardContent className="flex flex-col space-y-2 p-6">
                  <h3 className="text-xl font-bold text-white">{audience.title}</h3>
                  <p className="text-white/80">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white drop-shadow-lg">
                Pronto para começar?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed text-white/90 drop-shadow">
                Baixe nosso aplicativo agora e transforme seu aquário em um ecossistema inteligente.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="aqua-button">
                <Link to="/cadastro">
                  Criar uma conta <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" /> Download do App
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>

  

  )
}
