import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"

export default function SobreNos() {
  const membros = [
    {
      nome: "Ana Silva",
      cargo: "Desenvolvedora Full Stack",
      foto: "/placeholder.svg?height=300&width=300&text=Ana+Silva",
      bio: "Especialista em React e Node.js com 5 anos de experiência em desenvolvimento web. Apaixonada por tecnologia e aquariofilia.",
      github: "https://github.com/anasilva",
      linkedin: "https://linkedin.com/in/anasilva",
      email: "ana@aquatech.com",
    },
    {
      nome: "Carlos Santos",
      cargo: "Engenheiro de Hardware",
      foto: "/placeholder.svg?height=300&width=300&text=Carlos+Santos",
      bio: "Engenheiro eletrônico especializado em IoT e sistemas embarcados. Responsável pelo desenvolvimento dos sensores inteligentes.",
      github: "https://github.com/carlossantos",
      linkedin: "https://linkedin.com/in/carlossantos",
      email: "carlos@aquatech.com",
    },
    {
      nome: "Maria Oliveira",
      cargo: "Designer UX/UI",
      foto: "/placeholder.svg?height=300&width=300&text=Maria+Oliveira",
      bio: "Designer com foco em experiência do usuário e interfaces intuitivas. Criou toda a identidade visual do projeto AquaTech.",
      github: "https://github.com/mariaoliveira",
      linkedin: "https://linkedin.com/in/mariaoliveira",
      email: "maria@aquatech.com",
    },
    {
      nome: "João Costa",
      cargo: "Especialista em Aquariofilia",
      foto: "/placeholder.svg?height=300&width=300&text=João+Costa",
      bio: "Biólogo marinho com 15 anos de experiência em aquariofilia. Consultor técnico para parâmetros ideais de água e peixes.",
      github: "https://github.com/joaocosta",
      linkedin: "https://linkedin.com/in/joaocosta",
      email: "joao@aquatech.com",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Quem Somos</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia e aquariofilia, unidos pelo objetivo de revolucionar a forma como
            as pessoas cuidam de seus aquários através da inovação e automação inteligente.
          </p>
        </div>

        {/* Nossa História */}
        <div className="rounded-xl bg-white/10 border border-white/20 shadow-md mb-16">
          <div className="p-8">
            <h2 className="text-white text-2xl text-center mb-6">Nossa História</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-white/80">
                  O projeto AquaTech nasceu em 2023 durante nossos estudos de Tecnologia da Informação, quando
                  percebemos as dificuldades que muitos aquaristas enfrentam para manter seus aquários em condições
                  ideais.
                </p>
                <p className="text-white/80">
                  Combinando nossa paixão pela tecnologia com o amor pela aquariofilia, desenvolvemos uma solução
                  completa que automatiza o monitoramento e controle de aquários, tornando este hobby mais acessível e
                  prazeroso para todos.
                </p>
                <p className="text-white/80">
                  Hoje, o AquaTech representa não apenas um projeto acadêmico, mas uma visão de futuro onde a tecnologia
                  e a natureza trabalham em harmonia perfeita.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Equipe+AquaTech"
                  alt="Equipe AquaTech"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              titulo: "Missão",
              texto:
                "Democratizar a aquariofilia através de tecnologia inteligente, tornando o cuidado com aquários mais simples, eficiente e acessível para todos.",
            },
            {
              titulo: "Visão",
              texto:
                "Ser a principal referência em soluções tecnológicas para aquariofilia, promovendo a sustentabilidade e o bem-estar aquático.",
            },
            {
              titulo: "Valores",
              texto:
                "Inovação, sustentabilidade, qualidade, transparência e paixão pela vida aquática guiam todas as nossas decisões e desenvolvimentos.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-white/10 border border-white/20 p-6 shadow-md text-center">
              <h3 className="text-white text-xl mb-2">{item.titulo}</h3>
              <p className="text-white/80">{item.texto}</p>
            </div>
          ))}
        </div>

        {/* Equipe */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membros.map((membro, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/10 border border-white/20 p-6 shadow-md text-center hover:border-white/40 transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <Image
                    src={membro.foto || "/placeholder.svg"}
                    alt={membro.nome}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{membro.nome}</h3>
                <p className="text-blue-400 text-sm mb-3">{membro.cargo}</p>
                <p className="text-white/70 text-sm mb-4">{membro.bio}</p>

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

        {/* Contato */}
        <div className="rounded-xl bg-white/10 border border-white/20 shadow-md max-w-4xl mx-auto p-8">
          <h2 className="text-white text-2xl text-center mb-2">Entre em Contato</h2>
          <p className="text-white/80 text-center mb-8">
            Tem alguma dúvida ou sugestão? Adoraríamos ouvir de você!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">E-mail</p>
                    <p className="text-white/70">contato@aquatech.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Telefone</p>
                    <p className="text-white/70">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Endereço</p>
                    <p className="text-white/70">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="text-white font-medium mb-2">Redes Sociais</h4>
                <div className="flex gap-2">
                  <a href="https://github.com" target="_blank" className="p-2 rounded-full hover:bg-blue-500/20">
                    <Github className="w-5 h-5 text-white/70 hover:text-blue-400" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="p-2 rounded-full hover:bg-blue-500/20">
                    <Linkedin className="w-5 h-5 text-white/70 hover:text-blue-400" />
                  </a>
                  <a href="mailto:contato@aquatech.com" className="p-2 rounded-full hover:bg-blue-500/20">
                    <Mail className="w-5 h-5 text-white/70 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-white">
                    Nome
                  </label>
                  <input
                    id="nome"
                    placeholder="Seu nome"
                    className="w-full px-3 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-3 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="assunto" className="text-white">
                  Assunto
                </label>
                <input
                  id="assunto"
                  placeholder="Assunto da mensagem"
                  className="w-full px-3 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-white">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  placeholder="Sua mensagem..."
                  className="w-full px-3 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
