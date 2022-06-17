import { createContext, useState } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({children}) => {
  const [temaSelecionado, setTemaSelecionado] = useState("claro");

  return (
    <TemaContext.Provider
       value={{ temaSelecionado, setTemaSelecionado }}
    >
        {children}
    </TemaContext.Provider>
  )
}