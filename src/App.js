import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import RenderLogin from "./components/LoginCadastro/RenderLogin";
import RenderCadastro from "./components/LoginCadastro/RenderCadastro";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RenderHoje from "./components/Hoje/RenderHoje";
import RenderHabitos from "./components/Habitos/RenderHabitos";
import RenderHistorico from "./components/Historico/RenderHistorico";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [habitStatus, setHabitStatus] = useState(true);
  const [completionStatus, setCompletionStatus] = useState(0);
  const [localLogin, setLocalLogin] = useState("");

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );

  return (
    <div>
      <UserContext.Provider
        value={{
          userInfo,
          setUserInfo,
          habitStatus,
          setHabitStatus,
          completionStatus,
          setCompletionStatus,
          localLogin,
          setLocalLogin,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RenderLogin />}></Route>
            <Route path="/cadastro" element={<RenderCadastro />}></Route>
            <Route path="/hoje" element={<RenderHoje />}></Route>
            <Route path="/habitos" element={<RenderHabitos />}></Route>

            <Route path="/historico" element={<RenderHistorico />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
