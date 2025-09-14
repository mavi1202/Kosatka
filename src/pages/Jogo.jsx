import { Play, Gamepad2, Trophy, Star, Users, Clock } from "lucide-react"
import imggame from "../images/background_jogos_escuro.png";
import immgameclaro from "../images/background_jogos_claro.png"
import { useTheme } from "../context/ThemeContext"
import demo from "../images/jogoo.png";

export default function Jogo() {
  const { theme } = useTheme() 
  const bgImage = theme === "dark" ? imggame : immgameclaro

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
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
      
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Kosatka Game</h1>
          <p className="text-foreground  text-lg max-w-3xl mx-auto">
            Mergulhe conosco no mundo Kosatka venha ajudar-nos a cuidar do planeta!
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur glass-card border border-white/20">
            <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <img
                src={demo}              alt="Demo do Jogo Kosatka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button className="aqua-button flex items-center px-4 py-2 rounded-lg text-foreground  bg-blue-500 hover:bg-blue-600">
                  <Play className="w-6 h-6 mr-2" />
                  Assistir Demo
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-foreground  text-sm">
              <Clock className="w-4 h-4" />
              <span>Duração: 1min</span>
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur border border-white/20">
              <h2 className="text-foreground  text-xl font-semibold mb-4">Sobre o Jogo</h2>
              <p className="text-foreground  mb-4">
                O Kosatka Game é jogo em que o jogador navega pelos oceanos, coleta resíduos, evita poluentes e ajuda a restaurar a vida marinha, promovendo a conscientização ambiental de forma divertida.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground ">Plataforma:</span>
                  <span className="text-foreground ">Web (GDevelop)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground ">Gênero:</span>
                  <span className="text-foreground ">Simulação/Educativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground ">Idade:</span>
                  <span className="text-foreground ">Livre para todos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground ">Idioma:</span>
                  <span className="text-foreground ">Português</span>
                </div>
              </div>
            </div>
            

           <a href="https://gd.games/mavi9583/melodic-trip" 
           target="_blank" 
           rel="noopener noreferrer" 
          className="w-full aqua-button text-lg py-6 flex items-center justify-center rounded-lg text-foreground  bg-blue-500 hover:bg-blue-600"
>
  <Play className="w-6 h-6 mr-2" />
  Jogar Agora
</a>

          </div>
        </div>

        <h2 className="text-3xl font-bold text-foreground  text-center mb-8">Recursos do Jogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recursos.map((recurso, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-6 text-center shadow-lg backdrop-blur border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {recurso.icon}
              </div>
              <h3 className="text-foreground  font-semibold mb-2">{recurso.titulo}</h3>
              <p className="text-foreground  text-sm">{recurso.descricao}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
    </div>
  )
}
