import { useState } from "react";

export default function ContadorHooksFuncion(props) {
  const [contador, setContador] = useState(0);
  //console.log(useState)

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h3>Contador Hooks Funcion</h3>
      <h4> Contador: {contador} </h4>
      <p>Contador de {props.titulo}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </>
  );
}

ContadorHooksFuncion.defaultProps = {
  titulo: "Clicks",
};
