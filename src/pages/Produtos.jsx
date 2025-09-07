import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import  Button  from "../components/Button"
import { ShoppingCart, Star, Filter, Thermometer, Droplets, Lightbulb } from "lucide-react"

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Sensor de pH Digital",
      preco: 89.9,
      precoOriginal: 120.0,
      imagem: "/placeholder.svg?height=300&width=300&text=Sensor+pH",
      categoria: "Sensores",
      avaliacao: 4.8,
      descricao: "Sensor de pH digital de alta precisão para monitoramento contínuo da água do aquário.",
      especificacoes: ["Precisão: ±0.1 pH", "Faixa: 0-14 pH", "Conexão: Bluetooth", "Bateria: 6 meses"],
    },
    {
      id: 2,
      nome: "Termostato Inteligente",
      preco: 156.9,
      precoOriginal: 200.0,
      imagem: "/placeholder.svg?height=300&width=300&text=Termostato",
      categoria: "Aquecimento",
      avaliacao: 4.9,
      descricao: "Termostato inteligente com controle automático de temperatura via app.",
      especificacoes: ["Potência: 100W", "Faixa: 18-32°C", "Precisão: ±0.5°C", "WiFi integrado"],
    },
    {
      id: 3,
      nome: "Sistema de Filtragem UV",
      preco: 299.9,
      precoOriginal: 380.0,
      imagem: "/placeholder.svg?height=300&width=300&text=Filtro+UV",
      categoria: "Filtragem",
      avaliacao: 4.7,
      descricao: "Sistema completo de filtragem com esterilizador UV para aquários até 200L.",
      especificacoes: ["Capacidade: 200L", "UV: 9W", "Vazão: 500L/h", "3 estágios de filtração"],
    },
    {
      id: 4,
      nome: "LED Aquário Full Spectrum",
      preco: 234.9,
      precoOriginal: 300.0,
      imagem: "/placeholder.svg?height=300&width=300&text=LED+Aquário",
      categoria: "Iluminação",
      avaliacao: 4.6,
      descricao: "Iluminação LED full spectrum com controle de intensidade e timer programável.",
      especificacoes: ["Potência: 30W", "Espectro: 380-780nm", "Timer: 24h", "Controle remoto"],
    },
    {
      id: 5,
      nome: "Bomba de Circulação",
      preco: 78.9,
      precoOriginal: 95.0,
      imagem: "/placeholder.svg?height=300&width=300&text=Bomba",
      categoria: "Circulação",
      avaliacao: 4.5,
      descricao: "Bomba de circulação silenciosa para melhor oxigenação da água.",
      especificacoes: ["Vazão: 1000L/h", "Potência: 15W", "Ruído: <30dB", "Magnética"],
    },
    {
      id: 6,
      nome: "Kit Teste Completo",
      preco: 45.9,
      precoOriginal: 60.0,
      imagem: "/placeholder.svg?height=300&width=300&text=Kit+Teste",
      categoria: "Testes",
      avaliacao: 4.4,
      descricao: "Kit completo para teste de pH, amônia, nitrito, nitrato e dureza da água.",
      especificacoes: ["5 tipos de teste", "100 testes cada", "Precisão alta", "Fácil uso"],
    },
  ]

  const categorias = ["Todos", "Sensores", "Aquecimento", "Filtragem", "Iluminação", "Circulação", "Testes"]
  const valorTotal = produtos.reduce((total, produto) => total + produto.preco, 0)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Produtos</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Conheça todos os equipamentos utilizados no projeto AquaTech e monte seu aquário inteligente completo.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant="outline"
              className="glass-card border-white/30 text-white hover:bg-primary/20 bg-transparent"
            >
              <Filter className="w-4 h-4 mr-2" />
              {categoria}
            </Button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={produto.imagem || "/placeholder.svg"}
                    alt={produto.nome}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {produto.precoOriginal > produto.preco && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{Math.round(((produto.precoOriginal - produto.preco) / produto.precoOriginal) * 100)}%
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-primary/80 text-white px-2 py-1 rounded text-sm">
                    {produto.categoria}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(produto.avaliacao) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="text-white/80 text-sm ml-1">({produto.avaliacao})</span>
                </div>

                <CardTitle className="text-white text-lg mb-2">{produto.nome}</CardTitle>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">{produto.descricao}</p>

                <div className="space-y-1 mb-3">
                  {produto.especificacoes.slice(0, 2).map((spec, index) => (
                    <div key={index} className="text-white/60 text-xs">• {spec}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">R$ {produto.preco.toFixed(2)}</span>
                    {produto.precoOriginal > produto.preco && (
                      <span className="text-white/50 text-sm line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                    )}
                  </div>
                  <Button size="sm" className="aqua-button">
                    <ShoppingCart className="w-4 h-4 mr-1" /> Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumo do Projeto */}
        <Card className="glass-card border-white/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Projeto Completo AquaTech</CardTitle>
            <p className="text-white/80 text-center">Sistema completo de aquário inteligente com todos os equipamentos necessários</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Características do Sistema:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80"><Thermometer className="w-4 h-4 text-primary" /> Controle automático de temperatura</div>
                  <div className="flex items-center gap-2 text-white/80"><Droplets className="w-4 h-4 text-primary" /> Monitoramento de qualidade da água</div>
                  <div className="flex items-center gap-2 text-white/80"><Lightbulb className="w-4 h-4 text-primary" /> Iluminação inteligente programável</div>
                  <div className="flex items-center gap-2 text-white/80"><Filter className="w-4 h-4 text-primary" /> Sistema de filtragem avançado</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Especificações Técnicas:</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div>• Capacidade: Aquários até 200L</div>
                  <div>• Conectividade: WiFi + Bluetooth</div>
                  <div>• Controle: App móvel completo</div>
                  <div>• Monitoramento: 24/7 automático</div>
                  <div>• Garantia: 2 anos todos os produtos</div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <div className="text-white/80 text-sm">Valor total do projeto:</div>
                  <div className="text-3xl font-bold text-primary">R$ {valorTotal.toFixed(2)}</div>
                  <div className="text-white/60 text-sm">Em até 12x sem juros</div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button size="lg" className="aqua-button"><ShoppingCart className="w-5 h-5 mr-2" /> Comprar Projeto Completo</Button>
                  <Button variant="outline" size="lg" className="glass-card border-white/30 text-white bg-transparent">Solicitar Orçamento</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
