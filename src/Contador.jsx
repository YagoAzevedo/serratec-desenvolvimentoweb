import { useState } from "react";

const Contador = () => {
    const [numero, setNumero] = useState(1);

    const alterarValor = () => {
        if (numero > 10) {
            alert("não é possível");
            return;
        }

        setNumero(numero + 1)
    }

    return (
        <>
            {/* PROP: Parametros dos componentes React */}
            <Texto valor={numero} />
            <button onClick={() => alterarValor()}>Aumentar</button>
        </>
    )
};

const Texto = ({ valor }) => {
    return (<p>{valor}</p>)
}

export default Contador;