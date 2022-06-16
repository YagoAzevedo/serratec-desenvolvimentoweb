import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import carregandoAnimacao from "../../animations/lf20_k9fcyfmd.json";
import { Link } from "react-router-dom";
import { MyLink } from "../../Styles";

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);

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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#ff5555" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <MyLink to="/materias/cadastro">Login</MyLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="sm">
        {carregando ? (
          <Lottie options={defaultOptions} height={400} width={400} speed={10} />
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
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
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Alunos;
