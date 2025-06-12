# Curso de Reactjs por JonMircha

1. [Componentes](#4-componentes)

## 4. Componentes

La filosofía de "divide y vencerás" es central en librerías y frameworks modernos como React, Angular, Vue o Svelte. Dentro de React, esta filosofía se materializa a través de los **componentes**.

Imagina que estás construyendo una casa. En lugar de construir toda la casa de una sola vez, la divides en partes más pequeñas y manejables: las paredes, el techo, las ventanas, las puertas, etc. Cada una de estas partes es como un componente.

Un **componente de React** es una pieza de interfaz de usuario (UI) **autónoma y reutilizable** que encapsula todo lo necesario para funcionar:

- **Código de Contenido (HTML/JSX)**
- **Código de Presentación (CSS)**
- **Funcionalidad (JavaScript)**

React se adhiere a un principio de **flujo de datos unidireccional** (o "flujo de datos en una sola dirección"). Esto significa que la información principal siempre viaja de un **componente padre** a un **componente hijo** a través de las **props**. Los componentes hijos no modifican directamente las props que reciben, ni pueden alterar el estado de su padre de forma directa. Si un hijo necesita comunicarse con su padre, lo hace a través de funciones que el padre le pasa como prop (como si el padre le diera al hijo un "teléfono" para llamarlo de vuelta).

Este flujo de datos descendente y unidireccional hace que las aplicaciones React sean más predecibles, fáciles de entender y depurar, ya que siempre sabes de dónde proviene la información.

---

Tradicionalmente, dice Jon los Componentes de Clase: Eran la única forma de crear componentes que necesitaran tener **estado interno** (variables que cambian con el tiempo, como un contador) y usar **métodos de ciclo de vida** (acciones que se ejecutan en momentos específicos, como cuando el componente aparece o desaparece de la pantalla).

Se definían como clases de JavaScript que extendían **React.Component** .y
Componentes Funcionales (sin Hooks): Se les conocía a menudo como "componentes tontos" o "presentacionales" porque:

- Eran simplemente funciones de JavaScript que recibían props y devolvían JSX.
- No podían manejar su propio estado.
- No tenían acceso a métodos de ciclo de vida.
- Su única "preocupación" era mostrar la UI basándose en las props que recibían. Toda la lógica compleja y el manejo del estado residían en los componentes de clase "contenedores" o "inteligentes".

esto cambió drásticamente con la introducción de los **Hooks** en React **16.8**

Con los Hooks, React volvió a las raíces del lenguaje JavaScript (las funciones) y permitió que los **componentes funcionales** también pudieran:

- **Tener estado** (useState).
- **Realizar efectos secundarios** (acciones que interactúan con el mundo exterior, como llamadas a APIs, suscripciones, manipulación manual del DOM, etc. – con useEffect).
- Acceder a otras características avanzadas del ciclo de vida y optimización.

---

Desde la version 17 ya no es necesario importar la libreria de React ya que deduce propiamente que trabajariamos con esa libreria. Sin embargo puede ser visto como una mala practica ya que si en tu trabajo esta dando soporte a aplicaciones de React en versiones anteriores, entonces en versiones anteriores te pueden marcar errores.

`App.jsx`

```js
import React from "react" //Es recomendable importar React al principio de tu archivo

function App(){
    ...
}
```

---

### Crear un nuevo Componente

React se basa fuertemente en el desarrollo basado en componentes. Para mantener el código limpio, escalable y fácil de manejar, la convención estándar en la comunidad de React es: **Crear una carpeta Components dentro de src**

ahora creamos el archivo En React, los nombres de los componentes siempre deben comenzar con una letra mayúscula para que JSX los reconozca como componentes personalizados y no como etiquetas HTML. Utiliza la tecnica del (Upper Camel Case)

`src/components/ComponenteDeClase.jsx`

```js
//import React from "react";  Siempre se importa React
import React, { Component } from "react";

class ComponenteDeClase extends Component {
  // Un componente de clase debe tener un método 'render()'
  // que devuelve el JSX que se mostrará.
  render() {
    return (
      <div>
        <h2>Soy un componente de clase</h2>
        <p>
          Este tipo de componente era la forma principal de crear componentes
          con estado antes de los Hooks.
        </p>
      </div>
    );
  }
}

export default ComponenteDeClase;
```
[Indice](#curso-de-reactjs-por-jonmircha)
