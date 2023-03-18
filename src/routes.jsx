import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CadastroVet} from "./pages/cadastroVet/cadastroVet";
import { HomePage } from "./pages/home/Home";
import { Register } from "./pages/register/register";
import { HeaderWeb } from "./pages/home/resource/HeaderWeb";
import { LandingPage} from "./pages/home/LandingPage";
import { Login } from "./pages/login/mainLogin";
import {NewAdress} from "./pages/register/resource/mainAddAddress";



export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pages/login" element={<Login />} />
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/pages/Endereco" element={<NewAdress />} />
            <Route path="/pages/CadastroVet" element={<CadastroVet />} />
            <Route path="/home/LandingPage" element={<LandingPage />}/>
            <Route path="/home/HeaderWeb" element={<HeaderWeb />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    </Router>
    
  );
};
