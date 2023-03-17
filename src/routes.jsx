import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CadastroVet} from "./pages/cadastroVet/cadastroVet";
import { Casa } from "./pages/home/Home";
import { LandingPage} from "./pages/home/LandingPage"
import { Main } from "./pages/login/mainLogin";
import { NewAdress } from "./pages/login/mainAddAdress";   
import { HeaderWeb } from "./pages/home/HeaderWeb";
import { Register } from "./pages/register/register";


export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pages/login" element={<Login />} />
            <Route path="/" element={<Casa />}></Route>
            <Route path="/pages/Endereco" element={<NewAdress />} />
            <Route path="/pages/CadastroVet" element={<CadastroVet />} />
            <Route path="/home/LandingPage" element={<LandingPage />}/>
            <Route path="/home/HeaderWeb" element={<HeaderWeb />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    </Router>
    
  );
};
