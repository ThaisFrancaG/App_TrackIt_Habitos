import logo from "../../assets/images/logoTrackIt.png";
import styled from "styled-components";
import { useState } from "react";

export default function RenderLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function fazerLogin() {
    alert("login foi chamado");
  }
  return (
    <MainScreen>
      <img src={logo} alt="TrackIt" />
      <form className="generalForms" onSubmit={fazerLogin}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="buttonSubmit" type="submit">
          Entrar
        </button>
      </form>
    </MainScreen>
  );
}

const MainScreen = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
`;
