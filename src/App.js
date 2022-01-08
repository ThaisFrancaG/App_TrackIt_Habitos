import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RenderLogin from "./components/loginCadastro/RenderLogin";
import RenderCadastro from "./components/loginCadastro/RenderCadastro";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RenderHoje from "./components/hoje/RenderHoje";
import Header from "./components/headerfooter/Header";
import Footer from "./components/headerfooter/Footer";
import RenderHabitos from "./components/habitos/RenderHabitos";
import RenderHistorico from "./components/historico/RenderHistorico";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const [habitStatus, setHabitStatus] = useState(true);
  return (
    <div>
      <UserContext.Provider
        value={[
          { userInfo, setUserInfo },
          { habitStatus, setHabitStatus },
        ]}
      >
        <BrowserRouter>
          <Header userInfo={userInfo} />
          <Routes>
            <Route path="/" element={<RenderLogin />}></Route>
            <Route path="/cadastro" element={<RenderCadastro />}></Route>
            <Route path="/hoje" element={<RenderHoje />}></Route>
            <Route path="/habitos" element={<RenderHabitos />}></Route>

            <Route path="/historico" element={<RenderHistorico />}></Route>
          </Routes>
          <Footer userInfo={userInfo} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}
