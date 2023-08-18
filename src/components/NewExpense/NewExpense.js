import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseHandler = (prevData) => {
    const expenseData = {
      ...prevData,
      id: Math.random(),
    };
    props.finalStore(expenseData);
    setForm(false);
    // console.log(expenseData);
  };

  const formCancel = () => {
    setForm(false);
  };
  return (
    <div className="new-expense">
      {!form && (
        <button onClick={() => setForm(true)}>Add a new Expense</button>
      )}
      {form && (
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={formCancel} />
      )}
    </div>
  );
};

export default NewExpense;
