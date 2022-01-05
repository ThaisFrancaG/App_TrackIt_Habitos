import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderLogin from "./components/loginCadastro/RenderLogin";
import RenderCadastro from "./components/loginCadastro/RenderCadastro";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />}></Route>
          <Route path="/cadastro" element={<RenderCadastro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
