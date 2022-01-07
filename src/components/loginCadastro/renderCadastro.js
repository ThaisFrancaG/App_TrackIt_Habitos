import logo from "../../assets/images/logoTrackIt.png";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";
import { MainScreen } from "./RenderLogin";
export default function RenderCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const [inputState, setInputState] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Cadastrar");

  const navigate = useNavigate();

  function fazerCadastro(event) {
    event.preventDefault();

    setInputState("disabled");
    setButtonMessage(
      <Loader type="ThreeDots" color="#FFFFFF" height={80} width={80} />
    );

    const requisition = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      { email: email, name: name, image: photo, password: password }
    );
    requisition.then((response) => {
      alert("Cadastro realizado! Você será redirecionado a tela de Login");
      navigate(`/`);
    });
    requisition.catch((error) => {
      if (error.response.status === 422) {
        alert("Por favor, preencha todos os campos");
      } else if (error.response.status === 409) {
        alert("Cadastro não autorizado!" + " " + error.response.data.message);
      } else {
        alert(
          "Houve um erro na realização do cadastro. Por favor, contate o suporte"
        );
      }
      setInputState("");
      setButtonMessage("Cadastrar");
    });
  }
  return (
    <MainScreen>
      <img src={logo} alt={"TrackIt"} />
      <form className="generalForms" onSubmit={fazerCadastro}>
        <input
          placeholder="email"
          type="email"
          value={email}
          disabled={inputState}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="senha"
          type="password"
          value={password}
          disabled={inputState}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="nome"
          type="text"
          value={name}
          disabled={inputState}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="foto"
          type="url"
          value={photo}
          disabled={inputState}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className="buttonSubmit" type="submit">
          {buttonMessage}
        </button>
      </form>
      <Link to={"/"}>
        <span>Já tem uma conta? Faça Login!</span>
      </Link>
    </MainScreen>
  );
}
