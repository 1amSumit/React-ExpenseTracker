import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const getFormData = (expenseData) => {
    const expenses = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.getExpenseData(expenses);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getFormDatas={getFormData} />
    </div>
  );
};

export default NewExpense;
