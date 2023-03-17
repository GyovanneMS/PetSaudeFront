import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CadastroVet} from "./pages/cadastroVet/cadastroVet";
import { Casa } from "./pages/home/Home";
import { LandingPage} from "./pages/home/LandingPage"
import { Main } from "./pages/login/mainLogin";
import { NewAdress } from "./pages/login/mainAddAdress";
import { Register } from "./pages/register/register";

export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pages/login" element={<Main />} />
            <Route path="/" element={<Casa />}></Route>
            <Route path="/pages/Endereco" element={<NewAdress />} />
            <Route path="/pages/CadastroVet" element={<CadastroVet />} />
            <Route path="/home" element={<LandingPage />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    </Router>
  );
};
