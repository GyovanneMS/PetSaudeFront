import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CadastroVet} from "./pages/cadastroVet/cadastroVet";
import { Casa } from "./pages/home/Home";
import { Main } from "./pages/login/mainLogin";
import {newAdress} from "./pages/login/mainAdress"


export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pages/login" element={<Main />} />
            <Route path="/" element={<LadingPage />}></Route>
            <Route path="/pages/address" element={<newAdress />}></Route>
            <Route path="/pages/CadastroVet" element={<CadastroVet />} />
        </Routes>
    </Router>
  );
};
