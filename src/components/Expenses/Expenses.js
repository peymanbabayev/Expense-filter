import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYears] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYears(selectedYear);
  };

  const filteredExpenses = props.data.filter((info) => {
    return info.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* filteredExpenses əvəzinə props.data.filter düşün. Yəni öncə filter edib sonra ona uyğun nəticə alırıq. */}
      {/* {filteredExpenses.length === 0 && <p>Not found item</p>} */}
      <ExpensesList dateInfo={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
