import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ArmazemSerratec from "./pages/ArmazemSerratec";
import Alunos from "./pages/Alunos";
import { CadastroMaterias } from "./pages/CadastroMaterias";
import { ListagemMaterias } from "./pages/ListagemMaterias";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ArmazemSerratec />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="materias">
          <Route path="cadastro" element={<CadastroMaterias />} />
          <Route path="listagem" element={<ListagemMaterias />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
