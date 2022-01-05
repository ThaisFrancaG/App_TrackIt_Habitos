import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderLogin from "./components/loginCadastro/RenderLogin";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
