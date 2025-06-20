import { useState, useEffect } from "react";

export default function ScrollHooksFuncion() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // console.log("Moviendo el Scroll");

    const detectarScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      //console.log("Fase de Desmontaje");
    };
  }, [scrollY]);

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
      <h3>Hooks - useEffect y el ciclo de Vida</h3>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
