import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noopener noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementosClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <div>
        <h3>Renderizado Elementos</h3>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el, index) => (
            <ElementoLista key={index} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
