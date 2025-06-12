import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        <h3>Comunicacion entre Componentes</h3>
        <p>
          Contador <b>{this.state.contador}</b>
        </p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 2"
        />
      </div>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h2>{props.mensaje}</h2>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
