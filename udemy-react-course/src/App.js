import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useEffect, useState } from 'react';
import Chart from './components/Chart/Chart'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses(prevExpenses => {
      return [enteredExpenseData, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
