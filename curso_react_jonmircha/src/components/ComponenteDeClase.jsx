//import React from "react";  Siempre se importa React
import React, { Component } from "react";

class ComponenteDeClase extends Component {
  // Un componente de clase debe tener un método 'render()'
  // que devuelve el JSX que se mostrará.
  render() {
    return (
      <div>
        <h2>Componente de Clase</h2>
        <p>
          Este tipo de componente era la forma principal de crear componentes
          con estado antes de los Hooks.
        </p>
      </div>
    );
  }
}

export default ComponenteDeClase;
