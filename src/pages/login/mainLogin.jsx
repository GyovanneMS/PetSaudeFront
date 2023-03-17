import React from "react";
import Google from '../../assets/Google.svg';
import Login from '../../assets/login-register-background.png';

export function Main() {
    return (
        <div className='flex flex-row w-screen h-screen bg-gradient-to-br from-[#092B5A] to-[#9ED1B7]'>
            <div className="p-20 flex justify-center flex-col w-1/2 bg-white">
                <h1 className="font-bold text-4xl">Bem-vindos de volta</h1>
                <p className="w-30 text-sm">Por favor, insira suas informações abaixo</p>

                {/* <a href=""><img src={Google} alt="Login with Google account" /></a> */}
                
                {/* <div class="login-google-button">
                    <a class="button-login-google" href="###">
                    <img src={Google} alt="Login with Google account" />
                    </a>
                    <span class="text-login-google">Ou use o e-mail</span>
                </div> */}

                <form>
                    <div className="inputConteiner">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="text"
                            name=""
                            id="email"
                            placeholder="E-mail" 
                        />
                    </div>
                    <div className="inputConteiner">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            name=""
                            id="password"
                            placeholder="Senha" 
                        />
                    </div>
                    <div class="reset-pass">
                        <a href="###">Esqueceu a senha?</a>
                    </div>
                    <button class="button">
                        Entrar
                    </button>
                </form>
            </div>

            <div className='flex-direction w-1/2'>
                {/* <img className="w-24 bg" src={Login} alt="Login image"></img> */}
            </div>
        </div>  
    );
}