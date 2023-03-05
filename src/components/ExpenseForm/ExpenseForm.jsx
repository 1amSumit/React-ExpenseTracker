import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(2023);

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.getFormDatas(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(2023);
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Name</label>
          <input
            onChange={titleChangehandler}
            type="text"
            name="title"
            id="title"
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            onChange={amountChangehandler}
            type="number"
            min="0.01"
            step="0.01"
            name="price"
            id="price"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2022-01-01"
            max="2030-12-31"
            onChange={dateChangehandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
