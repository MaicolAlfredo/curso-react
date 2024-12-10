import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransationForm from "./components/transactions/TransactionForm";
import TransationList from "./components/transactions/transactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransationForm />
      <TransationList />
      <h1>Hello</h1>
    </GlobalProvider>
  );
}

export default App;
