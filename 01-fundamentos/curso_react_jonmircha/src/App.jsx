import React from "react"; // Es una buena práctica importar React al inicio del archivo
import "./App.css"; // Importa el archivo CSS para estilos
import ComponenteDeClase from "./components/ComponenteDeClase";
import ComponentesDeClaseConProps from "./components/ComponentesDeClaseConProps";
import ComponenteFuncionalConProps from "./components/ComponenteFuncionalConProps";
import ComponenteFuncionExpresada from "./components/ComponenteFuncionExpresada";
import PropiedadesDemo from "./components/PropiedadesDemo";
import EstadoConClase from "./components/EstadoConClase";
import RenderizadoCondicionalClase from "./components/RenderizadoCondicionalClase";
import RenderizadoElementosClase from "./components/RenderizadoElementosClase";
import {
  EventosClaseES6,
  EventosClaseES7,
  MasSobreEventos,
} from "./components/EventosClase";
import Padre from "./components/ComunicacionComponenteClase";
import CicloVidaClase from "./components/CicloVidaClase";
import AjaxApisClase from "./components/AjaxApisClase";
import ContadorHooksFuncion from "./components/ContadorHooksFuncion";
import ScrollHooksFuncion from "./components/ScrollHooksFuncion";
import RelojHookFuncion from "./components/RelojHookFuncion";

function App() {
  return (
    <>
      <h1>Curso de React con Jon Mircha</h1>
      <div>
        <h2 className="clase__titulo">Clase 4: Componentes</h2>
        <ComponenteDeClase />
        <ComponentesDeClaseConProps msg="¡Hola, soy un componente de clase con props!" />
        <ComponenteFuncionalConProps msg="¡Hola, soy un componente funcional con props!" />
        <ComponenteFuncionExpresada msg="¡Hola, soy un componente funcional expresado!" />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 5: Propiedades</h2>
        <PropiedadesDemo
          cadena="Esto es una cadena de texto"
          numero={42}
          booleano={true}
          arreglo={["uno", "dos", "tres", "cuatro"]}
          objeto={{ nombre: "Juan", edad: 30 }}
          ejemploNumero={[1, 2, 3]}
          funcion={(x) => x * x}
          elementoReact={
            <strong>Este es un texto en negrita pasado como prop</strong>
          }
          componenteReact={
            <ComponentesDeClaseConProps msg="Esto es un componente pasado como prop" />
          }
        />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 6: Estado</h2>
        <EstadoConClase />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 7: Renderizado Condicional</h2>
        <RenderizadoCondicionalClase />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 8: Renderizado de Elementos</h2>
        <RenderizadoElementosClase />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 9: Eventos</h2>
        <EventosClaseES6 />
        <EventosClaseES7 />
        <MasSobreEventos />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">
          Clase 12: Comunicacion entre Componentes
        </h2>
        <Padre />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">
          Clase 13: Ciclo de Vida de los Componentes
        </h2>
        <CicloVidaClase />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 14: Peticiones Asincronas</h2>
        <AjaxApisClase />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo_principal">Functional Component</h2>
        <h2 className="clase__titulo">Clase 16: Hook useState</h2>
        <ContadorHooksFuncion />
      </div>
      <hr />
      <div>
        <h2 className="clase__titulo">Clase 17: Hook useEffect parte 1</h2>
        <ScrollHooksFuncion />
        <h2 className="clase__titulo">Clase 18: Hook useEffect parte 2</h2>
        <RelojHookFuncion />
      </div>
    </>
  );
}

export default App;
