import { useState, useEffect } from "react";

const Reloj = ({ hora }) => {
  return <h3>{hora}</h3>;
};

export default function RelojHookFuncion() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);

      return () => {
        clearInterval(temporizador);
      };
    }
  }, [visible]);

  return (
    <>
      <h3>Reloj con Hooks</h3>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
}
