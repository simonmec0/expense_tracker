import React, { useState } from "react";
import NewExpense from "./componenets/NewExpense/NewExpense";
import Expenses from "./componenets/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 1, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'book',
    amount: 80,
    date: new Date(2019, 5, 22),
  },
  {
    id: 'e6',
    title: 'Pen',
    amount: 265,
    date: new Date(2019, 7, 22),
  },
  {
    id: 'e7',
    title: 'Paper',
    amount: 400,
    date: new Date(2019, 4, 12),
  },
  {
    id: 'e8',
    title: 'Cheese',
    amount: 67,
    date: new Date(2020, 4, 12),
  },
  {
    id: 'e9',
    title: 'Lamp',
    amount: 17,
    date: new Date(2020, 0, 12),
  },
];

const App = () => {

  // updating state
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
