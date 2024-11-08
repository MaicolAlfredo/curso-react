export function TransationForm() {
  return (
    <div>
      <form>
        <input placeholder="Ingresa una descripción" />
        <input type="number" placeholder="Ingresa un monto" step="0.01" />
        <button>Añadir Transacción</button>
      </form>
    </div>
  );
}

export default TransationForm;
