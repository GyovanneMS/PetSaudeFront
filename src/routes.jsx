import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/Home";
import { HeaderWeb } from "./pages/home/resource/HeaderWeb";
import { LandingPage} from "./pages/home/LandingPage";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { RegisterAddress } from "./pages/register/RegisterAddress";
import { RegisterVeterinary } from "./pages/register/RegisterVeterinary";
import { UserVet } from "./pages/profile/userVet";
<<<<<<< HEAD
import { HeaderInfo } from "./pages/home/resource/HeaderInfo";
import { Footer } from "./pages/home/resource/Footer";



=======
import { AboutUs } from "./pages/home/AboutUs";
>>>>>>> 66f036c3948c8646b455c6d55c4598f3ac830830

export const Rotas = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<LandingPage />}/>
            <Route path="/home/HeaderWeb" element={<HeaderWeb />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/register/address" element={<RegisterAddress />} />
            <Route path="/register/veterinary" element={<RegisterVeterinary />} />
            <Route path="/profile/veterinary" element={<UserVet />} />
<<<<<<< HEAD
            <Route path="/home/HeaderInfo" element={<HeaderInfo />} />
            <Route path="/home/Footer" element={<Footer />} />
          
=======
            <Route path="/home/aboutUs" element={<AboutUs />} />
>>>>>>> 66f036c3948c8646b455c6d55c4598f3ac830830
        </Routes>
    </Router>
    
  );
};
