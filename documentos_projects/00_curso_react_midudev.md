# Curso de React de MIDUDEV

**Indice**

1. [Introducción](#1-introducción-0000)
2. [¿Qué es React?](#2-qué-es-react-0130)
3. [AVISO](#3aviso-sobre-la-documentación-0423)
4. [¿Dónde sale React?](#4-de-dónde-sale-react-0710)
5. [7 razones para aprender React](#5-7-razones-para-aprender-react-0939)

### Vanilla-JavaScript

6. [¿Por qué React?](#6por-qué-react-creando-un-botón-sin-react-1850)
7. [Cómo usar React sin dependencias](#7cómo-usar-react-sin-dependencias-2638)
8. [Crea tu primer elemento](#8crea-tu-primer-elemento-3000)
9. [Elemento con atributos](#9elemento-con-atributos-3145)
10. [Frgment](#10fragment-3430)
11. [JSX desde cero](#11jsx-desde-cero-3600)

### React.js

12. [Crea tu primera aplicación con React](#12crea-tu-primera-aplicación-con-react-4400)
13. [Crear componentes en React](#13crear-componentes-en-react-5400)
14. [Tu primer proyecto práctico con React](#14tu-primer-proyecto-práctico-con-react-5820)
15. [Estilos en React](#15estilos-en-react-010250)
16. [Reutilización de componentes: Props ](#16reutilización-de-componentes-props-010929)
17. [Estila contenedor para separaciones y no componentes](#17estila-contenedor-para-separaciones-y-no-componentes-011415)
18. [Pasando booleanos como props](#18pasando-booleanos-como-props-011550)
19. [Pasando funciones como props](#19pasando-funciones-como-props-011830)
20. [Elementos como props](#20elementos-como-props-012120)
21. [Diferencia entre elemento y componente ](#21diferencia-entre-elemento-y-componente-012310)
22. [Las props son inmutables ](#22las-props-son-inmutables-012450)
23. [La prop especial children](#23la-prop-especial-children-012650)
24. [Pasar objeto como props](#24pasar-objeto-como-props-013400)
25. [State en React](#25state-en-react-013627)

- [hocks useState](#hocks-usestate-14034)
- [Cuando entiendas esto](#cuando-entiendas-esto-estaras-por-encima-de-mucha-gente-que-no-entiende-20208)

```js
console.log("hola mundo");
```

## 1. Introducción 00:00

Esta frase que te define: ¿qué es React? Es una biblioteca de JavaScript para construir interfaces de usuario. En esta frase no se nos dice que React sea para desarrollar aplicaciones web, no se nos dice que es para hacer páginas web, aplicaciones web, SPA (Single Page Applications), nada de eso. Tienes que tener algo muy en cuenta: React está pensado para interfaces de usuario, independientemente de la plataforma. Esto quiere decir que lo que vas a aprender en este curso lo podrás utilizar para crear páginas web, pero también aplicaciones móviles o incluso aplicaciones de terminal.

React se utiliza en un montón de sitios porque es agnóstico de la plataforma, y lo entenderás más adelante en el curso. Esto se debe a que está dividido en diferentes paquetes: uno sería React (el núcleo) y otro React DOM (específico para navegadores).

[Indice](#curso-de-react-de-midudev)

## 2. ¿Qué es React? 01:30
Lo más importante que tienes que tener en cuenta es que React es una biblioteca de JavaScript para construir interfaces de usuario, y estas interfaces pueden estar en cualquier plataforma: sitios web, dispositivos móviles, aplicaciones de escritorio, etc.

### Dos aspectos clave de React:
1. Es declarativo: Permite crear interfaces de forma sencilla y predecible.
2. Basado en componentes: Todo se construye mediante componentes reutilizables.

Hoy en día, frameworks como Vue o Angular también usan componentes, pero esto no siempre fue así. Antes, no era tan fácil reutilizar código como lo es ahora. Por ejemplo, si entras a una página como Twitter, verás que está llena de componentes de React.

Beneficios de los componentes:
- Interfaces modulares: La interfaz se construye con "piezas de Lego" (componentes) que se repiten y combinan.

- Reutilización: Si modificas un componente, el cambio se refleja automáticamente en toda la aplicación.

React es universal:
- Se ejecuta en cliente y servidor: Esto permite reutilizar código entre el frontend y el backend.

- Ventaja histórica: Cuando surgió, esta capacidad era innovadora. Ahora, es una práctica común que simplifica el desarrollo.

Con React, escribes la aplicación una sola vez y la ejecutas en múltiples entornos.



[Indice](#curso-de-react-de-midudev)

## 3.Aviso sobre la documentación 04:23

[React-midu](reactjs.wiki)

## 4. De dónde sale React 07:10

React es una biblioteca de código abierto creada por Meta (antes Facebook). Meta es la empresa detrás de productos como Facebook, Instagram y WhatsApp, y en todos ellos se utiliza React.

Historia de React:

2011: Nace como un proyecto interno de Meta. Su creador, Jordan Walke (pronunciado "Uolk"), lo desarrolló para simplificar la creación de interfaces de usuario, especialmente formularios, que eran muy complejos de manejar. Walke, con experiencia en backend y sistemas distribuidos (trabajó en Amazon antes de unirse a Facebook), buscaba resolver problemas comunes en el desarrollo frontend.

2012: Facebook e Instagram comienzan a usar React internamente.

2013: Se hace código abierto bajo licencia BSD.

Características clave:

- Protección contra XSS (Cross-Site Scripting): React evita inyecciones de código malicioso al escapar automáticamente el contenido, algo que veremos en el curso.

- Adopción gradual: Aunque es de código abierto desde 2013, inicialmente su licencia tenía restricciones para empresas competidoras de Meta. En 2017, se cambió a la licencia MIT para mayor flexibilidad.

[Indice](#curso-de-react-de-midudev)

## 5. 7 razones para aprender React 09:39

1. Es el Framework más Demandado en el Mundo

- React es la biblioteca más popular y demandada en el mercado laboral, superando a Angular y Vue en la mayoría de los países.
- Ejemplo: En Estados Unidos e India, el 60% de las ofertas de trabajo para desarrolladores frontend están relacionadas con React.
- Conclusión: Aprender React te abre las puertas a un montón de oportunidades laborales.

2. Puedes Desarrollar Aplicaciones Móviles con React Native

- Lo que aprendes en React lo puedes aplicar en React Native para crear aplicaciones móviles.
- Grandes empresas como Microsoft, Facebook, Shopify y otras usan React Native para sus aplicaciones.
- Conclusión: Aprender React te permite expandir tus habilidades al desarrollo móvil.

3. Mantenimiento Asegurado por Facebook (Meta)

- Facebook (ahora Meta) utiliza React en productos clave como Facebook, Instagram y WhatsApp Web.
- Tiene más de 50,000 componentes escritos en React, lo que garantiza que seguirá siendo relevante y mantenido durante mucho tiempo.
- Conclusión: React tiene el respaldo de una de las empresas más grandes del mundo.

4. Te Ayuda a Aprender Otros Frameworks

- Los conceptos de React (como componentes, estado, props, etc.) son transferibles a otros frameworks como Angular, Vue o Svelte.
- Conclusión: Aprender React te facilita la transición a otras tecnologías en el futuro.

5. Tiene un Futuro Prometedor

- React ha crecido constantemente en popularidad desde su lanzamiento en 2013.
- Las tendencias de descargas en npm muestran que React sigue en aumento, mientras que otros frameworks han tenido altibajos.
- Conclusión: React no es una moda pasajera, sino una tecnología con un futuro sólido.

6. API Estable y Fácil de Migrar

- A diferencia de otros frameworks, React ha mantenido una API estable a lo largo del tiempo.
- Los cambios son incrementales y fáciles de adoptar, lo que hace que las migraciones sean menos dolorosas.
- Conclusión: React es una opción segura y confiable a largo plazo.

7. Comunidad Gigante y Activa

- React tiene una de las comunidades más grandes y activas en el mundo del desarrollo web.
- Hay miles de recursos, tutoriales, librerías y soporte disponible en línea.
- Conclusión: Nunca estarás solo, siempre habrá alguien dispuesto a ayudarte.

[Indice](#curso-de-react-de-midudev)

## 6.Por qué React Creando un botón sin React 18:50

Una de las cosas más importantes para mí para aprender React, y te voy a explicar por qué es clave que entiendas por qué React. Vamos a ver un ejemplo práctico con Vanilla JavaScript que explicaré paso a paso. Luego, migraremos ese código a React. Es decir, no comenzaremos directamente con React: primero construiremos una pequeña UI con JavaScript puro, y después la adaptaremos gradualmente a React. Así veremos cómo hacerlo y por qué es beneficioso.

Imaginá que queremos crear un button, como el boton "Me gusta" de facebook. Esto es html, le añadimos estilos.

```html
<button>Me gusta</button>

<style>
  button {
    background: #09f;
    color: #fff;
    border: 0;
    padding: 4px 8px;
    font-size: 18px;
    cursor: pointer;
  }
</style>
```

Normalmente, si utilizáramos JavaScript sin ningún framework, sin ninguna biblioteca, imagínate que yo quiero que cuando le hagas clic puedas hacer algo. Quiero que cuando hagas clic pueda pasar de 'me gusta' a 'no me gusta'. Eso sería darle interactividad a nuestra página web, y este sería el caso más típico, como, por ejemplo, lo hemos hecho en Facebook. Vamos a escribir JavaScript normalmente (cuando no usas ningún tipo de biblioteca ni dependencia) para crear algo con JavaScript. A esto se le denomina Vanilla JavaScript. Así que vamos a hacer Vanilla JavaScript.

¿Qué es lo primero que deberíamos hacer si quiero que al hacer clic pueda pasar de una cosa a otra? Pues recuperamos el botón. Vamos a tener una constante button del documento: voy a seleccionar el botón y ya tenemos en esta constante nuestro botón:

```js
const button = document.queryselector("button");
```

Al hacer click en el botón tenemos que ejecutar una función y al ejecutar una función queremos que haga algo.

```js
button.addEventListener("click", function () {});
```

Ahora lo que queremos 1. recuperar la información de que es lo que te gusta, ¿será un articulo, será algo?. Normalmente tenemos un "id" data-id y ya tenemos una forma de tener esa información ahi en el elemento.

```html
<button data-id="123">Me gusta</button>
```

Asi que lo primero que tenemos que hacer es "recuperar la id del atributo del HTML". ¿cómo hacemos esto? creamos otra vez una constante y recuperamos el atributo. Con esto podemos "llamar a un servicio para actualizar si me gusta".

```js
button.addEventListener("click", function () {
  //recuperar la id del atributo del HTML
  const id = button.getAttribute("data-id");

  //llamar a un servicio para actualizar si me gusta.pd no se hizo.
});
```

tenemos que cambiar también la UI como hemos visto react nos funciona para trabajar y construir interfaces de usuario y justamente la interfaces usuario normalmente son interactivas tienen que responder a lo que hacen.

```js
button.addEventListener("click", function () {
  //recuperar la id del atributo del HTML
  const id = button.getAttribute("data-id");

  //llamar a un servicio para actualizar si me gusta.pd no se hizo.

  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
    button.innerText = "Me gusta";
  } else {
    button.classList.add("liked");
    button.innerText = "Quitar me gusta";
  }
});
```

¿qué pasa con lo que estamos haciendo? lo que estamos haciendo es código imperativo ¿Qué significa imperativo? significa que le estamos diciendo el "cómo" lo tiene que hacer.Fijate que le escrito recupera este botón,cando este botón escucha el evento, que cuando hagas click Entonces quiero que recuperes la id del atributo, luego llamas al servicio para actualizar si me gusta y quiero que veas si contiene esta información entonces borra esto... eso se le llama código imperativo le estamos describiendo cómo tiene que hacer las cosas, le estamos dando una serie de instrucciones para ver como tiene que hacerlo. Con react no es imperactivo si no que nos va a ayudar hacer nuestro codigo declarativo que vamos a describir lo que queremos que haga.

Hay otro problema mas, ¿que pasa si quiero empezar a reutilizar esto? ok tengo 3 botones pero resulta que cuando hago click solo funciona el primero, esto comienza a complicarse,¿porqué no me funciona los otros 2?

```html
<button data-id="123">Me gusta</button>
<button data-id="456">Me gusta</button>
<button data-id="789">Me gusta</button>
```

En el javascript lo tenemos que ajustar."en lugar de recuperar un buton tenemos que recuperar todo los botones". tendriamos que utilizar un "forEach" para cada boton.Como resultado tenemos separados cada uno de ellos.Pero ya empezamos a ver 2 problemas:el primer problema ser capaces de compartir esta logica la hemos tenido que poner en el mismo sitio cuando imaginate que en la misma UI de este boton puede estar en otra parte de nuestra aplicacion muy separada y esto nos complicaria y el segundo problema es que no es escalable. El codigo imperactivo el problema que tiene es que no escala bien.

```js
//recuperamos todos los botones
const buttons = document.querySelectorAll( 'button');

buttons.forEach((button) => {
  // al hacer click en el botón, tenemos que ejecutar una función
  buttons.addEventListener("click", function () {
    // recuperar la id del atributo del HTML
    const id = button.getAttribute("data-id");

    // llamar a un servicio para actualizar si me gusta
    // toggleLike(id)
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
      button.innerText = "Me gusta";
    } else {
      button.classList.add("liked");
      button.innerText = "Quitar me gusta";
    }
  });
});
Creamos un Twitter para Devs

```

[Indice](#curso-de-react-de-midudev)

## 7.Cómo usar React sin dependencias 26:38

la realidad es que react es una biblioteca y como tal podemos utilizarla puramente con JavaScript

```js
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
```

Ahora que tenemos la parte del ReactDOM tendriamos que tener un sitio donde queremos renderizar nuestra aplicación

```html
<div id="app"></div>
```

Con el reactDOM lo que podemos recuperar es este elemento del DOM `<div id="app"></div>`

```js
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");
```

Ahora queremos crear una aplicación de react para que se renderice aqui `<div id="app"></div>`. ¿Porqué explico esto? por 2 cosas: 1. por que podrías utilizar react para inyectarlo en un componentes en cualquier página web Y lo segundo es que vas a poder empezar a aprender aprender react sin instalar absolutamente nada.

Entonces ¿cómo creamos nuestra aplicación de react? lo primero es crear un root `const root=`. al final en react lo que vamos a generar es un arbol de elementos, un arbol que ira creando nuestra UI a nivel de componentes y cada componente va a tener dentro un componente por que en react todo es un componente. Pero cómo tenemos que iniciar pues tenemos que iniciar desde una raiz, como desde la base asi que tenemos que crear un tronco y el tronco lo vamos a crear con ReactDOM `const root = ReactDOM`.

```js
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
```

Ahora que tenemos nuestro root tenemos que decirle que es lo que queremos renderizar dentro, vamos a crear en el root que renderice hola react > `root.render("Hola react")`

```js
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
root.render("hola react");
```

Vamos a copiarno los estilos.

```html
<div id="app"></div>
<style>
  button {
    background: #09f;
    color: #fff;
    border: 0;
    padding: 4px 8px;
    font-size: 18px;
    cursor: pointer;
  }

  body {
    font-family: system-ui;
  }
</style>
```

Bueno vamos hacer el "button" en el `root.render()`.

```js
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
root.render("<button>Me gusta </button>");
```

Lo que intenta en renderizar en realidad es `<button>Me gusta</button>` el texto. Y eso es porque en react tu no puede renderizar texto HTML tienes que crear de alguna forma el elemento para decirle a react lo que quiere renderizar en concreto.Si intentas renderizar HTML asi `<button>Me gusta</button>`, esto no va a funcionar esto lo hace porque asi lo que evita es que alguien intente inyectarte codigo.Asi que si puedes renderizar un texto pero no puede renderizar html.

[Indice](#curso-de-react-de-midudev)

## 8.Crea tu primer elemento 30:00

Para poder renderizar el HTML resultante lo que necesita es crear un elemento. Vamos importa React.Ahora para react vamos a crear un elemento`const button = React.createElement("button", null, "Me gusta");`. El elemento que queremos crear es un button, el 2º parametro sería los atributos o propiedades que debería tener nuestro boton por ahora será null y el 3º lo que quiera escribir.
Ahora que tenemoes este elemento `const button...`
en el `root.render` ya podemos poner el button `root.render(button)`. Ahora si estamos renderizando nuestro primer elemento.

```js
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
const button = React.createElement("button", null, "Me gusta");
root.render(button);
```

[Indice](#curso-de-react-de-midudev)

## 9.Elemento con atributos 31:45

En el ejemplo anterior con javascript creamos un data-id `<button data-id="123">Me gusta</button>`, pero en react donde deberia añadirle el "123" en el "null" que es un objero "{}" que hemos dicho que son los atributos o propiedades que estariamos pasando nuestro elemento pues es aqui donde tendriamos como un objeto decirle "data-id". Que queremos poner un className lo deberiamos poner aqui

```js
const button = React.createElement("button", { "data-id": 123 }, "Me gusta");
```

Antes lo que hemos hecho era mostrar 3 botones.

```js
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement("button", { "data-id": 123 }, "Button 1");
const button2 = React.createElement("button", { "data-id": 456 }, "Button 2");
const button3 = React.createElement("button", { "data-id": 789 }, "Button 3");
root.render(button);
```

Necesitamos renderizar los 3 ¿cómo hacemos esto?`root.render(button, button2, button3);`, esto no funciona. Es importante que entiendas cual es el javascript para crear react, para crear nuestro elementos.
¿qué pasa ahora? No podemos renderizar mas de un elemento a la vez, siempre, siempre tenemos que renderizar un elemento.

Imagina que tienes un metodo en javascript o una función. Pero si a "suma()" le pasa "2,3,5" el 5 no lo sumará automaticamente. Lo mismo puede pasar en el tema de react, lo que siempre va hacer es renderizar un elemento.

```js
const suma = (a, b) => a + b;
suma(2, 3, 5);
```

Ahora ¿omo puedes arreglar esto? lo puedes arreglar envolviendo el elemento, puedes hacer un elemento que envuelva todo los botones.
Lo mas facil en este caso sería tener un div `const div = React.createElement("div", null, ¿que es lo que deberia haber aqui?);`.Si el 3º parametro es lo que envuelve pues lo que vamos a tener aqui deberia ser un array `[button, button2, button3]`y el div es el que vamos a renderizar `root.render(div);`.

```js
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement("button", { "data-id": 123 }, "Button 1");
const button2 = React.createElement("button", { "data-id": 456 }, "Button 2");
const button3 = React.createElement("button", { "data-id": 789 }, "Button 3");

const div = React.crateElement("div", null, [button, button2, button3]);
root.render(div);
```

[Indice](#curso-de-react-de-midudev)

## 10.Fragment 34:30

Alguien nos dira que ¡no quiero un div!. Para que no tengas que renderizar un div, react tiene un componente suyo propio, una forma de envolver cosas con cosa vacias para no renderizar nada y para eso puedes crear un `React.Fragment`.

```js
const div = React.crateElement("React.Fragment", null, [
  button,
  button2,
  button3,
]);
```

[Indice](#curso-de-react-de-midudev)

## 11.JSX desde cero 36:00

JSX es una extensión de la sintaxis de JavaScript que te permite escribir lo que parece HTML directamente dentro de tu código JavaScript en React. Básicamente, te facilita la vida al permitirte describir cómo quieres que se vea la interfaz de usuario usando una sintaxis familiar.

Ejemplo:

En lugar de escribir esto en JavaScript:

```js
React.createElement("div", null, "Hola, mundo!");
```

Puedes escribir esto en JSX:

```jsx
<div>Hola, mundo!</div>
```

[Indice](#curso-de-react-de-midudev)

## 12.Crea tu primera aplicación con React 44:00

creamos una carpeta `aprediendo react` y escribimos en la terminal:

```bash
npm init -y
```

Despues dentro creamos otra carpeta ejecutamos en la terminal:

```bash
mkdir projects
```

Entramos en projects con el siguiente comando

```bash
cd projects
```

y dentro de projects vamos a crear el `npm create vite@latest` y da como resultado

```bash
? Project-name: 00-hola-mundo
select framework : react
select a variant : javascript + swc
```

luegos nos cambiamos a la carpeta `cd 00-hola-mundo`, hacemos `npm install` y luego `npm run dev`.

configuracion de carpeta en react:

```
00-hola-mundo
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
└── src/
|   ├──assets/
|   ├── App.js
|   ├── App.css
|   ├── index.js
|   ├── index.css
|   ├── main.jsx
|   └── components/
|        └── MiComponente.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
```

Este es el punto de entranda.

`main.jsx`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

[Indice](#curso-de-react-de-midudev)

## 13.Crear componentes en React 54:00

Un componente es una función que lo que hace es crear un elemento.
Un componente es una función que devuelve(return) un elemento.
No les tenemos que decir que cree un botón le tenemos que decir que queremos mostrar un botón.
Los nombres de nuestro componente deben ser escrito en PascalCase.

[Indice](#curso-de-react-de-midudev)

## 14.Tu primer proyecto práctico con React 58:20

Carpetas`00_Hola-Mundo`>

```
node_modules
public
src >
    assets
    main.jsx
.gitignore
index.html
package-lock.json
package.json
vite.confi.js
```

Lo primero es crear nuestro componentes y para separar un componente seria crear un componente dentro de la carpeta `src`> `App.jsx`. Ahora en App.jsx tenemos que crear nuestra función.

```jsx
export function App() {
  return `
  <div>
    <h1>Twitter Card</h1>
  </div>
  `;
}
```

Ahora como podemos renderizar este componente. Mandamos a llamar con `import { App } from "./App";` y luego renderezimos con `root.render(<App />); `

`main.jsx`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Vamos a empezar a estilar nuestra "Twitter Card".
`App.jsx`

```jsx
export function App() {
  return (
    <article>
      <header>
        <img src="https://unavatar.io/midudev" alt="El avatar de Midudev" />
        <div>
          <strong>Miguel Angel Duran</strong>
          <span>@midudev</span>
        </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 15.Estilos en React 01:02:50

Vamos a crear un estilo general en `src` > `index.css`

```css
body {
  margin: 0;
  background-color: #222;
  font-family: system-ui;
  display: grid;
  justify-content: center;
  min-height: 100vh;
}
```

Este css lo importamos en `main.jsx` con `import "./index.css`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

Pues a nivel de la `App.jsx`. Podriamos dar estilo en linea `style={{ }}` y esto podría funcionar, una forma de hacerlo pero no es la mas correcta ni la mas comoda pero ya veras que esta forma que estamos estilando aveces puede ser que la tenga que utilizar ya sea por que tienes que poner un estilo en concreto que no puedes poner a nivel de css normal o por ejemplo para react-native. En react-native esta es la forma nativa de añadirle estilo a tus elementos en react.

`App.jsx`

```jsx
export function App() {
  return (
    <article style={{ display: "flex", alignItems: "center", color: "#fff" }}>
      <header>
        <img src="https://unavatar.io/midudev" alt="El avatar de Midudev" />
        <div>
          <strong>Miguel Angel Duran</strong>
          <span>@midudev</span>
        </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
```

¿qué es lo que podemos hacer? lo que podemos hacer es crear un nuevo fichero `src` > `App.css`

`App.css`

```css
article {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
}

article header {
  display: flex;
  align-items: center;
  gap: 4px;
}

article header div {
  display: flex;
  flex-direction: column;
}

article header span {
  opacity: 0.6;
}

article img {
  width: 48px;
  height: 48px;
  border-radius: 1000px;
}

article button {
  margin-left: 16px;
  border: 0;
  border-radius: 999px;
  padding: 6px 16px;
  font-weight: bold;
}
```

tenemos que importa a nivel de componente `import "./App.css";`.

`App.jsx`

```jsx
import "./App.css";

export function App() {
  return `
    <article>
      <header>
        <img src="https://unavatar.io/midudev" alt="El avatar de Midudev" />
        <div>
          <strong>Miguel Angel Duran</strong>
          <span>@midudev</span>
        </div>
      </header>
      <aside>
        <button>
         Seguir
        </button>
      </aside>
    </article>
`;
}
```

### _className_

`App.jsx`

```js
import "./App.css";

export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/midudev"
          alt="El avatar de Midudev"
        />
        <div className="tw-followCard-info">
          <strong>Miguel Angel Duran</strong>
          <span className="tw-followCard-infoUserName">@midudev</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

`App.css`

```css
.tw-followCard {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
}

.tw-followCard-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tw-followCard-info {
  display: flex;
  flex-direction: column;
}

.tw-followCard-infoUserName {
  opacity: 0.6;
}

.tw-followCard-avatar {
  width: 48px;
  height: 48px;
  border-radius: 1000px;
}

.tw-followCard-button {
  margin-left: 16px;
  border: 0;
  border-radius: 999px;
  padding: 6px 16px;
  font-weight: bold;
}
```

Creamos un archivo `src`> `TwitterFollowCard.jsx`, copiamos lo que hay en `App.js` y lo cambiamos a

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/midudev"
          alt="El avatar de Midudev"
        />
        <div className="tw-followCard-info">
          <strong>Miguel Angel Duran</strong>
          <span className="tw-followCard-infoUserName">@midudev</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 16.Reutilización de componentes: Props 01:09:29

Las bases de la reutilizacion es la propiedades.

- dentro de los componente no dejan de ser funciones, puedes crear constante dentro.

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ userName, name, isFollowing }) {

  const imageSrc = ;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/>
    <TwitterFollowCard userName="midudev" name="Miguel Angel Duran"/>
  );
}
```

El `<React.Fragment>`cuando quieras envolver 2 elementos o mas en react para poder devolver-renderizarlo sin necesida de escribir el `<React.Fragment>` lo que puedes hacer es utilizarlo asi `<></>` vacio queda mucho mas facil, mucho mas limpio
`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
    </>
  );
}
```

Si no utilizacemos componentes al arreglar el error de los estilos lo que encontrariamos es que lo tendriamos que arreglar a mano en todos los sitios; `justify-content:space-between`

`App.css`

```css
.tw-followCard {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  justify-content: space-between;
}

.tw-followCard-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tw-followCard-info {
  display: flex;
  flex-direction: column;
}

.tw-followCard-infoUserName {
  opacity: 0.6;
}

.tw-followCard-avatar {
  width: 48px;
  height: 48px;
  border-radius: 1000px;
}

.tw-followCard-button {
  margin-left: 16px;
  border: 0;
  border-radius: 999px;
  padding: 6px 16px;
  font-weight: bold;
}
```

[Indice](#curso-de-react-de-midudev)

## 17.Estila contenedor para separaciones y no componentes 01:14:15

`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
    </section>
  );
}
```

`index.css`

```css
body {
  margin: 0;
  background: #222;
  font-family: system-ui;
  display: grid;
  place-content: center;
  min-height: 100vh;
}

.App {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

## 18.Pasando booleanos como props 01:15:50

`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isfollowing={true}
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        isfollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
}
```

Existe una forma mas corta
`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isfollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        isfollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
}
```

## 19.Pasando funciones como props 01:18:30

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {

  const imageSrc = ;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

Puedes pasar como props tambíen puedes pasar funciones, esto es super importante en react por que siempre vamos a querer pasar funciones o callback para abajo vamos a querer que nuestro hijos los componente que estamos renderizando mas abajo podamos pasarle una función para que pueda ya sea actualizar un estado,cambiar algo.

`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        isfollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        formatUserName={format}
        isfollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 20.Elementos como props 01:21:20

No solo podemos pasar funciones si no que tambien podemos pasar elementos.

Fijate que aqui tenemos un `<span>@{userName}</span>`

`App.jsx`

```js
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;

  const formattedUserName = <span>@{userName}</span>;

  return (
    <section className="App">
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        isfollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        isfollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
}
```

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({
  formattedUserName,
  userName,
  name,
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">
            {formattedUserName}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 21.Diferencia entre elemento y componente 01:23:10

Basicamente un componente podriamos decir que es una factoria de elementos. Un componente sería una función que al ejecutarla de devuelve un elemento; eso es super importante el componente es la factoria de los elementos y el elemento es lo que renderiza react.

Vamos a dejarlo como estaba antes

`app.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
}
```

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 22.Las props son inmutables 01:24:50

Las props deberían ser inmutables.

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ userName, name, isFollowing }) {
  //esto es una mala practica
  //userName=`@${userName}`
  //lo que tienes que hacer en lugar de modificar la prop
  //const userName=`@${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

nunca jamas modifique ni mutes una props ¿por qué? porque como props ves que tambíen las props se le pueden pasar arrays.

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        numbers={[1, 2, 3]}
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        numbers={[1, 2, 3]}
        isFollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
}
```

le podriamos pasar un array y el array la declaramos en la funcion
`TwitterFollowCard.jsx` y alguien puede decir `numbers.push(4)` esto sería mutar una prop, las props deben ser inmutables

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ userName, name, numbers, isFollowing }) {
  numbers.push(4);

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 23.La prop especial children 01:26:50

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="midudev">
        JonMircha
      </TwitterFollowCard>
    </section>
  );
}
```

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ children, userName, isFollowing }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

Una cosa que puedes hacer es utilizar los valores por defecto de los parametros.
`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({
  children,
  userName = "unknow",
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
```

[Indice](#curso-de-react-de-midudev)

## 24.Pasar objeto como props 01:34:00

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const midudev = { isFollowing:true userName="midudev" }
  const jonmircha = { isFollowing:true userName="JonMircha" }

  return (
    <section className="App">
      <TwitterFollowCard {...midudev} >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard {...jonmircha} >
        JonMircha
      </TwitterFollowCard>
    </section>
  );
}
```

Devolvemos todo a su lugar

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="midudev">
        JonMircha
      </TwitterFollowCard>
    </section>
  );
}
```

`App.css`

```css
.tw-followCard {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  justify-content: space-between;
}

.tw-followCard-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tw-followCard-info {
  display: flex;
  flex-direction: column;
}

.tw-followCard-infoUserName {
  opacity: 0.6;
}

.tw-followCard-avatar {
  width: 48px;
  height: 48px;
  border-radius: 1000px;
}

.tw-followCard-button {
  cursor: pointer;
  margin-left: 16px;
  border: 0;
  border-radius: 999px;
  padding: 6px 16px;
  font-weight: bold;
}

.tw-followCard-button:hover {
  background-color: #09f;
  transition: 0.3s ease background-color;
}
```

[Indice](#curso-de-react-de-midudev)

## 25.State en React 01:36:27

¿que es un estado?

### renderizado condicional

`TwitterFollowCard.jsx`

```js
export function TwitterFollowCard({ children, userName, isFollowing }) {
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button ";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}
```

`App.css`

```css
.tw-followCard {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  justify-content: space-between;
}

.tw-followCard-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tw-followCard-info {
  display: flex;
  flex-direction: column;
}

.tw-followCard-infoUserName {
  opacity: 0.6;
}

.tw-followCard-avatar {
  width: 48px;
  height: 48px;
  border-radius: 1000px;
}

.tw-followCard-button {
  cursor: pointer;
  margin-left: 16px;
  border: 0;
  border-radius: 999px;
  padding: 6px 16px;
  font-weight: bold;
  transition: 0.3s ease background-color;
}

.tw-followCard-button.is-following {
  border: 1px solid red;
}

.tw-followCard-button:hover {
  background-color: #09f;
}

.tw-followCard-button.is-following:hover {
  background: red;
}
```

### hocks useState 1:40:34

Entonces cómo creamos un estado? cómo podemos tener esa memoria? cómo podemos hacer que el componente diga: oye! ahora estoy haciendo esto o lo otro. Para eso tenemos que importar una utilidad que llama "useState" de react `import { useState } from "react"` se le llama coloquialmente "hocks". Los Hocks lo que te permite es añadir cierta funcionalidad a los componentes de react o poder ejecutar código arbitrario cuando ocurre ciertas cosas en tus componentes o tener algun tipo de funcionalidad de mejorar tanto el rendimiento de tus componentes; osea los hocks no dejan de ser como unas utilidades que te permite react para dotar todavia de mas funcionalidad tus componentes en diferentes puntos del renderizado. En este caso ¿el useState para que nos va a servir?
`TwitterFollowCard.jsx`

```js
import { useState } from "react";

export function TwitterFollowCard({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button ";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
```

### Virtual DOM 1:48:16

### Cuando entiendas esto estaras por encima de mucha gente que no entiende 2:02:08

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName="jonmircha">JonMircha</TwitterFollowCard>
    </section>
  );
}
```

`TwitterFollowCard.jsx`

```js
import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button ";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
```

### un error muy común 2:04:10

### 2:07:21

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName="jonmircha">JonMircha</TwitterFollowCard>
    </section>
  );
}
```

`App.css`

```css
.tw-followCard {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  justify-content: space-between;
}

.tw-followCard-header {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tw-followCard-info {
  display: flex;
  flex-direction: column;
}

.tw-followCard-infoUserName {
  opacity: 0.6;
}

.tw-followCard-avatar {
  width: 48px;
  height: 48px;
  border-radius: 1000px;
}

.tw-followCard-button {
  cursor: pointer;
  margin-left: 16px;
  border: 0;
  border-radius: 999px;
  padding: 6px 16px;
  font-weight: bold;
  transition: 0.3s ease background-color;
}

.tw-followCard-button:hover {
  opacity: 0.8;
}

.tw-followCard-text {
  display: block;
}

.tw-followCard-button.is-following {
  border: 1px solid #bbb;
  background: transparent;
  color: #fff;
  width: 140px;
}

.tw-followCard-button.is-following:hover {
  background-color: rgba(255, 0, 0, 0.178);
  color: red;
  border: 1px solid red;
  transition: 0.3s ease all;
  opacity: 1;
}

.tw-followCard-button.is-following:hover .tw-follow-card-stopFollow {
  display: block;
}

.tw-follow-card-stopFollow {
  display: none;
}
```

`TwitterFollowCard.jsx`

```js
import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button ";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-follow-card-text">{text}</span>
          <span className="tw-follow-card-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
```

### Renderizado de Lista 2:14:35

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H",
    isFollowing: false,
  },
  {
    userName: "PacoHdez",
    name: "Paco Hernandez",
    isFollowing: true,
  },
  {
    userName: "TMchein",
    name: "Thomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
```

### key 2:18:20

`App.jsx`

```jsx
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H",
    isFollowing: false,
  },
  {
    userName: "PacoHdez",
    name: "Paco Hernandez",
    isFollowing: true,
  },
  {
    userName: "TMchein",
    name: "Thomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={initialIsFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
```

[Indice](#curso-de-react-de-midudev)
