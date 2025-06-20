import React from "react";
import { useState } from "react";

/* export default function FormularioFuncion() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabot] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("EL formulario se ha enviado");
  };

  return (
    <>
      <h3>Formulario</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          htmlFor="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu Sabor JS Faborito:</p>
        <input
          type="radio"
          id="Vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabot(e.target.value)}
          defaultChecked
        />
        <label htmlFor="react">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabot(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabot(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabot(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <button>Enviar</button>
        <p>Elige tu lenguaje de programacion favorito</p>
        <select
          defaultValue=""
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="py">Python</option>
          <option value="rb">Ruby</option>
          <option value="go">Go</option>
          <option value="rs">Rust</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
} */

export default function FormularioFuncion() {
  const [form, setForm] = useState({
    nombre: "",
    sabor: "",
    lenguaje: "",
    terminos: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }

  const { nombre, sabor, lenguaje, terminos } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("EL formulario se ha enviado");
  };

  return (
    <>
      <h3>Formulario</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          htmlFor="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Faborito:</p>
        <input
          type="radio"
          id="Vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="react">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <button>Enviar</button>
        <p>Elige tu lenguaje de programacion favorito</p>
        <select defaultValue="" name="lenguaje" onChange={handleChange}>
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="py">Python</option>
          <option value="rb">Ruby</option>
          <option value="go">Go</option>
          <option value="rs">Rust</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
