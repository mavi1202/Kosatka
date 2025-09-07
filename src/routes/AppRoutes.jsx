// src/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import  ThemeContext  from "../components/context/ThemeContext";
import Layout from "../components/Layout"; 
import Home from "../pages/Home";
import Jogo from "../pages/Jogo";
import Instrucoes from "../pages/Instrucoes";
import Referencias from "../pages/Referencias";
import SobreNos from "../pages/SobreNos";
import ErrorPage from "../pages/ErrorPage";
import Produtos from "../pages/Produtos";

export default function AppRoutes() {
  return (
 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jogo" element={<Jogo />} />
          <Route path="/instrucoes" element={<Instrucoes />} />
          <Route path="/referencias" element={<Referencias />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
  
  );
}
