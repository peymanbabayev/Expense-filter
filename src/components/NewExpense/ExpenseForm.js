import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  /*const [userInput, setUserInput] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });*/
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });*/
  }; 
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    /*setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
    setUserInput((prevState) => {
        return { ...prevState, enteredAmount: e.target.value };
      });*/
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    /*setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });*/
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {/* cancel buttonun type-ı button olmasaydı avtomatik form submit edirdi. */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
