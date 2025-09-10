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

  const produto = [
    {
      id: 1,
      nome: "Sensor de pH Digital",
      preco: 199.9,
      imagem: ph,
      categoria: "Sensores",
      avaliacao: 4.8,
      descricao: "Sensor de pH digital de alta precisão para monitoramento contínuo da água do aquário.",
      especificacoes: ["Precisão: ±0.1 pH", "Faixa: 0-14 pH", "Conexão: Bluetooth", "Bateria: 6 meses"],
      link:"https://www.eletrogate.com/sensor-de-ph-arduino-modulo-de-leitura?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24PHK3NXg08p2XGsKeYgEqdlEF8ACDg8rqAcPuIKCT6UXvZ9f9Gk7WgaAhvZEALw_wcB"
    },
    {
      id: 2,
      nome: "Sensor de Temperatura",
      preco: 19,
      imagem: temp,
      categoria: "Sensores",
      avaliacao: 4.9,
      descricao: "Termostato inteligente com controle automático de temperatura via app.",
      especificacoes: ["Potência: 100W", "Faixa: 18-32°C", "Precisão: ±0.5°C", "WiFi integrado"],
      link:"https://www.eletrogate.com/sensor-de-temperatura-ds18b20-a-prova-dagua?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24MpUMt4Uf2ujCYj1itBubEU0OxY1yO4LjMDpAXMwKhtdpzS9I7_qRoaAtoXEALw_wcB"
    },
    {
      id: 3,
      nome: "Sensor de Turbidez",
      preco: 104.12,
      imagem: turb,
      categoria: "Sensores",
      avaliacao: 4,
      descricao: "Sistema completo de turbidez para aquários até 200L.",
      especificacoes: ["Capacidade: 200L", "UV: 9W", "Vazão: 500L/h", "3 estágios de filtração"],
      link:"https://www.breletronica.com.br/modulo-de-deteccao-de-mistura-de-agua-sensor-de-turbidez?utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&gad_source=1&gad_campaignid=20944641502&gbraid=0AAAAAquWLeFoQDDE8CeZ-Qn0FsKCtuOLN&gclid=Cj0KCQjwoP_FBhDFARIsANPG24P1WJuJb4Fu3NscvDx510CZ0SPSxoBX-hlcPnghSCabhRxJ0CUTOPoaApqEEALw_wcB"
    
    },
    {
      id: 4,
      nome: "LEDs",
      preco: 9.99,
      imagem: leds,
      categoria: "Leds",
      avaliacao: 4.6,
      descricao: "Leds simples",
      especificacoes: ["Tensão: 3.2 ~3.8V", "Luminosidade: 20.000 MCD","Corrente máxima: 25mA"],
      link:"https://www.amazon.com.br/Kit-com-LEDs-Diversos-Difusos/dp/B0C676BZX7/ref=asc_df_B0C676BZX7?mcid=f21538bd619d351c808cdc5fb01602b6&tag=googleshopp00-20&linkCode=df0&hvadid=709857928272&hvpos=&hvnetw=g&hvrand=6259928668151687202&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197118&hvtargid=pla-2275934781080&psc=1&language=pt_BR&gad_source=1"
    },
    {
      id: 5,
      nome: "Filamento",
      preco: 90.42,
      imagem: fil,
      categoria: "Impressão 3D",
      avaliacao: 4.5,
      descricao: "Filamento branco",
      especificacoes: [ "1,75 mm ± 0,02 mm", "PLA"],
      link:"https://voolt3d.com.br/produtos/filamento-pla-branco-velvet-premium/"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
    {
      id: 6,
      nome: "ESP 32",
      preco: 47.9,
      imagem: esp,
      categoria: "Esp32",
      avaliacao: 5,
      descricao: "Microcontrolador ESP32, baixo custo e consumo, com Wi-Fi integrado.",
      especificacoes: ["ESP32 ESP-WROOM-32 DEVKit V1.", "WiFi 802.11 b/g/n: 2.4 à 2.5 GHz."],
      link:"https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad_source=1&gad_campaignid=22486202127&gbraid=0AAAAADqxjs8xbeaFVNVsu7ExsJuRkUF92&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NCh7D7FVU-7uE7sJw7RRPBzEuOfMl906IXkkvUx6NvfhCpRvQD6wAaAidxEALw_wcB"
    },
  ];

  const valorTotal = produto.reduce((total, produto) => total + produto.preco, 0);

  return (
    <div
      className="page-background"
      style={{
        backgroundImage: `url(${pagprodutos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
        
          <div className="text-center mb-12 bg-card/80 backdrop-blur-md p-8 rounded-xl border border-border">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-foreground mb-8">
                Materiais do projeto, em detalhes.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
            {produto.map((produto) => (
              <div
                key={produto.id}
                className="glass-card border border-border hover:border-primary/50 transition-all duration-300 group rounded-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-sm">
                    {produto.categoria}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(produto.avaliacao)
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-muted-foreground text-sm ml-1">
                      ({produto.avaliacao})
                    </span>
                  </div>

                  <h3 className="text-foreground text-lg font-semibold mb-2">
                    {produto.nome}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {produto.descricao}
                  </p>

                  <div className="space-y-1 mb-3">
                    {produto.especificacoes.slice(0, 2).map((spec, index) => (
                      <div key={index} className="text-muted-foreground text-xs">
                        • {spec}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary">
                        R$ {produto.preco.toFixed(2)}
                      </span>
                    </div>
                    
                  
                    <button 
                     className="aqua-button flex items-center px-3 py-2 rounded-lg text-white text-sm"
                           variant="outline"
                            size="sm"
                            onClick={() => window.open(produto.link, "_blank")}>      
                        
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Comprar
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          <div className="glass-card border border-border max-w-4xl mx-auto rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border text-center">
              <h2 className="text-foreground text-2xl font-bold mb-2">
                Kosatka : Projeto Completo
              </h2>
              <p className="text-muted-foreground">
                Sistema completo de aquário inteligente com todos os equipamentos necessários
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold text-lg">Características do Sistema:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span>Controle automático de temperatura</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Droplets className="w-4 h-4 text-primary" />
                      <span>Monitoramento de qualidade da água</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <span>Turbidez</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Filter className="w-4 h-4 text-primary" />
                      <span>Controle via ESP32</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold text-lg">Especificações Técnicas:</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <div>• Capacidade: Aquários até 200L</div>
                    <div>• Conectividade: WiFi + Bluetooth</div>
                    <div>• Controle: App móvel completo</div>
                    <div>• Monitoramento: 24/7 automático</div>
                    <div>• Garantia: 2 anos em todos os produtos</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <div className="text-muted-foreground text-sm">Valor total do projeto:</div>
                  <div className="text-3xl font-bold text-primary">
                    R$ {valorTotal.toFixed(2)}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
