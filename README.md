# Curso de Reactjs por JonMircha

1. [Componentes](#4-componentes)
1. [15. Hooks](#15hooks)
1. [17. Hook useEffect](#17-hook-useeffect)

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

## 15.Hooks

"Recuerden que es fundamental comprender las bases de la tecnología con la que trabajamos, ya sea una herramienta, un framework, un lenguaje o una librería ".

Como saben, el maestro JonMircha se enfoca en ir a los detalles y partir desde el principio. Aunque los componentes de clase se utilizan cada vez menos, así fue como nació React. Por ello, Jon no quizo iniciar este curso directamente con los Hooks y dejar de lado los componentes de clase. A lo largo de las clases, hemos visto cómo las actualizaciones de ECMAScript introdujeron cambios en la forma de escribir código, y en esta clase, que es la introducción a los Hooks de React, quiero que entiendan la razón por la que comencé el curso con los componentes de clase en lugar de los Hooks.

La palabra 'hook' significa 'gancho'. Se trata de una característica novedosa introducida en React a partir de la versión 16.8, y su propósito literal es 'enganchar', de ahí su nombre. Los hooks nos brindan la capacidad de acceder, mediante funciones, a los conceptos de estado y ciclo de vida. Antes de la versión 16.8, estos conceptos eran exclusivos de los componentes basados en clases. De hecho, a los componentes funcionales se les conocía como 'componentes contenedores' o 'componentes tontos', precisamente porque su función se limitaba a contener o presentar información proveniente de otro componente que sí gestionaba lógica. Por ejemplo, el componente funcional llamado 'Pokemon'.

`AjaxApisClase.jsx`

```js
function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>
        <span># {props.id}</span> {props.name}
      </figcaption>
    </figure>
  );
}
```

cuya función era simplemente construir una estructura HTML con la imagen y el nombre del Pokémon, era denominado 'componente tonto' o 'componente de presentación'. Esto se debía a que su único objetivo era mostrar y renderizar la información que le proporcionábamos a través de propiedades (props). La lógica de programación, en cambio, recaía en los componentes de clase. Métodos como componentDidMount(), componentWillUnmount(), componentDidUpdate(), junto con el constructor, el método render y la gestión de la variable de estado, eran los que permitían implementar la lógica compleja y realizar acciones más allá de la simple visualización de datos. Así, antes de la aparición de los hooks, los componentes funcionales se limitaban a la presentación y no podían incorporar lógica propia.

### ¿Por qué se crearon los hooks?

---

Aquí reside un punto crucial: el concepto de clases (class) puede resultar confuso tanto para las personas como para las máquinas. Recordemos que, independientemente del lenguaje de programación en el que hayamos aprendido por primera vez, la programación orientada a objetos, con su abstracción de conceptos como clase, instancia, objetos, métodos y propiedades, siempre ha implicado un esfuerzo mental para comprender cómo funciona este paradigma y cómo representar objetos del mundo real en el entorno abstracto y digital de las computadoras.

Además, adentrándonos en el terreno de JavaScript, aunque hoy en día contamos con clases gracias al 'azúcar sintáctico' introducido en ECMAScript 6, es fundamental recordar que otro aspecto clave de JavaScript es el funcionamiento del contexto de la palabra reservada this, que difiere de otros lenguajes de programación.

Dado que React, en sus inicios, definió sus componentes más relevantes (aquellos con lógica) basándose en clases, esto, sumado a la sintaxis JSX y la configuración con Webpack, incrementó considerablemente la curva de aprendizaje. En este sentido, considero que la creación de los hooks por parte del equipo de Facebook fue un retorno a los orígenes de JavaScript. Si bien JavaScript permite la programación orientada a objetos, es importante recordar que las clases, en realidad, no existen per se; son solo 'azúcar sintáctico'. Tras bambalinas, seguimos trabajando con prototipos, que son funciones constructoras.

Por lo tanto, al crear los hooks, lo que se hizo fue regresar a las bases: JavaScript es un lenguaje funcional, y las funciones, como se menciona en numerosos textos, son 'ciudadanos de primer orden'. Con las funciones podemos lograr prácticamente cualquier cosa en JavaScript. Las funciones y los objetos son, sin duda, de las herramientas más poderosas que posee este maravilloso lenguaje que domina la web.

Las clases no solo resultan confusas para quienes aprendemos a programar, lidiando con conceptos de la programación orientada a objetos como métodos, recursos públicos, privados, protegidos o herencia. También representan un desafío para las máquinas durante el proceso de transpilación. Cuando se convierte código moderno a versiones anteriores de ECMAScript (como la 5) para asegurar la compatibilidad con todos los navegadores, las clases son más difíciles de procesar.

Además, minificar el código basado en clases es más complejo y ocupan más espacio de almacenamiento. Aquellos que ya han trabajado con componentes funcionales, y quienes lo harán en las próximas clases, notarán que muchas tareas que realizábamos con componentes de clase ahora se logran de forma más rápida y con menos código. Esto no solo hace que nuestros archivos sean más ligeros, sino que también mejora el rendimiento a nivel de memoria y procesamiento, ya que para las computadoras es más sencillo gestionar una función que una clase.

### Preguntas Frecuentes

---

A continuación, prestemos atención a estas preguntas frecuentes que he seleccionado basándome en experiencias comunes:

### ¿Los hooks hacen que mi aplicación sea más rápida?

No, la funcionalidad en sí misma puede ser la misma. Si bien a nivel de tamaño, al convertir una aplicación con numerosos componentes de clase a componentes funcionales, podrías ahorrar algunos bytes. Esto se debe a que se escribe menos código, lo que resulta en archivos más pequeños y una compilación potencialmente más sencilla. Sin embargo, el rendimiento general de la aplicación depende de otros factores. Es posible escribir código eficiente tanto con clases como con funciones, por lo que los hooks por sí solos no garantizan una aplicación más rápida.

### ¿Los hooks ofrecen funcionalidades que un componente de clase no pueda realizar?

En realidad, no. Los hooks fueron creados para proporcionar a los componentes funcionales las capacidades que antes solo estaban disponibles en los componentes de clase. No introducen funcionalidades completamente nuevas a React.

### ¿Los componentes de clase desaparecerán?

Por el momento, no. El equipo de Facebook no tiene planes de eliminarlos, precisamente por el principio de retrocompatibilidad. Una de las fortalezas de React es que, a pesar de introducir nuevas características, sigue dando soporte a lo que ya existía y funcionaba. Aunque es probable que con el tiempo la mayoría del código nuevo en React se escriba utilizando hooks en lugar de componentes de clase, esto no implica que la funcionalidad de los componentes de clase vaya a desaparecer.

### ¿Mi conocimiento sobre estado, props y eventos se volverá obsoleto con los hooks?

¡NO! Los hooks no invalidan estos conceptos fundamentales de React. Simplemente ofrecen una forma diferente de gestionarlos dentro de componentes funcionales. Comprender estado, props y eventos sigue siendo esencial para trabajar con React, independientemente de si usas clases o hooks.

### ¿Debo reescribir todas mis aplicaciones de React existentes con hooks?

Probablemente no, y en muchos casos, no es necesario. Si tienes una aplicación que ya funciona correctamente y solo requiere mantenimiento, no tiene sentido reescribir toda su lógica. Sería un esfuerzo innecesario. Sin embargo, si se te solicita agregar nuevas funcionalidades significativas o desarrollar una nueva versión de la aplicación, podría ser una buena oportunidad para implementar hooks en esos nuevos módulos o componentes. Gracias a la retrocompatibilidad de React, puedes tener coexistiendo en una misma aplicación código escrito con componentes de clase y código con hooks sin problemas.

### ¿Debería implementar hooks en mi próximo proyecto?

Sí, es muy probable que debas hacerlo. Los hooks son la dirección hacia la que se mueve React y ofrecen una forma más concisa y, para muchos, más intuitiva de construir componentes funcionales con estado y lógica.

## Tipos de Hooks

Existen diferentes tipos de hooks. Si estás migrando de componentes de clase a funcionales, los hooks básicos con los que trabajarás intensamente son:

- `useState`: Este hook te permite manejar el estado dentro de componentes funcionales.
- `useEffect`: Este hook te permite simular el ciclo de vida de los componentes funcionales, manejando efectos secundarios.

Además de estos, existen hooks más avanzados como `useContext`, `useRef`, `useReducer`, `useCallback`, `useMemo`. Incluso tendrás la oportunidad de crear tus propios hooks personalizados para reutilizar lógica entre componentes.

## 17 Hook useEffect

1. [Fase de Montaje](#fase-de-montaje-componentdidmount)
2. [Fase de Actualización](#fase-de-actualización-componentdidupdate)
3. [Fase de Desmontaje](#fase-de-desmontaje-componentwillunmount)

En la clase anterior comenzamos a explorar de forma práctica el concepto de los hooks y vimos el primero: `useState`, que nos permite gestionar el estado en un componente funcional.

Ahora abordaremos `useEffect`, el hook que posibilita a los componentes funcionales simular el ciclo de vida de los componentes de clase. Con `useEffect` podemos representar las tres fases principales: el montaje (similar a `componentDidMount`), la actualización (similar a `componentDidUpdate`), y el desmontaje (similar a `componentWillUnmount`). La sintaxis de `useEffect` varía según la fase que deseemos simular.

### Creaccion de los archivos

---

`src > components > ScrollHooksFuncion.jsx`

```js
import { useState, useEffect } from "react";

export default function ScrollHookFuncio() {
  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
    </>
  );
}
```

Lo mandamos a llamar en el archivo `App.jsx`

```js
import ScrollHooksFuncion from "./components/ScrollHooksFuncion";

function App() {
  return (
    <>
    {/* Demas clases del curso */}
    <hr/>
    <div>
      <h2 className="clase__titulo">Clase 17: Hook useEffect parte 1</h2>
      <ScrollHooksFuncion />
    </div>
    </>
  )
```

### Fase de Montaje (`componentDidMount`)

---

Es crucial destacar que puedes utilizar tantos `useEffect` como necesites en un componente funcional. Para invocar la función `useEffect`, puedes hacerlo directamente.

Por ejemplo, para simular la fase de montaje (`componentDidMount`), podemos utilizar useEffect de la siguiente manera:

```js
useEffect(() => {
  console.log("Fase de Montaje");
});
```

Al ejecutar este código, verás el mensaje 'Fase de Montaje' en la consola del navegador una vez que el componente se haya montado en el DOM."

```js
import { useState, useEffect } from "react";

export default function ScrollHookFuncio() {
  useEffect(() => {
    //Fase de Montaje
    console.log("Fase de Montaje");
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
    </>
  );
}
```

### Fase de Actualización (`componentDidUpdate`)

---

Es crucial entender que si no se especifica un arreglo de dependencias, la función dentro de `useEffect` se ejecutará cada vez que el componente se renderice. Por ejemplo, si tuviéramos una variable de estado que se actualiza constantemente mediante un setInterval (un intervalo de tiempo), el `useEffect` se estaría ejecutando de forma continua.

Recuerden que este componente se llama 'ScrollHooksFuncion' porque implementaremos un pequeño código para detectar la posición del desplazamiento (scroll) en la ventana.

Para ello, vamos a necesitar una variable de estado gestionada con `useState`. La llamaremos `scrollY` para reflejar que nos interesa el desplazamiento vertical de la página. La función para actualizar esta variable se llamará `setScrollY`, y su valor inicial será cero: `const [scrollY, setScrollY] = useState(0);`. Dentro del `useEffect`, crearemos una función encargada de añadir un "listener" (escuchador) al evento "scroll" de la ventana. Esta función estará evaluando constantemente el comportamiento del scroll para actualizar la interfaz de usuario.

Para visualizar el valor de `scrollY` en el navegador, podemos agregar un párrafo (`<p>`) en el JSX del componente, interpolando la variable de estado: `<p>Scroll Y del navegador: {scrollY}</p>`.

Dentro del `useEffect` vamos a crear una función flecha llamada `detectarScroll`. Dentro de esta función, utilizaremos `setScrollY` para actualizar nuestro estado `scrollY`. Le asignaremos el valor de `window.scrollY`, que es la propiedad que nos indica cuántos píxeles nos hemos desplazado desde la parte superior de la ventana del navegador.

```js
useEffect(() => {
  const detectarScroll = () => {
    setScrollY(window.scrollY);
  };
});
```

Inicialmente, en el navegador verán 'Scroll Y del navegador: 0 píxeles' al recargar la página. Esto se debe al valor inicial de cero que le asignamos a la variable de estado `scrollY`. El `useEffect` que pusimos con el `console.log("Fase de Montaje")` se ejecutó una sola vez al inicio, en la fase de montaje.

Ahora, ¿cómo logramos que el valor se actualice constantemente con el desplazamiento? En lugar de ejecutar directamente la función `detectarScroll()`, debemos asignarla como un 'listener' al evento 'scroll' de la ventana. Observen cómo esto es JavaScript puro dentro de React: `window.addEventListener("scroll", detectarScroll);`

Veamos ahora la diferencia en la consola de las herramientas de desarrollo. Notarán que el mensaje 'Fase de Montaje' se repite. De hecho, se ejecuta prácticamente por cada desplazamiento que hacemos en la barra. Y lo más importante, ¡el número de píxeles del scrollY se actualiza correctamente! Pueden ver cómo detecta la distancia con respecto al margen superior de la página.

Entonces, observemos que un `useEffect` configurado de esta manera, sin un arreglo de dependencias:

```js
useEffect(() => {
  console.log("Fase de Actualizacion");

  const detectarScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", detectarScroll);
});
```

En realidad, no está simulando únicamente la 'fase de montaje'. Dado que la actualización del estado scrollY a través del evento 'scroll' provoca re-renderizaciones del componente, este useEffect se ejecuta en cada una de esas actualizaciones. Por lo tanto, está representando la 'fase de actualización' del ciclo de vida.

Entonces, si quisiéramos representar la fase de montaje, recordemos que `useEffect` recibe un segundo parámetro: el arreglo de dependencias. Las dependencias son los valores que `useEffect` 'observará'. Si no especificamos este segundo parámetro (el arreglo de dependencias), todo lo que esté dentro del `useEffect` se ejecutará cada vez que el componente se re-renderice.

Para ilustrar esto, voy a crear un nuevo `useEffect` (recuerden que pueden tener tantos como necesiten). Dejaré un useEffect solo con un `console.log("Fase de Actualizacion")`. Así podrán observar cómo este mensaje se imprime cada vez que el componente se renderiza, lo cual sucede debido al cambio en la variable de estado `scrollY`.

```js
useEffect(() => {
  console.log("Fase de Actualizacion");
});
```

Ahora, ¿qué sucede si necesitamos que un `useEffect` se ejecute exclusivamente en la fase de montaje? Para lograr esto, utilizamos ese segundo parámetro que mencionamos anteriormente: el arreglo de dependencias (`DependencyList`). Este arreglo le indica a `useEffect` qué variables debe 'observar' para determinar cuándo debe ejecutarse.

Si le pasas una o varias variables de estado en este arreglo, el `useEffect` se ejecutará únicamente cuando esas variables cambien de valor.

Sin embargo, para simular la fase de montaje (`componentDidMount`), lo que hacemos es pasar un arreglo de dependencias vacío `[]`:

```js
useEffect(() => {
  console.log("Fase de Montaje");
}, [scrollY]);
```

En este punto, podrías preguntar: 'Oye, pero si yo muevo la barra de desplazamiento, el valor de `scrollY` cambia constantemente. ¿No haría eso que el `useEffect` se ejecute muchas veces si lo pongo en las dependencias?' Y la respuesta es: sí, exactamente. Si incluyes `scrollY` en el arreglo de dependencias, el `useEffect` se ejecutará cada vez que `scrollY` cambie.

Sin embargo, si lo que necesitas es que una acción, como realizar una petición a un servicio externo o a una API, se ejecute una única vez al cargar el componente, la recomendación de React es precisamente dejar ese arreglo de dependencias vacío `[]`. Al hacerlo, el `useEffect` se comportará como la fase de montaje (`componentDidMount`) de un componente de clase, ejecutándose solo una vez cuando el componente se renderiza por primera vez.

entonces lo que tienes que entender es que un useEffect que no tiene definido el segundo parámetro que es la lista de dependencias va a ser como un componentDitUpdate cada vez que se vuelva a renderizar el componente se va a ejecutar todo lo que esté en ese efecto

si tú quieres replicar el componentDitUpdate que era el que solamente se ejecutaba la primera vez que cargaba en la fase de montaje entonces ese segundo parámetro lo dejas vacío

ahora lo correcto también es no dejar a lo loco sí o sea ahí a estar que cada vez que se renderize se ejecute una programación lo ideal es que cuando tú necesites que algo se que dependiendo del cambio de estado de una variable de estado como scrollY se vuelva a ejecutar una función de efecto lo ideal es aquí decirle este efecto solamente se va a actualizar cuando la variable `[scrollY]` tenga cambios.

Por lo tanto, es fundamental comprender el comportamiento de `useEffect` con respecto al segundo parámetro, el arreglo de dependencias:

- Un `useEffect` que **no tiene definido el segundo parámetro (la lista de dependencias)** se comportará como `componentDidUpdate`. Se ejecutará cada vez que el componente se re-renderice.

- Si quieres replicar la **fase de montaje (`componentDidMount`)**, es decir, que el efecto se ejecute solo la primera vez que el componente carga, debes pasar un **arreglo de dependencias vacío `[]`** como segundo parámetro.

- Lo más recomendable no es dejar los `useEffect` sin el arreglo de dependencias para que se ejecuten en cada renderización de forma descontrolada. Lo ideal es especificar las dependencias. Cuando necesites que un efecto se ejecute dependiendo del cambio en una variable de estado (como `scrollY`), debes incluir esa variable en el arreglo de dependencias. De esta manera, el efecto solo se actualizará cuando la variable `scrollY` cambie:

```js
useEffect(() => {
  // Código que se ejecuta cuando scrollY cambia
}, [scrollY]); // El efecto depende de scrollY
```

En resumen, de preferencia no te acostumbres a dejar useEffect sin su segundo parámetro. Si quieres que se ejecute solo en la fase de montaje, deja el arreglo vacío []. Si quieres que se ejecute cuando una o varias variables específicas cambien, inclúyelas en el arreglo de dependencias.

### **Fase de Desmontaje (`componentWillUnmount`)**

---

Ahora, un aspecto fundamental: dado que `useEffect` puede generar 'efectos' secundarios —como establecer conexiones a servicios, realizar peticiones a APIs, o configurar temporizadores y manejadores de eventos que se ejecutan periódicamente— es crucial poder 'limpiar' esos efectos cuando el componente deja de existir. Esto simula lo que en los componentes de clase conocíamos como la fase de desmontaje (`componentWillUnmount`).
¿Cómo simulamos esta fase de desmontaje con `useEffect`? La función que pasamos a `useEffect` puede retornar a su vez _otra función_. Recuerden que en JavaScript, las funciones son ciudadanos de primer orden, lo que nos da gran flexibilidad. Cuando un `useEffect` retorna una función, React interpreta que esta función debe ejecutarse en la fase de desmontaje del efecto.
Este retorno es el lugar ideal para realizar tareas de limpieza:

- Cancelar suscripciones a servicios.
- Desconectar de APIs.
- Limpiar intervalos (`setInterval`) o temporizadores (`setTimeout`).
- Eliminar manejadores de eventos que hayamos añadido a elementos que puedan dejar de existir en la UI.
  Es vital realizar estas limpiezas porque, al añadir listeners, temporizadores o hacer solicitudes a APIs, estamos consumiendo memoria del navegador. Para optimizar el rendimiento de nuestra aplicación y evitar fugas de memoria, es indispensable que estas tareas de limpieza se ejecuten en la función que retornamos desde `useEffect`.
  Por ejemplo, para limpiar el manejador de eventos 'scroll' que añadimos para detectar el movimiento del scroll, podemos retornar una función dentro de `useEffect` que utilice `window.removeEventListener`:

```js
useEffect(() => {
  const detectarScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", detectarScroll);

  return () => {
    window.removeEventListener("scroll", detectarScroll);
    console.log("Fase de Desmontaje");
  };
});
```

---
Código completo

`ScrollHooksFuncion.jsx `

```js
import { useState, useEffect } from "react";

export default function ScrollHookFuncio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //Fase de Montaje
    console.log("Fase de Montaje");

    const detectarScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      console.log("Fase de Desmontaje");
    };
  });

  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    //  console.log("Fase de Actualizacion");
  });

  useEffect(() => {
    return () => {
      // console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
      <p>Scroll Y del navegador: {scrollY}</p>
    </>
  );
}
```

[Indice](#curso-de-reactjs-por-jonmircha)