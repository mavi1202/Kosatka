import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import  Button from "../components/Button"
import { ExternalLink, BookOpen, FileText, Globe, Users } from "lucide-react"

export default function Referencias() {
  const referencias = [
    {
      categoria: "Artigos Científicos",
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          titulo: "Automated Aquarium Monitoring Systems: A Review",
          autores: "Smith, J., Johnson, M., & Brown, K.",
          revista: "Journal of Aquatic Technology",
          ano: "2023",
          link: "https://example.com/article1",
          resumo: "Revisão abrangente sobre sistemas automatizados de monitoramento de aquários e suas aplicações práticas.",
        },
        {
          titulo: "IoT Applications in Aquaculture: Current Trends and Future Prospects",
          autores: "Garcia, L., Martinez, R., & Silva, A.",
          revista: "Aquaculture Engineering Review",
          ano: "2022",
          link: "https://example.com/article2",
          resumo: "Análise das aplicações de IoT na aquicultura e perspectivas futuras para automação.",
        },
      ],
    },
    {
      categoria: "Livros e Publicações",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          titulo: "The Complete Guide to Freshwater Aquariums",
          autores: "Anderson, M.",
          editora: "Aquatic Press",
          ano: "2022",
          link: "https://example.com/book1",
          resumo: "Guia completo para iniciantes e avançados na aquariofilia de água doce.",
        },
      ],
    },
  ]

  const estatisticas = [
    { numero: "25+", label: "Artigos Consultados" },
    { numero: "15+", label: "Livros Referenciados" },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Referências</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Todo o conhecimento científico e técnico que fundamentou o desenvolvimento do projeto AquaTech.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {estatisticas.map((stat, i) => (
            <Card key={i} className="glass-card border-white/20 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{stat.numero}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Referências por Categoria */}
        <div className="space-y-8">
          {referencias.map((cat, i) => (
            <Card key={i} className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  {cat.icon}
                  {cat.categoria}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <Card key={j} className="glass-card border-white/10 hover:border-white/30 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>
                            {item.autores && <p className="text-white/70 text-sm mb-1"><strong>Autores:</strong> {item.autores}</p>}
                            {item.revista && <p className="text-white/70 text-sm mb-1"><strong>Revista:</strong> {item.revista}</p>}
                            {item.editora && <p className="text-white/70 text-sm mb-1"><strong>Editora:</strong> {item.editora}</p>}
                            {item.ano && <p className="text-white/70 text-sm mb-2"><strong>Ano:</strong> {item.ano}</p>}
                            <p className="text-white/60 text-sm">{item.resumo}</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-card border-primary/30 text-primary hover:bg-primary/10 flex-shrink-0 bg-transparent"
                            onClick={() => window.open(item.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Acessar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
