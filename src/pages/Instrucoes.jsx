import React from "react";
import Button from "../components/Button"; 
import { Play, Download, CheckCircle, AlertCircle, Info } from "lucide-react";
import seta from "../images/seta pra baixo.png";
import instrucoesesc from "../images/background_instrucoes_escuro.png";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl bg-white/10 backdrop-blur-sm shadow-lg ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children, className = "" }) {
  return <div className={`p-4 border-b border-white/10 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function CardTitle({ children, className = "" }) {
  return <h2 className={`font-bold text-lg ${className}`}>{children}</h2>;
}

export default function Instrucoes() {
  const passos = [
    {
      numero: 1,
      titulo: "Preparação do Aquário",
      descricao: "Configure o aquário base e prepare o ambiente",
      detalhes: [
        "Escolha um aquário de vidro de pelo menos 100L",
        "Posicione em local estável, longe da luz solar direta",
        "Instale o substrato (cascalho ou areia específica)",
        "Adicione decorações e plantas aquáticas",
      ],
    },
    {
      numero: 2,
      titulo: "Instalação do Kosatka",
      descricao: "Instale o Submarino no seu aquário",
      detalhes: [
        "Preparar o aquário: Limpe e ajuste a água e a temperatura.",
        "Posicionar o Kosatka: Coloque o dispositivo submerso de forma estável",
        "Conectar e sincronizar: Ligue à energia e configure pelo app",
        "Testar e ajustar: Confira os sensores e ajuste os parâmetros pelo app",
      ],
    },
    {
      numero: 3,
      titulo: "Substâncias e Energia",
      descricao: "Abasteça seu dispositivo",
      detalhes: [
        "Adicionar substâncias: Coloque os reguladores de pH, acidez e nutrientes conforme indicado",
        "Ligar e sincronizar: Conecte à energia e configure os parâmetros pelo app",
        "Monitorar e manter: Verifique sensores regularmente e ajuste os níveis conforme necessário",
      
      ],
    }
   
  ];
   const parametros = [
    { nome: "pH", valorIdeal: "6.8 - 7.2", tipo: "success" },
    { nome: "Temperatura", valorIdeal: "24°C - 26°C", tipo: "success" },
    { nome: "Amônia (NH3)", valorIdeal: "0 ppm", tipo: "warning" },
    { nome: "Nitrito (NO2)", valorIdeal: "0 ppm", tipo: "warning" },
    { nome: "Nitrato (NO3)", valorIdeal: "< 20 ppm", tipo: "info" },
    { nome: "Dureza(Turbidez) (GH)", valorIdeal: "8 - 12 dGH", tipo: "info" },
  ];

  
  
  return (

     <div
      className="page-background"
      style={{
        backgroundImage: `url(${instrucoesesc})`,
        backgroundSize: "cover",
        backgroundPosition: "center ",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
    
       <div className="text-center mb-12 bg-[#00556B]/50 backdrop-md p-8 ">
          <h1 className="text-4xl font-bold text-black mb-4">Instruções de uso </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Siga este manual passo a passo para montar seu sistema Kosatka completo e ter um aquário inteligente
            funcionando perfeitamente.
          </p>
            <img
        src={seta} 
      alt="Seta indicando"
       className="mx-auto mt-10 h-20 w-auto animate-bounce"/>
        </div>
 

        <div className="space-y-6">
          {passos.map((passo) => (
            <Card
              key={passo.numero}
              className="border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ocean-500 flex items-center justify-center text-white font-bold text-lg">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl">
                      {passo.titulo}
                    </CardTitle>
                    <p className="text-white/70">{passo.descricao}</p>
                  </div>
                  <div className="text-right">
                    
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {passo.detalhes.map((detalhe, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-white/80"
                    >
                      <CheckCircle className="w-4 h-4 text-ocean-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{detalhe}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>  
            </Card>
          ))}
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mt-10 mb-8">Parâmetros Ideais da Água</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {parametros.map((parametro, index) => (
              <Card key={index} className="glass-card border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{parametro.nome}</h3>
                      <p className="text-white/80 text-sm">{parametro.valorIdeal}</p>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        parametro.tipo === "success"
                          ? "bg-green-400"
                          : parametro.tipo === "warning"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

            


       <Card className="border border-white/20 max-w-2xl mx-auto mb-8 mt-12">
            <CardContent className="p-6">
              <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="w-16 h-16 text-ocean-400 mx-auto mb-2" />
                  <p className="text-white/80">Vídeo Demonstrativo</p>
                  <p className="text-white/60 text-sm">
                    Assista ao processo completo de instalação
                  </p>
                </div>
              </div>
              <Button className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Assistir Vídeo Tutorial
              </Button>
              
            </CardContent>
          </Card>
          <p className="text-center text-white max-w-lg mx-auto" >Assista ao vídeo e conheça como nosso sistema monitora e cuida do aquário de forma prática, eficiente e automática.</p>
      </div>
    </div>
    </div>
  );
}
