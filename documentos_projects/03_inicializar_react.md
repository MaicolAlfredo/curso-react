# Inicializar un proyecto en React

hay muchas empresas que te dicen que no puedes inicializar un template que ya este hecho con react. te dan diferente opciones que instale lo minimo de vite y que tu lo comfigure. Muchas gente lo que dice es que para saber react debes ser capaz de inicializar tu mismo el proyecto.

## Ejemplo práctico: Iniciar un proyecto sin plantillas

```bash
npm create vite@latest

Project name: vanilla-react

Select a  framework:
Vanilla

Select a variant:
JavaScript

# cambiar a la carpeta
cd vanilla-react
```

dice que ya existe un pluging como babel para Webpack, ya existe un pluging de vite que te permite hacerlo por que lo que quiere ellos ver es cómo creas el punto de entrada de la aplicacion, el pluging si te permitiran seguro seguro.

Las empresas quieren ver si entiendes cómo se estructura una aplicación React desde sus bases, incluso si usas herramientas como el plugin de Vite para React (@vitejs/plugin-react). Es decir, saben que el plugin abstrae la complejidad, pero buscan que tú demuestres que comprendes:

1. Dónde inicia la aplicación (el entry point).

2. Cómo se conectan los componentes con el DOM.

3. Qué rol cumple cada archivo de configuración.

```bash
npm install @vitejs/plugin-react -E
```

El flag -E instala la versión exacta (sin ^ en el package.json).

Este plugin le dice a Vite: "Hey, este proyecto usa React, así que aplica transformaciones necesarias (JSX, HMR, etc.)".

## Dependencia que hay que instalar

Lo que hay que instalar son dos dependencia react react-dom

```bash
npm install react react-dom -E
```

## Configurar Vite para usar el plugin

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // ¡Aquí activas el "superpoder" de React!
});
```

Esto reemplaza la necesidad de configurar Babel o Webpack manualmente (el plugin incluye presets para JSX, optimizaciones, etc.).

### Crear el punto de entrada (index.html)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- ¡Aquí se montará React! -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- El `id="root"` es el contenedor donde React renderizará tu app.

- El `<script>` apunta a main.jsx, que es el entry point JavaScript.

### Definir el entry point de React (src/main.jsx)

¿como inicia una aplicacion en react? muy facil como este es el primer archivo `main.js` que va a cargar mi aplicacion lo primero que voy hacer es importar desde el react-dom el 'createRoot' `import { createRoot } from 'react-dom/client' ` luego `creatRoot(document.getElementById("root"))` la guardo en una variable llamada 'root' `const root = createRoot(document.getElementById("root"))` dentro de ese root es donde voy a querer renderizar mi aplicacion asi que hago un `root.render(<h1>Hello, world </h1>`. es sencillo tiene que ser capaz de expresarlo y explicarlo.

```js
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(<h1>Hello, world </h1>);
```

ejecuto en la terminal `npm run dev` y nos arrojaria un error que la sintaxis 'JSX' no esta activada. ¿que pasa? tenemos que entender los archivos que tiene extension '.js' no estan preparado para funcionar con jsx y que hay que cambiar 'main.js' a 'main.jsx' y lo mismo en el index.html cuando importamos el modulo.

Actualizar la referencia en index.html

```html
<!-- Antes (incorrecto) -->
<script type="module" src="/src/main.js"></script>

<!-- Después (correcto) -->
<script type="module" src="/src/main.jsx"></script>
```

Estructura de archivos:

```
mi-proyecto/
├─ index.html
├─ src/
│  ├─ main.jsx    # ← Extensión .jsx
│  └─ App.jsx
└─ vite.config.js
```
