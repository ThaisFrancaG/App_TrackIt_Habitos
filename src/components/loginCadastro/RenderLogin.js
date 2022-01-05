import logo from "../../assets/images/logoTrackIt.png";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RenderLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputState, setInputState] = useState("");
  const navigate = useNavigate;
  function fazerLogin(event) {
    event.preventDefault();
    setInputState("disabled");
    alert("login foi chamado");

    // navigate(`/cadastro`);
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
          Entrar
        </button>
      </form>
      <Link to={"/cadastro"}>
        <span>Não tem uma conta? Cadastre-se!</span>
      </Link>
    </MainScreen>
  );
}

const MainScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
`;
