import React from "react";
import Button from "../components/Button"; // usa o Button que arrumamos
import { Play, Download, CheckCircle, AlertCircle, Info } from "lucide-react";

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
      tempo: "30-45 minutos",
      dificuldade: "Fácil",
    },
    {
      numero: 2,
      titulo: "Instalação dos Sensores",
      descricao: "Configure os sensores de monitoramento da água",
      detalhes: [
        "Instale o sensor de pH na lateral do aquário",
        "Posicione o termômetro digital no centro",
        "Configure o sensor de oxigênio dissolvido",
        "Conecte todos os sensores ao hub central",
      ],
      tempo: "20-30 minutos",
      dificuldade: "Médio",
    },
    {
      numero: 3,
      titulo: "Sistema de Filtragem",
      descricao: "Monte o sistema completo de filtragem",
      detalhes: [
        "Instale o filtro externo na parte traseira",
        "Conecte as mangueiras de entrada e saída",
        "Adicione as mídias filtrantes (mecânica, biológica, química)",
        "Teste o fluxo de água e ajuste a vazão",
      ],
      tempo: "45-60 minutos",
      dificuldade: "Médio",
    },
    {
      numero: 4,
      titulo: "Iluminação Inteligente",
      descricao: "Configure o sistema de LED programável",
      detalhes: [
        "Monte a luminária LED sobre o aquário",
        "Configure os horários de acendimento/apagamento",
        "Ajuste a intensidade para plantas aquáticas",
        "Programe o ciclo dia/noite automático",
      ],
      tempo: "15-25 minutos",
      dificuldade: "Fácil",
    },
    {
      numero: 5,
      titulo: "Aquecimento e Circulação",
      descricao: "Instale termostato e bombas de circulação",
      detalhes: [
        "Posicione o aquecedor próximo ao filtro",
        "Configure a temperatura ideal (24-26°C)",
        "Instale bombas de circulação para oxigenação",
        "Teste todos os equipamentos de aquecimento",
      ],
      tempo: "25-35 minutos",
      dificuldade: "Médio",
    },
    {
      numero: 6,
      titulo: "Configuração do App",
      descricao: "Conecte todos os dispositivos ao aplicativo móvel",
      detalhes: [
        "Baixe o app AquaTech na loja de aplicativos",
        "Crie sua conta e configure o perfil",
        "Conecte todos os sensores via WiFi/Bluetooth",
        "Configure alertas e notificações personalizadas",
      ],
      tempo: "15-20 minutos",
      dificuldade: "Fácil",
    },
    {
      numero: 7,
      titulo: "Ciclagem do Aquário",
      descricao: "Inicie o processo de ciclagem biológica",
      detalhes: [
        "Adicione água desclorada ao aquário",
        "Introduza bactérias benéficas (starter)",
        "Monitore os níveis de amônia e nitrito",
        "Aguarde 2-4 semanas para estabilização completa",
      ],
      tempo: "2-4 semanas",
      dificuldade: "Médio",
    },
    {
      numero: 8,
      titulo: "Introdução dos Peixes",
      descricao: "Adicione os peixes gradualmente ao sistema",
      detalhes: [
        "Escolha peixes compatíveis com o tamanho do aquário",
        "Faça a aclimatação gradual (30-60 minutos)",
        "Introduza poucos peixes por vez",
        "Monitore comportamento e parâmetros da água",
      ],
      tempo: "1-2 horas",
      dificuldade: "Médio",
    },
  ];

  const dicas = [
    {
      tipo: "sucesso",
      titulo: "Dica Importante",
      texto:
        "Sempre teste a água antes de adicionar peixes. Os parâmetros ideais são: pH 6.5-7.5, temperatura 24-26°C.",
    },
    {
      tipo: "alerta",
      titulo: "Atenção",
      texto:
        "Nunca adicione todos os peixes de uma vez. Introduza gradualmente para não sobrecarregar o sistema.",
    },
    {
      tipo: "info",
      titulo: "Manutenção",
      texto:
        "Realize trocas parciais de água (20-30%) semanalmente para manter a qualidade da água.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Guia de Instalação</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
            Siga este manual passo a passo para montar seu sistema AquaTech completo e ter um aquário inteligente
            funcionando perfeitamente.
          </p>

          {/* Vídeo Demonstrativo */}
          <Card className="border border-white/20 max-w-2xl mx-auto mb-8">
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
        </div>

        {/* Dicas Importantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {dicas.map((dica, index) => (
            <Card key={index} className="border border-white/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {dica.tipo === "sucesso" && (
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  )}
                  {dica.tipo === "alerta" && (
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  )}
                  {dica.tipo === "info" && (
                    <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {dica.titulo}
                    </h3>
                    <p className="text-white/70 text-xs">{dica.texto}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Passos da Instalação */}
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
                    <div className="text-white/60 text-sm">Tempo: {passo.tempo}</div>
                    <div
                      className={`text-sm ${
                        passo.dificuldade === "Fácil"
                          ? "text-green-400"
                          : passo.dificuldade === "Médio"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {passo.dificuldade}
                    </div>
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

        {/* Download do Manual */}
        <Card className="border border-white/20 mt-12">
          <CardContent className="p-6 text-center">
            <h3 className="text-white text-xl font-semibold mb-2">
              Manual Completo em PDF
            </h3>
            <p className="text-white/70 mb-4">
              Baixe o manual completo com ilustrações detalhadas e troubleshooting
            </p>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Baixar Manual PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
