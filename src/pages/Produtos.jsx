import { ShoppingCart, Filter, Thermometer, Droplets, Lightbulb } from "lucide-react"
import { useTheme } from "../context/ThemeContext"  
import pagprodutosEscuro from "../images/background_produtos_escuro.png";
import pagprodutosClaro from "../images/background_produtos_claro.png";
import ph from "../images/sensor de ph.jpg";
import temp from "../images/sensor de temperatura.jpg";
import turb from "../images/sensor de turbidez.jpg";
import fil from "../images/filamento branco.jpg";
import leds from "../images/leds.jpeg";
import esp from "../images/esp32.jpg";
import seta from "../images/seta pra baixo.png";
import setaesc from "../images/setaesc.png";
import fonte from "../images/fonte.jpg";
import bomba from "../images/bomba peristaltica.png";
import resis from "../images/reistores.png";

export default function Produtos() {
  const { theme } = useTheme(); 
  const bgImage = theme === "dark" ? pagprodutosEscuro : pagprodutosClaro;
  const setaImage = theme === "dark" ? seta : setaesc;

  const produto = [
    {
      id: 1,
      nome: "Sensor de pH Digital",
      preco: 199.9,
      imagem: ph,
      link: "https://www.eletrogate.com/sensor-de-ph-arduino-modulo-de-leitura"
    },
    {
      id: 2,
      nome: "Sensor de Temperatura",
      preco: 19,
      imagem: temp,
      link: "https://www.eletrogate.com/sensor-de-temperatura-ds18b20-a-prova-dagua"
    },
    {
      id: 3,
      nome: "Sensor de Turbidez",
      preco: 104.12,
      imagem: turb,
      link: "https://www.breletronica.com.br/modulo-de-deteccao-de-mistura-de-agua-sensor-de-turbidez"
    },
    {
      id: 4,
      nome: "LEDs",
      preco: 9.99,
      imagem: leds,
      link: "https://www.amazon.com.br/Kit-com-LEDs-Diversos-Difusos/dp/B0C676BZX7"
    },
    {
      id: 5,
      nome: "Filamento PLA Branco",
      preco: 90.42,
      imagem: fil,
      link: "https://voolt3d.com.br/produtos/filamento-pla-branco-velvet-premium/"
    },
    {
      id: 6,
      nome: "Fonte 12v",
      preco: 28.45,
      imagem: fonte,
      link: "https://www.usinainfo.com.br/fonte-de-alimentacao-chaveada-12vdc-2a-plug-p4-3921.html"
    },
    {
      id: 7,
      nome: "Bomba Peristáltica",
      preco: 65.55,
      imagem: bomba,
      link: "https://www.robocore.net/atuador/bomba-peristaltica"
    },
    {
      id: 8,
      nome: "Resistores",
      preco: 2.0,
      imagem: resis,
      link: "https://www.baudaeletronica.com.br/kit-500-resistores-1-4w.html"
    },
    {
      id: 9,
      nome: "ESP32",
      preco: 47.9,
      imagem: esp,
      link: "https://www.eletrogate.com/modulo-wifi-esp32-bluetooth-30-pinos"
    }
  ];

  const valorTotal = produto.reduce((total, produto) => total + produto.preco, 0);

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
          
          <div className="text-center mb-12 bg-[#08404E]/20 backdrop-blur-md p-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-foreground mb-8">
                Materiais do projeto, em detalhes.
              </h1>
              <p className="text-foreground text-lg max-w-2xl mx-auto">
                Nesta página, você confere os componentes usados no desenvolvimento do sistema de monitoramento, junto com seus respectivos valores.
              </p>
              <img
                src={setaImage}
                alt="Seta indicando"
                className="mx-auto mt-10 h-20 w-auto animate-bounce"
              />
            </div>
          </div>

         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {produto.map((produto) => (
    <div
      key={produto.id}
      className="glass-card border border-border hover:border-primary/50 transition-all duration-300 group rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-40 object-contain bg-white p-4"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-foreground font-semibold text-sm mb-1">
          {produto.nome}
        </h3>
        <span className="text-primary font-bold text-lg mb-3">
          R$ {produto.preco.toFixed(2)}
        </span>

        <button
          className="mt-auto self-end aqua-button flex items-center px-3 py-2 rounded-lg text-white text-sm w-auto"
          onClick={() => window.open(produto.link, "_blank")}
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Comprar
        </button>
      </div>
    </div>
  ))}
</div>


          
          <div className="glass-card border border-border max-w-4xl mx-auto rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border text-center">
              <h2 className="text-foreground text-2xl font-bold mb-2">
                Kosatka : Projeto Completo
              </h2>
              <p className="text-foreground">
                Sistema completo de aquário inteligente com todos os equipamentos necessários
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold text-lg">Características do Sistema:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground">
                      <Thermometer className="w-4 h-4 text-primary" />
                      <span>Controle automático de temperatura</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Droplets className="w-4 h-4 text-primary" />
                      <span>Monitoramento de qualidade da água</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <span>Turbidez</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                      <Filter className="w-4 h-4 text-primary" />
                      <span>Controle via ESP32</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold text-lg">Especificações Técnicas:</h3>
                  <div className="space-y-2 text-foreground text-sm">
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
                  <div className="text-foreground text-sm">Valor total do projeto:</div>
                  <div className="text-3xl font-bold text-primary">
                    R$ {valorTotal.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
