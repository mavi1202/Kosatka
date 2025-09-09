import { Play, Gamepad2, Trophy, Star, Users, Clock } from "lucide-react"
import imggame from "../images/background_jogos_escuro.png";

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
      titulo: "Personagens Únicos",
      descricao: "Personagens Únicos que só o Kosatka Game proporciona",
    },
    {
      icon: <Users className="w-6 h-6" />,
      titulo: "Modo Multiplayer",
      descricao: "Compare seus aquários com amigos e participe de competições",
    },
  ]

  

  return (
  <div
        className="page-background"
        style={{
          backgroundImage: `url(${imggame})`,
          backgroundSize: "150% auto",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      > 
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
      
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Kosatka Game</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Mergulhe conosco no mundo Kosatka venha ajudar-nos a cuidar do planeta!
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur glass-card border border-white/20">
            <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <img
                src="/placeholder.svg?height=360&width=640&text=Demo+do+Jogo"
                alt="Demo do Jogo Kosatka"
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
              <span>Duração: 1min</span>
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur border border-white/20">
              <h2 className="text-white text-xl font-semibold mb-4">Sobre o Jogo</h2>
              <p className="text-white/80 mb-4">
                O Kosatka Game é jogo em que o jogador navega pelos oceanos, coleta resíduos, evita poluentes e ajuda a restaurar a vida marinha, promovendo a conscientização ambiental de forma divertida.
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
            

           <a href="https://editor.gdevelop.io/" 
           target="_blank" 
           rel="noopener noreferrer" 
          className="w-full aqua-button text-lg py-6 flex items-center justify-center rounded-lg text-white bg-blue-500 hover:bg-blue-600"
>
  <Play className="w-6 h-6 mr-2" />
  Jogar Agora
</a>

          </div>
        </div>

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

        
      </div>
    </div>
    </div>
  )
}
