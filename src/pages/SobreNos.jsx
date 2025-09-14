import { Github, Mail, Linkedin } from "lucide-react"
import { useTheme } from "../context/ThemeContext" // importa o hook
import imgmaria from "../images/maria.png"
import imglav from "../images/lavinia.png"
import imgporsi from "../images/porsi.png"
import imgjulia from "../images/julia.png"
import imggrupo from "../images/kosatka.jpeg"
import bgsob from "../images/background_sobrenos_escuro.png"
import bgsobcla from "../images/background_sobrenos_claro.png"
import logoClaro from "../images/logo-claro.png"
import logoEscuro from "../images/logo-escuro.png"
import setaesc from "../images/setaesc.png"
import seta from "../images/seta pra baixo.png"
import setad from "../images/setae.png"
import setae from "../images/setad.png"
import lily from "../images/lily1.jpeg";
import lily2 from "../images/lily2.jpeg";
import lily3 from "../images/lily3.jpeg";
import lily4 from "../images/lily4.jpeg";
import lily5 from "../images/lily6.jpeg";
import { useState } from "react"

export default function SobreNos() {
  const { theme } = useTheme()
  const [index, setIndex] = useState(0)

  const membros = [
    {
      nome: "Maria Vitória Barreto",
      foto: imgmaria,
      github: "https://github.com/mavi1202",
      linkedin: "https://www.linkedin.com/in/mariavitoriabq/",
      email: "mariavitoriabarreto2@gmail.com",
    },
    {
      nome: "Lavínia Reis",
      foto: imglav,
      github: "https://github.com/23lavi",
      linkedin: "https://www.linkedin.com/in/lav%C3%ADnia-reis-508b59338/",
      email: "laviniareis@eaportal.org",
    },
    {
      nome: "Gabriel Porsi",
      foto: imgporsi,
      github: "https://github.com/porsii800",
      linkedin: "https://www.linkedin.com/in/gabriel-porsi-pinheiro-aa9403338/",
      email: "gabrielporsi@eaportal.org",
    },
    {
      nome: "Julia Mariana Afonso",
      foto: imgjulia,
      github: "https://github.com/juliaferraz12",
      linkedin: "https://www.linkedin.com/in/julia-mariana-ab3100339/",
      email: "juliamarianaafonsof@gmail.com",
    },
  ]

  const fotosDog = [lily, lily2, lily3, lily4,lily5]

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % fotosDog.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + fotosDog.length) % fotosDog.length)
  }

  return (
    <div
      className="page-background"
      style={{
        backgroundImage: `url(${theme === "dark" ? bgsob : bgsobcla})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
 
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Quem Somos</h1>
            <p className="text-foreground text-lg max-w-3xl mx-auto">
              Somos um grupo de estudantes apaixonados por tecnologia, inovação e meio ambiente. Nosso projeto nasceu
              com o propósito de facilitar o cuidado com aquários por meio de um dispositivo inteligente, acessível e
              eficiente.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 border border-white/20 shadow-md mb-16">
            <div className="p-8">
              <h2 className="text-foreground font-bold text-2xl text-center mb-6">Nossa História</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-foreground">
                    O projeto Kosatka nasceu em 2025 durante uma coversa entre o grupo, quando perceberam as
                    dificuldades que muitos aquaristas enfrentam para manter seus aquários em condições ideais.
                  </p>
                  <p className="text-foreground">
                    Combinando nossa paixão pela tecnologia com o amor pela aquariofilia, desenvolvemos uma solução
                    completa que automatiza o monitoramento e controle de aquários, tornando este hobby mais acessível e
                    prazeroso para todos.
                  </p>
                  <p className="text-card-foreground">
                    Hoje, o Kosatka representa não apenas um projeto acadêmico, mas uma visão de futuro onde a
                    tecnologia e a natureza trabalham em harmonia perfeita.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={imggrupo}
                    alt="Equipe Kosatka"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

         
          <div className="rounded-xl bg-white/10 border border-white/20 shadow-md mb-16">
            <div className="p-8 text-center">
              <h2 className="text-foreground font-bold text-2xl mb-6">Nossa Mascote</h2>
              <p className="text-foreground mb-6">
                Conheça a Lily que está sempre com a gente nos bastidores do projeto! 🐶
              </p>
              <div className="relative w-full max-w-lg mx-auto">
                <img
                  src={fotosDog[index]}
                  alt="Mascote"
                  className="rounded-xl shadow-md w-full h-80 object-cover"
                />
             
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2"
                >
                  <img
                    src={theme === "dark" ? setad : setad}
                    alt="Anterior"
                    className="w-8 h-8"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
                >
                  <img
                    src={theme === "dark" ? setad : setad}
                    alt="Próximo"
                    className="w-8 h-8 rotate-180"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membros.map((membro, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/10 border border-white/20 p-6 shadow-md text-center hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="relative mb-4">
                    <img
                      src={membro.foto || imggrupo}
                      alt={membro.nome}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-1">{membro.nome}</h3>

                  <div className="flex justify-center gap-2">
                    <a href={membro.github} target="_blank" className="p-2 rounded-full hover:bg-cyan-950">
                      <Github className="w-4 h-4 text-foreground hover:text-cyan-500" />
                    </a>
                    <a href={membro.linkedin} target="_blank" className="p-2 rounded-full hover:bg-cyan-950">
                      <Linkedin className="w-4 h-4 text-foreground hover:text-cyan-500" />
                    </a>
                    <a href={`mailto:${membro.email}`} className="p-2 rounded-full hover:bg-cyan-950">
                      <Mail className="w-4 h-4 text-foreground hover:text-cyan-500" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white/10 border border-white/20 shadow-md max-w-4xl mx-auto p-8">
            <h2 className="text-foreground text-2xl text-center mb-2">Fale com a gente!</h2>
            <p className="text-foreground text-center mb-8">
              Tem dúvidas, sugestões ou quer saber mais sobre o nosso projeto?
              <br />
              Entre em contato pelo e-mail: kosatka671@gmail.com
              <br />
              Vamos adorar conversar com você!
            </p>
            <img
              className="mx-auto w-25 h-20 animate-bounce"
              src={theme === "dark" ? logoEscuro : logoClaro}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
