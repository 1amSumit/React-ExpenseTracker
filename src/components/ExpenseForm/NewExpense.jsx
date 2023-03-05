import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const getFormData = (title, amount, date) => {
    props.getExpenseData(title, amount, date);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getFormDatas={getFormData} />
    </div>
  );
};

export default NewExpense;
