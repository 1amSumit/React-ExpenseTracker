import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Name</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input type="number" min="0.01" ste="0.01" name="price" id="price" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2022-01-01"
            max="2030-12-31"
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
