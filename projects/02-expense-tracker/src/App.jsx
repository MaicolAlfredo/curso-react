import Balance from "./components/Balance";
import Header from "./components/Header";
import TransationForm from "./components/TransactionForm";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransationForm />
      <h1>Hello</h1>
    </GlobalProvider>
  );
}

export default App;
