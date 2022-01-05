import logo from "../../assets/images/logoTrackIt.png";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function RenderCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate;
  function fazerCadastro(event) {
    event.preventDefault();
    alert("cadastro foi chamado");
    // navigate(`/cadastro`);
  }
  return (
    <MainScreen>
      <img src={logo} alt={"TrackIt"} />
      <form className="generalForms" onSubmit={fazerCadastro}>
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
        <input
          placeholder="nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="foto"
          type="url"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className="buttonSubmit" type="submit">
          Cadastrar
        </button>
      </form>
      <Link to={"/"}>
        <span>Já tem uma conta? Faça Login!</span>
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
