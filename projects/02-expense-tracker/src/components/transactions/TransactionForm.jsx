import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransationForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripción "
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Ingrese el monto"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button>Añadir Transacción</button>
      </form>
    </div>
  );
}

export default TransationForm;
