import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transactions) => transactions.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <h4>{expense}</h4>
      </div>
    </>
  );
}

export default IncomeExpenses;
