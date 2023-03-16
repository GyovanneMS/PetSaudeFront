import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CadastroVet } from './pages/cadastroVet';

export const Rotas = () => {
    return ( 

        <Router>
            <Routes>
                <Route path='/pages' element={<CadastroVet/>}/>
            </Routes>
        </Router> 

    );
}
