import { useState } from "react";
import { Container } from "../../Styles";
import { Botao, Titulo, MensagemErro } from "./Styles";

const Contador = () => {
  const [numero, setNumero] = useState(1);
  const [erro, setErro] = useState(false);

  const alterarValor = () => {
    if (numero > 10) {
      setErro(true);
    } 

    setNumero(numero + 1);
  };

  const zerarValor = () => {
    setNumero(0);
    setErro(false);
  }

  return (
    <Container>
      <Titulo>Contador</Titulo>
      {/* PROP: Parametros dos componentes React */}
      {erro && (<MensagemErro>Não é possível acrescentar</MensagemErro>)}
      <Botao onClick={() => alterarValor()}>Aumentar</Botao>
      <Botao onClick={() => zerarValor()}>Zerar</Botao>
      <Texto valor={numero} />
    </Container>
  );
};

// PROP
const Texto = ({ valor }) => {
  return <span>{valor}</span>;
};

export default Contador;
