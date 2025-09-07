import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import  Button  from "../components/Button"
import { Link } from "react-router-dom"

export default function Instrucoes() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Instruções do Jogo</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Leia atentamente as instruções abaixo antes de começar a jogar.
          </p>
        </div>

        <Card className="glass-card border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-xl">Como Jogar</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Escolha o nível de dificuldade desejado.</li>
              <li>Observe os elementos na tela e memorize suas posições.</li>
              <li>Clique nos elementos corretos na ordem indicada.</li>
              <li>Acumule pontos e tente bater seu recorde!</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-xl">Dicas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Fique atento ao tempo limite.</li>
              <li>Memorize os padrões com cuidado.</li>
              <li>Pratique várias vezes para melhorar sua pontuação.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link to="/jogo">
            <Button variant="primary" size="md">
              Começar a Jogar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
