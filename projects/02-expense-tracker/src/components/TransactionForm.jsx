import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export function TransationForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: 1,
      description,
      amount,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Ingresa una descripción"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ingresa un monto"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Añadir Transacción</button>
      </form>
    </div>
  );
}

export default TransationForm;
