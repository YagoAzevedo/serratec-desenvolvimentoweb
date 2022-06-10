import React, { useState } from "react";

const Formulario = () => {
  const [nome, setNome] = useState();

  const alterarNome = (e) => {
    debugger;
    setNome(e.target.value);
  }

  return (
    <>
      <input
        value={nome}
        onChange={(e) => alterarNome(e)}
        placeholder="Digite seu nome"
      />
      {nome}
    </>
  );
};

export default Formulario;
