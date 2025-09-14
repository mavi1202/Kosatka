import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import Button from "../components/Button"
import { ExternalLink, FileText } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import setaesc from "../images/setaesc.png"
import seta from "../images/seta pra baixo.png"
import imgref from "../images/background_referencias_escuro.png"
import imgrefclaro from "../images/background_referencias_claro.png"

export default function Referencias() {
  const { theme } = useTheme()
 

  const referencias = [
    {
   categoria: "Artigos Científicos",
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          titulo:
            "A ECOTOXICOLOGIA COMO FERRAMENTA NO BIOMONITORAMENTO DE ECOSSISTEMAS AQUÁTICOS",
          autores: "Magalhães, Danielly de Paiva Ferrão Filho, Aloysio da Silva",
          ano: "2008",
          link: "https://arca.fiocruz.br/items/3ccf6893-a383-4c5e-a9dc-134bc4f168ad",
          resumo:
            "O artigo apresenta a ecotoxicologia como uma ciência essencial para avaliar os impactos de poluentes nos ecossistemas aquáticos. Destaca o uso de organismos bioindicadores e testes ecotoxicológicos para monitorar a qualidade da água e preservar a biodiversidade.",
        },
        {
          titulo: "COMPUTAÇÃO EMBARCADA NA AUTOMATIZAÇÃO DE AQUÁRIOS MARINHOS",
          autores:
            "Giovani Begnini Pinzetta, José Antônio Oliveira de Figueiredo",
          ano: "2022",
          link: "https://painel.passofundo.ifsul.edu.br/uploads/arq/202302071428571963938365.pdf",
          resumo:
            "Este trabalho explora como a computação embarcada pode ser aplicada na automação de aquários marinhos, garantindo o controle preciso de variáveis como temperatura, iluminação e pH. A proposta visa facilitar a manutenção e melhorar o ambiente para os organismos marinhos.",
        },
        {
          titulo: "AUTOMAÇÃO E CONTROLE DE TANQUE PARA PISCICULTURA",
          autores: "João C. P. Beck, Isaac N. L. da Silva",
          ano: "2006",
          link: "https://admin.abenge.org.br/cobenge/legado/arquivos/13/artigos/6_287_390.pdf",
          resumo:
            "O artigo propõe um sistema automatizado para controlar a alimentação e as condições ambientais de tanques de piscicultura. O objetivo é aumentar a eficiência da produção e garantir o bem-estar dos peixes, utilizando sensores e controladores eletrônicos.",
        },
        {
          titulo: "AUTOMAÇÃO E MONITORAMENTO EM AQUÁRIOS UTILIZANDO ARDUÍNO",
          autores:
            "Pedro Henrique Arantes de Souza, Marlon Hugo Rodrigues da Silva, Ricardo Bernardes de Mello, Fabricio Pelloso Piurscosky, Wariston Fernando Pereira",
          ano: "2006",
          link: "https://periodicos.unis.edu.br/interacao/article/view/144",
          resumo:
            "Foca na criação de um sistema automatizado baseado em Arduino para monitorar temperatura, luminosidade e nível da água em aquários. A solução oferece baixo custo e facilidade de uso para quem deseja automatizar o cuidado com peixes e plantas aquáticas.",
        },
        {
          titulo:
            "SISTEMA DE MONITORAMENTO E CONTROLE DE TEMPERATURA DA ÁGUA DE UM AQUÁRIO",
          autores:
            "Oliveira Junior, Aguinaldo José; Rodrigues de Oliveira, Eduardo Henrique; Hurla de Marques, Lucas Damazio",
          ano: "2019",
          link: "https://repositorio.utfpr.edu.br/jspui/handle/1/16956",
          resumo:
            "O estudo desenvolve um sistema para medir e controlar a temperatura da água em aquários usando sensores e microcontroladores. A proposta visa manter condições ideais para os organismos, evitando variações que possam comprometer sua saúde.",
        },
      ],
    },
  ]

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url(${theme === "dark" ? imgref : imgrefclaro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", 
      }}
    >
      <div className="min-h-screen py-12 bg-black/40 dark:bg-black/60">
       
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 bg-[#035F8E]/20  backdrop--md p-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Fontes confiáveis para soluções sustentáveis.
            </h1>
            <p className="text-foreground text-lg max-w-3xl mx-auto">
              Os conteúdos desta seção foram selecionados a partir de artigos
              científicos e acadêmicos relevantes, com foco em automação,
              monitoramento ambiental e ecossistemas aquáticos.
            </p>
            <img
              src={seta}
              alt="Seta indicando"
              className="mx-auto mt-10 h-20 w-auto animate-bounce"
            />
          </div>

          <div className="space-y-6">
            {referencias.map((cat, i) => (
              <Card key={i} className=" backdrop-blur-md border-gray-700 dark:border-gray-500">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-5">
                    {cat.icon} {cat.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cat.items.map((item, j) => (
                    <Card
                    key={j}
                    className="glass-card border border-gray-700 dark:border-gray-200 hover:border-gray-100 dark:hover:border-gray/30 transition-all duration-300 mb-5"
>
                      <CardContent className="p-8 mb-1">
                        <div className="flex flex-col md:flex-row md:items-start gap-4 ">
                          <div className="flex-1">
                            <h3 className="text-foreground font-semibold mt-5 mb-2">
                              {item.titulo}
                            </h3>
                            {item.autores && (
                              <p className="text-foreground text-sm mb-2">
                                <strong>Autores:</strong> {item.autores}
                              </p>
                            )}
                            {item.ano && (
                              <p className="text-foreground text-sm mb-2">
                                <strong>Ano:</strong> {item.ano}
                              </p>
                            )}
                            <p className="text-foreground text-sm">
                              {item.resumo}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-card border-primary/30 text-primary hover:bg-primary/10 flex-shrink-0 bg-transparent mt-4"
                            onClick={() => window.open(item.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Acessar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
