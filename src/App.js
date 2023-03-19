import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

const localData = localStorage.getItem("expenses");
const data = JSON.parse(localData);

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(data);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  const addExpenses = (expenseData) => {
    setExpenses((previousExpenses) => {
      return [expenseData, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense getExpenseData={addExpenses} />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
