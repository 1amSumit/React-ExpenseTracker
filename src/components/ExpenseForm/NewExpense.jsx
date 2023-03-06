import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState();
  const getFormData = (expenseData) => {
    const expenses = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.getExpenseData(expenses);
  };

  const isClickedHandler = (value) => {
    !value ? setIsClicked(value) : setIsClicked(true);
  };
  return (
    <div className="new-expense">
      {isClicked ? (
        <ExpenseForm
          getFormDatas={getFormData}
          getClickedEvent={isClickedHandler}
        />
      ) : (
        ""
      )}

      {!isClicked ? (
        <button onClick={isClickedHandler}>Add Expense</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewExpense;
