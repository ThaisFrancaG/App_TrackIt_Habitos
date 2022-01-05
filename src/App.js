import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RenderLogin from "./components/loginCadastro/RenderLogin";
import RenderCadastro from "./components/loginCadastro/RenderCadastro";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RenderHoje from "./components/hoje/RenderHoje";

export default function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RenderLogin userInfo={userInfo} setUserInfo={setUserInfo} />
            }
          ></Route>
          <Route path="/cadastro" element={<RenderCadastro />}></Route>
          <Route
            path="/hoje"
            element={
              <RenderHoje userInfo={userInfo} setUserInfo={setUserInfo} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
