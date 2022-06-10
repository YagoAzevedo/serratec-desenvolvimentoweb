import { useState } from "react";
import './styles.css';

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
        <div className="contador-wrapper">
            <h3>Contador</h3>
            {/* PROP: Parametros dos componentes React */}
            <button onClick={() => alterarValor()}>Aumentar</button>
            <Texto valor={numero} />
        </div>
    )
};

const Texto = ({ valor }) => {
    return (<span>{valor}</span>)
}

export default Contador;