import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CadastroVet} from "./pages/cadastroVet/cadastroVet";
import { Casa } from "./pages/home/Home";

export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Casa />}></Route>
            <Route path="/pages/CadastroVet" element={<CadastroVet />} />
        </Routes>
    </Router>
  );
};
