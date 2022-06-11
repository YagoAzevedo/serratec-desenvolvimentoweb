import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../Styles";

const InputWrapper = styled.div`
  width: 100%;
`;

// Declaração da função
function Formulario() {
  // Estado é parecido com get; set; porém sofre alterações e renderiza de novo
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  // const [get ou valor, set ou alteração] = useState(valor inicial que vem no get)

  const alterarNome = (e) => {
    // Função que chama o set e altera o estado
    setNome(e.target.value);
  };

  // Retorno do código visual (pseudo-HTML, JSX)
  return (
    <Container>
      <InputWrapper>
        <input
          value={nome}
          onChange={(e) => alterarNome(e)}
          placeholder="Digite seu nome"
        />
        {nome}
      </InputWrapper>
      <InputWrapper>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
        {email}
      </InputWrapper>
    </Container>
  );
}

// Exportar para permitir importação em outros arquivos
export default Formulario;
