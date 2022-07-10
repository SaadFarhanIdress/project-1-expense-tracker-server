import { Header } from "./components/Header";
import './App.css';
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionHistory } from "./components/TransactionHistory";
import { TransactionForm } from "./components/TransactionForm";
import { GlobalProvider } from "./context/GlobalState";



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
