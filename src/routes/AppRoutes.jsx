import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"
import Jogo from "./pages/Jogo"
import Instrucoes from "./pages/Instrucoes"
import Referencias from "./pages/Referencias"
import SobreNos from "./pages/SobreNos"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/jogo" element={<Jogo />} />
          <Route path="/instrucoes" element={<Instrucoes />} />
          <Route path="/referencias" element={<Referencias />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
