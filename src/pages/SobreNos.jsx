import { Github, InstagramIcon, Mail, Phone, MapPin, Send,Linkedin } from "lucide-react"
import imgmaria from "../images/maria.png";
import imglav from "../images/lavinia.png";
import imgporsi from "../images/porsi.png";
import imgjulia from "../images/julia.png";
import imggrupo from "../images/kosatka.jpeg";
import bgsob from "../images/background_sobrenos_escuro.png";
import logo from "../images/logo-claro.png";




export default function SobreNos() {
  const membros = [
    {
      nome: "Maria Vitória Barreto",
      foto:imgmaria,   
      github: "https://github.com/mavi1202",
      linkedin: "https://www.linkedin.com/in/mariavitoriabq/",
      email: "mariavitoriabarreto2@gmail.com",
    },
    {
      nome: "Lavínia Reis",
      foto:imglav,    
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

  return (

    <div
          className="page-background"
          style={{
            backgroundImage: `url(${bgsob})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
            backgroundRepeat: "no-repeat",
          }}
        >
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
     
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Quem Somos</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Somos um grupo de estudantes apaixonados por tecnologia, inovação e meio ambiente. Nosso projeto nasceu com o propósito de facilitar o cuidado com aquários por meio de um dispositivo inteligente, acessível e eficiente.
          </p>
        </div>

        <div className="rounded-xl bg-white/10 border border-white/20 shadow-md mb-16">
          <div className="p-8">
            <h2 className="text-white text-2xl text-center mb-6">Nossa História</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-white/80">
                  O projeto Kosatka nasceu em 2025 durante uma coversa entre o grupo , quando
                  perceberam as dificuldades que muitos aquaristas enfrentam para manter seus aquários em condições
                  ideais.
                </p>
                <p className="text-white/80">
                  Combinando nossa paixão pela tecnologia com o amor pela aquariofilia, desenvolvemos uma solução
                  completa que automatiza o monitoramento e controle de aquários, tornando este hobby mais acessível e
                  prazeroso para todos.
                </p>
                <p className="text-white/80">
                  Hoje, o Kosatka representa não apenas um projeto acadêmico, mas uma visão de futuro onde a tecnologia
                  e a natureza trabalham em harmonia perfeita.
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

   
        
        </div>

       
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membros.map((membro, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/10 border border-white/20 p-6 shadow-md text-center hover:border-white/40 transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <img
                    src={membro.foto || "imggrupo"}
                    alt={membro.nome}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{membro.nome}</h3>

                <div className="flex justify-center gap-2">
                  <a href={membro.github} target="_blank" className="p-2 rounded-full hover:bg-blue-500/20">
                    <Github className="w-4 h-4 text-white/70 hover:text-blue-400" />
                  </a>
                  <a href={membro.linkedin} target="_blank" className="p-2 rounded-full hover:bg-blue-500/20">
                    <Linkedin className="w-4 h-4 text-white/70 hover:text-blue-400" />
                  </a>
                  <a href={`mailto:${membro.email}`} className="p-2 rounded-full hover:bg-blue-500/20">
                    <Mail className="w-4 h-4 text-white/70 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white/10 border border-white/20 shadow-md max-w-4xl mx-auto p-8">
          <h2 className="text-white text-2xl text-center mb-2">Fale com a gente!</h2>
          <p className="text-white/80 text-center mb-8">
            Tem dúvidas, sugestões ou quer saber mais sobre o nosso projeto? 
            <p>Entre em contato pelo e-mail: kosatka671@gmail.com</p>
            <p>Vamos adorar conversar com você!</p>
          </p>
          <img className="mx-auto w-25 h-20 animate-bounce"
          src={logo} alt="logo" />
          
          
          </div>
        </div>
        </div>
      
    
  )
}
