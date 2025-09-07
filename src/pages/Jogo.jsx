import { Play, Gamepad2, Trophy, Star, Users, Clock } from "lucide-react"

export default function Jogo() {
  const recursos = [
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      titulo: "Gameplay Intuitivo",
      descricao: "Controles simples e interface amigável para jogadores de todas as idades",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      titulo: "Sistema de Conquistas",
      descricao: "Desbloqueie conquistas conforme cuida melhor do seu aquário virtual",
    },
    {
      icon: <Star className="w-6 h-6" />,
      titulo: "Peixes Únicos",
      descricao: "Colecione diferentes espécies de peixes com características especiais",
    },
    {
      icon: <Users className="w-6 h-6" />,
      titulo: "Modo Multiplayer",
      descricao: "Compare seus aquários com amigos e participe de competições",
    },
  ]

  const screenshots = [
    {
      titulo: "Tela Principal",
      imagem: "/placeholder.svg?height=300&width=400&text=Tela+Principal+Jogo",
    },
    {
      titulo: "Aquário Virtual",
      imagem: "/placeholder.svg?height=300&width=400&text=Aquário+Virtual",
    },
    {
      titulo: "Loja de Peixes",
      imagem: "/placeholder.svg?height=300&width=400&text=Loja+de+Peixes",
    },
    {
      titulo: "Conquistas",
      imagem: "/placeholder.svg?height=300&width=400&text=Conquistas",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AquaTech Game</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Mergulhe no mundo da aquariofilia virtual! Aprenda sobre cuidados com peixes, parâmetros da água e monte o
            aquário dos seus sonhos em nosso jogo educativo.
          </p>
        </div>

        {/* Vídeo Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur glass-card border border-white/20">
            <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <img
                src="/placeholder.svg?height=360&width=640&text=Demo+do+Jogo"
                alt="Demo do Jogo AquaTech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="aqua-button flex items-center px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600">
                  <Play className="w-6 h-6 mr-2" />
                  Assistir Demo
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4" />
              <span>Duração: 40 segundos</span>
            </div>
          </div>

          {/* Informações do Jogo */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur border border-white/20">
              <h2 className="text-white text-xl font-semibold mb-4">Sobre o Jogo</h2>
              <p className="text-white/80 mb-4">
                O AquaTech Game é um simulador educativo que ensina os fundamentos da aquariofilia de forma divertida e
                interativa. Monte seu aquário virtual, cuide dos peixes e aprenda sobre os parâmetros ideais da água.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Plataforma:</span>
                  <span className="text-white">Web (GDevelop)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Gênero:</span>
                  <span className="text-white">Simulação/Educativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Idade:</span>
                  <span className="text-white">Livre para todos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Idioma:</span>
                  <span className="text-white">Português</span>
                </div>
              </div>
            </div>

            <button className="w-full aqua-button text-lg py-6 flex items-center justify-center rounded-lg text-white bg-blue-500 hover:bg-blue-600">
              <Play className="w-6 h-6 mr-2" />
              Jogar Agora
            </button>
          </div>
        </div>

        {/* Recursos do Jogo */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">Recursos do Jogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recursos.map((recurso, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {recurso.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{recurso.titulo}</h3>
              <p className="text-white/70 text-sm">{recurso.descricao}</p>
            </div>
          ))}
        </div>

        {/* Screenshots */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl overflow-hidden shadow-lg backdrop-blur border border-white/20 hover:border-white/40 transition-all duration-300 relative group"
            >
              <img
                src={screenshot.imagem}
                alt={screenshot.titulo}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">{screenshot.titulo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
