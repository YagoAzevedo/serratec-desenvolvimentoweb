import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MyLink } from "../../Styles";
import { useContext } from "react";
import { TemaContext } from "../../context";

const Navbar = () => {
  const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext);
  
  const alterarTema = () => {
    if (temaSelecionado === "claro") {
        setTemaSelecionado("escuro")
    } else {
        setTemaSelecionado("claro")
    }
  }

  return (
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
            <MyLink to="/alunos">Alunos</MyLink>
          </Button>
          <Button color="inherit" onClick={alterarTema}>
            Alterar tema
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
