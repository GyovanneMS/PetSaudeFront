import React, { useState } from "react";
import "./css/cadastroVet.css";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import arrow from "../../assets/svg/Vectorwhite.svg";
import image from "../../assets/svg/imgVetCadastro.svg";

export const CadastroVet = () => {

  const [areaAtuacao, setAreaAtuacao] = useState("")
  const [crmv, setCrmv] = useState("")
  const [formacao, setFormacao] = useState("")
  const [instituicao, setInstituicao] = useState("")
  const [dataFormacao, setDataFormacao] = useState("")
  const [dataAtuacao, setdata] = useState("")

  const handleChange = (event) => {

    console.log(event.target.value);

    setAreaAtuacao(event.target.value)

  }

  const { register, handleSubmit, formState: {errors} } = useForm()
  const submitForm = data => {
      if (validateForm(data)) {
          localStorage.setItem('__user_register_infos', JSON.stringify(data))
          document.location.href = '/register/address'
      }
  }

  const validateForm = (data) => {
    let error = {
        status: false,
        message: '',
    };

    if (data) {
        let {
            password,
            confirmPassword,
        } = data

        if (password !== confirmPassword) error = {status: true, message: 'Password needs to be the same'}

        if (error.status)
            throw new Error(error.message)
        else return true
    }
    return false
}



  return (
    <main className="mainVet">
      <div className="img-forms">
        <div className="arrow-img p-10">
          <Link to="/">
            <img src={arrow} alt="" />
          </Link>
          <div className="conteiner-img">
            <img className="bg-image" src={image} alt="location-image" />
          </div>
        </div>
        <form>
          <div className="form-header">
            <h1>Cadastro de Profissionais</h1>
            <span>
              Por favor, insira as informações abaixo e aproveite a plataforma!
            </span>
          </div>
          <div className="inputs-container">
            <div className="checkbox-container">
              <div className="specialties">
                <span>Especialidades</span>
                <div className="inputs-specialties">
                  <label>
                    <input type="checkbox" name="" id="" />
                    Cirurgião
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Clínica
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Laboritorial
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Pesquisa
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Anestesia
                  </label>
                  <label className="FV">
                    <input type="checkbox" name="" id="" />
                    <p>Fármacia Veterinária</p>
                  </label>
                  <label className="FV">
                    <input type="checkbox" name="" id="" />
                    <p>Técnico em Zoo</p>
                  </label>
                </div>
              </div>
              <div className="animals">
                <span>Animais que atende</span>
                <div className="inputs-animals">
                  <label>
                    <input type="checkbox" name="" id="" />
                    Cachorro
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Gato
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Aves
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Répteis
                  </label>
                  <label>
                    <input type="checkbox" name="" id="" />
                    Exóticos
                  </label>
                </div>
              </div>
            </div>
            <div className="atuacao-container">
              <div className="atuacao-crmv">
                <label>
                  <p>Área de atuação</p>
                  <input type="text" name="" className="area" {...register('areaAtuacao', {minLenght: 6, required: true})} />
                </label>

                <label>
                  <p>CRMV</p>
                  <input type="text" name="" className="CRMV" />
                </label>
              </div>

              <label>
                <p>Formação</p>
                <input type="text" name="" id="" />
              </label>
              <label>
                <p>Instituição</p>
                <input type="text" name="" id="" />
              </label>

              <div className="form-group">
                <label>
                  <p>Data de Formação</p>
                  <input type="date" name="" id="" />
                </label>
                <label>
                  <p>Início de Atuação</p>
                  <input type="date" name="" id="" />
                </label>
              </div>
            </div>
            <div className="user">
              <button className="register-button">Cadastrar</button>
            </div>
          </div>
          <p className="text-login">
            Já tem uma conta?<a href="../html/login.html">Faça login</a>
          </p>
        </form>
      </div>
    </main>
  );
};
