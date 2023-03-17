import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CadastroVet} from "./pages/cadastroVet/cadastroVet";
import { Casa } from "./pages/home/Home";
import {LaddingPage} from "./pages/home/LadingPage"
import { Main } from "./pages/login/mainLogin";
import {NewAdress} from "./pages/login/mainAdress"


export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/pages/login" element={<Main />} />
            <Route path="/" element={<Casa />}></Route>
            <Route path="/pages/address" element={<NewAdress />}></Route>
            <Route path="/pages/CadastroVet" element={<CadastroVet />} />
            <Route path="/pages/LadingPage" element={<LaddingPage />}></Route>
        </Routes>
    </Router>
    
  );
};
