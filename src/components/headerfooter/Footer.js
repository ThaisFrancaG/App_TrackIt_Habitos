import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  let currentPath = window.location.pathname;
  console.log(currentPath);

  if (
    currentPath === "/hoje" ||
    currentPath === "/historico" ||
    currentPath === "/historico"
  ) {
    return (
      <>
        <FooterStyle>
          <Link to="/habitos">
            <Button>Hábitos</Button>
          </Link>
          <Link to="/historico">
            <Button>Histórico</Button>
          </Link>
        </FooterStyle>
        <Link to="/hoje">
          <Progress>Hoje</Progress>
        </Link>
      </>
    );
  } else return <></>;
}

const FooterStyle = styled.footer`
  height: 70px;
  width: 100vw;
  background-color: #ffffff;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const Progress = styled.button`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  border: none;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  bottom: 30px;
  left: 40vw;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: #52b6ff;
  line-height: 23px;
  font-size: 18px;
`;
