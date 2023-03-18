import React from "react";
import "./css/login.css";
import Google from '../../assets/svg/Google.svg';
import { Link } from "react-router-dom";
import backgroundImage from '../../assets/login-register-background.png'

// const passwordInput = document.getElementById("password-input");
// const icon = document.getElementById("icon");

// function showHide() {
//     if (passwordInput.type === "password") {
//       passwordInput.setAttribute("type", "text");
//       icon.classList.add("hide");
//     } else {
//       passwordInput.setAttribute("type", "password");
//       icon.classList.remove("hide");
//     }
// }
// icon.addEventListener("click", showHide);



export function Login() {    
    return (
        <body>
            <main className="bg-gradient-to-br from-[#092b5a] to-[#9ed1b7] opacity-90 h-screen w-screen">
                <form>
                    <div class="form-header">
                        <h1>Bem-vindo de volta!</h1>
                        <span>Por favor, insira suas informações abaixo</span>
                        <div class="login-google-button">
                            <button class="button-login-google">
                                <img src={Google} alt="logo-link-google" />
                            </button>
                            <span class="text-login-google">Ou use o e-mail</span>
                        </div>
                    </div>
                    <div class="inputs-container">
                        <label>
                            E-mail
                            <input type="text" name="" id="email"/>
                        </label>
                        <label>
                            Senha
                            <input type="password" name="" id="password" />
                            {/* <div id="icon" onclick={showHide}></div> */}
                        </label>
                        <div class="reset-pass">
                            <a href="###">Esqueceu a senha?</a>
                        </div>
                        <button class="login-button">
                            Entrar
                        </button>
                    </div>
                    <p class="new-register">Ainda não tem uma conta?<Link to="/register">Cadastre-se</Link></p>
                </form>
                <div className='w-1/2 h-full flex items-center overflow-hidden'>
                    <img src={backgroundImage} alt="" className="w-[150%] h-fit mr-32 opacity-50"></img>
                </div>
            </main>
        </body> 
    );
}