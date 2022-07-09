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
      <p className="credit">Made with <img className="image" width="20" height="20" alt="Heart" src="https://cdn.iconscout.com/icon/free/png-256/heart-1767836-1502416.png" /> by <a href="www.github.com/SaadFarhanIdress">Saad Farhan</a>
        <br />
        Don't forget to star my repository :) <br />Link: <a href="https://github.com/SaadFarhanIdress/project-1-expense-tracker">https://github.com/SaadFarhanIdress/project-1-expense-tracker</a></p>
    </GlobalProvider>
  );
}

export default App;
