import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ArmazemSerratec from "./pages/ArmazemSerratec";
import Alunos from "./pages/Alunos";
import { CadastroMaterias } from "./pages/CadastroMaterias";
import { ListagemMaterias } from "./pages/ListagemMaterias";
import Navbar from "./components/Navbar";
import { TemaContext } from "./context";
import { useContext } from "react";

function App() {
  const { temaSelecionado } = useContext(TemaContext);
  const tema = {
    claro: {
      backgroundColor: "#fff",
      color: "#363535"
    },
    escuro: {
      backgroundColor: "#363535",
      color: "#fff"
    },
  };

  return (
    <div className="container" style={tema[temaSelecionado]}>
      <Navbar />
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
