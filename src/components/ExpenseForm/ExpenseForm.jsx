import React, { useState, useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [isClicked, setIsClicked] = useState("");

  const titleInputref = useRef();
  const amountInputref = useRef();
  const dateInputref = useRef();

  const cancelClickedHandler = () => {
    setIsClicked(false);
    props.getClickedEvent(isClicked);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInputref.current.value;
    const amount = amountInputref.current.value;
    const date = dateInputref.current.value;

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.getFormDatas(expenseData);
    titleInputref.current.value = "";
    amountInputref.current.value = "";
    dateInputref.current.value = "";
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Name</label>
          <input type="text" name="title" id="title" ref={titleInputref} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="price"
            id="price"
            ref={amountInputref}
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
            ref={dateInputref}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelClickedHandler}>cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
