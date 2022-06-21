import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Lottie from "react-lottie";
import carregandoAnimacao from "../../animations/lf20_k9fcyfmd.json";
import styled from "styled-components";
import { TemaContext } from "../../context";

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const {temaSelecionado} = useContext(TemaContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carregandoAnimacao,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // alunos1 -> []
  // alunos2 -> [{}]
  // alunos3 -> {}

  // GET - pegar uma informação
  // POST - cadastrar/criar uma informação
  // PUT - alterar/editar uma informação
  // DELETE - deletar uma informação
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then(({ data }) => {
      setAlunos(data.results);
    });
  }, []);

  useEffect(() => {
    if (alunos.length > 0) {
      setTimeout(() => {
        setCarregando(false);
      }, 3000);
    }
  }, [alunos]);

  const TableEstilizada = styled(TableContainer)`
    table {
      background-color: ${(props) =>
        props.tema === "claro" ? "blue" : "green"};
    }
  `;

  return (
    <>
      <Container maxWidth="sm">
        {carregando ? (
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            speed={10}
          />
        ) : (
          <TableEstilizada component={Paper} sx={{ mt: 3 }} tema={temaSelecionado}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Idade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alunos.map((aluno) => (
                  <TableRow
                    key={aluno.id.value}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{aluno.id.value}</TableCell>
                    <TableCell align="right">{aluno.name.first}</TableCell>
                    <TableCell align="right">{aluno.dob.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableEstilizada>
        )}
      </Container>
    </>
  );
};

export default Alunos;
