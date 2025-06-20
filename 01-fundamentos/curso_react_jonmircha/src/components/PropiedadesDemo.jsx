import React from "react";

// Componente funcional que recibe y muestra diferentes tipos de propiedades.
// Usamos desestructuración para acceder a las props directamente.
export default function PropiedadesDemo(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li> {props.numero} </li>
        <li> {props.booleano ? "Verdadero" : "Falso"} </li>
        <li> {props.arreglo.join(", ")} </li>
        <li> {props.objeto.nombre + " - " + props.objeto.edad} </li>
        <li>{props.elementoReact}</li>
        <li>{props.ejemploNumero.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

// Definimos props por defecto.
// Si alguna de estas props no es pasada por el componente padre,
// tomará el valor especificado aquí.
PropiedadesDemo.defaultProps = {
  porDefecto: "Las props",
};
