import { ShoppingCart, Star, Filter, Thermometer, Droplets, Lightbulb } from "lucide-react"
import pagprodutos from "../images/background_produtos_escuro.png";
import ph from "../images/sensor de ph.jpg";
import temp from "../images/sensor de temperatura.jpg";
import turb from "../images/sensor de turbidez.jpg";
import fil from "../images/filamento branco.jpg";
import leds from "../images/leds.jpeg";
import esp from "../images/esp32.jpg";
import seta from "../images/seta pra baixo.png";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Sensor de pH Digital",
      preco: 99.9,
      
      imagem: ph,
      categoria: "Sensores",
      avaliacao: 4.8,
      descricao: "Sensor de pH digital de alta precisão para monitoramento contínuo da água do aquário.",
      especificacoes: ["Precisão: ±0.1 pH", "Faixa: 0-14 pH", "Conexão: Bluetooth", "Bateria: 6 meses"],
    },
    {
      id: 2,
      nome: "Sensor de Temperatura",
      preco: 99,
      imagem: temp,
      categoria: "Sensores",
      avaliacao: 4.9,
      descricao: "Termostato inteligente com controle automático de temperatura via app.",
      especificacoes: ["Potência: 100W", "Faixa: 18-32°C", "Precisão: ±0.5°C", "WiFi integrado"],
    },
    {
      id: 3,
      nome: "Sensor de Turbidez",
      preco: 99.9,
      imagem: turb,
      categoria: "Sensores",
      avaliacao: 4,
      descricao: "Sistema completo de turbidez para aquários até 200L.",
      especificacoes: ["Capacidade: 200L", "UV: 9W", "Vazão: 500L/h", "3 estágios de filtração"],
    },
    {
      id: 4,
      nome: "LED´S",
      preco: 9.99,
      imagem: leds,
      categoria: "leds",
      avaliacao: 4.6,
      descricao: "Leds simles",
      especificacoes: ["Tensão de alimentação: 3.2 ~3.8V", "Luminosidade: 20.000 MCD","Corrente máxima: 25mA"],
    },
    {
      id: 5,
      nome: "Filamento",
      preco: 78.9,
      imagem: fil,
      categoria: "Impressão 3D",
      avaliacao: 4.5,
      descricao: "Filamento branco",
      especificacoes: [ "1,75 mm ± 0,02 mm", "PLA"],
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 45.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador System on a Chip (SoC) de baixo custo e baixo consumo da Espressif Systems, conhecido por integrar Wi-Fi.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
    },
  ]


  const valorTotal = produtos.reduce((total, produto) => total + produto.preco, 0)

  return (

    <div
          className="page-background"
          style={{
            backgroundImage: `url(${pagprodutos})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
            backgroundRepeat: "no-repeat",
          }}>
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
   <div className="text-center  mb-12 bg-[#126895]/20 backdrop--md p-8 ">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white  mb-8">Materiais do projeto, em detalhes.</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Nesta página, você confere os componentes usados no desenvolvimento do sistema de monitoramento, junto com seus respectivos valores.
          </p>
          <img
                  src={seta} 
                alt="Seta indicando"
                 className="mx-auto mt-10 h-20 w-auto animate-bounce"
            />
        </div>
</div>
     

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300 group rounded-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={produto.imagem}
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

              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(produto.avaliacao) ? "text-yellow-400 fill-current" : "text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="text-white/80 text-sm ml-1">({produto.avaliacao})</span>
                </div>

                <h3 className="text-white text-lg font-semibold mb-2">{produto.nome}</h3>
                <p className="text-white/70 text-sm mb-3 line-clamp-2">{produto.descricao}</p>

                <div className="space-y-1 mb-3">
                  {produto.especificacoes.slice(0, 2).map((spec, index) => (
                    <div key={index} className="text-white/60 text-xs">
                      • {spec}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">R$ {produto.preco.toFixed(2)}</span>
                    {produto.precoOriginal > produto.preco && (
                      <span className="text-white/50 text-sm line-through">R$ {produto.precoOriginal.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="aqua-button flex items-center px-3 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 text-sm">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="glass-card border border-white/20 max-w-4xl mx-auto rounded-lg overflow-hidden">
          <div className="p-6 border-b border-white/20 text-center">
            <h2 className="text-white text-2xl font-bold mb-2">Kosatka : Projeto Completo</h2>
            <p className="text-white/80">
              Sistema completo de aquário inteligente com todos os equipamentos necessários
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Características do Sistema:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/80">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Controle automático de temperatura</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Droplets className="w-4 h-4 text-primary" />
                    <span>Monitoramento de qualidade da água</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span>Turbidez</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Filter className="w-4 h-4 text-primary" />
                    <span>Esp32 controlação</span>
                  </div>
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

            <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <div className="text-white/80 text-sm">Valor total do projeto:</div>
                <div className="text-3xl font-bold text-primary">R$ {valorTotal.toFixed(2)}</div>
           
              </div>
              <div className="flex flex-col gap-2">
                <button className="aqua-button flex items-center justify-center px-4 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 text-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Projeto Completo
                </button>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  )
}
