import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import  Button  from "../components/Button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function SobreNos() {
  const membros = [
    {
      nome: "Ana Silva",
      cargo: "Desenvolvedora Full Stack",
      bio: "Especialista em React e Node.js com 5 anos de experiência em desenvolvimento web.",
      github: "https://github.com/anasilva",
      linkedin: "https://linkedin.com/in/anasilva",
      email: "ana@aquatech.com",
    },
    {
      nome: "Carlos Santos",
      cargo: "Engenheiro de Hardware",
      bio: "Engenheiro eletrônico especializado em IoT e sistemas embarcados.",
      github: "https://github.com/carlossantos",
      linkedin: "https://linkedin.com/in/carlossantos",
      email: "carlos@aquatech.com",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Quem Somos</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia e aquariofilia, unidos pelo objetivo de revolucionar o cuidado com aquários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membros.map((m, i) => (
            <Card key={i} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src="/placeholder.svg"
                    alt={m.nome}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{m.nome}</h3>
                <p className="text-primary text-sm mb-3">{m.cargo}</p>
                <p className="text-white/70 text-sm mb-4">{m.bio}</p>

                <div className="flex justify-center gap-2">
                  <Button size="icon" variant="ghost" onClick={() => window.open(m.github, "_blank")}>
                    <Github className="w-4 h-4 text-white/70 hover:text-primary" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => window.open(m.linkedin, "_blank")}>
                    <Linkedin className="w-4 h-4 text-white/70 hover:text-primary" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => window.open(`mailto:${m.email}`, "_blank")}>
                    <Mail className="w-4 h-4 text-white/70 hover:text-primary" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
