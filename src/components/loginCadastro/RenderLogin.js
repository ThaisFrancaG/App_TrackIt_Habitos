import logo from "../../assets/images/logoTrackIt.png";
import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import UserContext from "../../context/UserContext";
import axios from "axios";

export default function RenderLogin() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputState, setInputState] = useState("");
  const [buttonMessage, setButtonMessage] = useState("Entrar");
  const navigate = useNavigate();

  function fazerLogin(event) {
    event.preventDefault();
    setInputState("disabled");
    setButtonMessage(
      <Loader type="ThreeDots" color="#FFFFFF" height={80} width={80} />
    );

    const requisition = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email: email, password: password }
    );
    requisition.then((response) => {
      navigate(`/hoje`);
      setInputState("");
      setButtonMessage("Entrar");

      setUserInfo(response.data);
    });
    requisition.catch((error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        alert("Login não autorizado!" + " " + error.response.data.message);
      } else if (error.response.status === 422) {
        alert("Por favor, preencha todos os campos");
      }
      setInputState("");
      setButtonMessage("Entrar");
    });
  }

  return (
    <MainScreen>
      <img src={logo} alt={"TrackIt"} />
      <form className="generalForms" onSubmit={fazerLogin}>
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
        <button className="buttonSubmit" type="submit">
          {buttonMessage}
        </button>
      </form>
      <Link to={"/cadastro"}>
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </MainScreen>
  );
}

export const MainScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
`;
