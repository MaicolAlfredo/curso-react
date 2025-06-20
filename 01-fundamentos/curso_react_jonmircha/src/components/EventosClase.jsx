import React, { Component } from "react";

export class EventosClaseES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    //console.log("Sumando");
    this.setState({ contador: this.state.contador + 1 });
  }
  restar() {
    //console.log("Sumando");
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h3 className="clase__titulo">Eventos en Componentes de Clase ES6</h3>
        <h4>Contador: {this.state.contador}</h4>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

//Property Initializer Shorthand
export class EventosClaseES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow functions
  sumar = () => {
    //console.log("Sumando");
    this.setState({ contador: this.state.contador + 1 });
  };
  restar = () => {
    //console.log("Sumando");
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h3 className="clase__titulo">
          Clase 10: Eventos & Property Initializers
        </h3>
        <h3>Eventos en Componentes de Clase ES7 </h3>
        <h4>Contador: {this.state.contador}</h4>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.myOnClick}>Boton hecho componente</button>;
} */

/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Boton hecho componente</button>;
); */

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton hecho componente</button>
);
export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
    alert("Hola Mundo");
  };

  render() {
    return (
      <div>
        <h3 className="clase__titulo">
          Clase 11: Eventos Nativos, Sintéticos & Personalizados{" "}
        </h3>
        <h3>Mas Sobre Eventos</h3>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola! pasando parametro desde un evento.")
          }
        >
          Saludar
        </button>
        {/*  <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola! pasando parametro desde un evento.")
          }
        /> */}
        <h3>Evento personalizado</h3>
        <Boton
          myOnClick={(e) =>
            this.handleClick(
              e,
              "Hola! pasando parametro desde un evento personalizado."
            )
          }
        />
      </div>
    );
  }
}
