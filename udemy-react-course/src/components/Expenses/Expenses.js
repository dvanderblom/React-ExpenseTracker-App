import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredItems = props.items.filter(expense => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  const filterChangeHandler = (selectedYear) => { // Handle selected year from select block in ExpensesFilter.js
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className='expenses'>
        
        <ExpenseFilter filteredYear={filteredYear} onChangeDropdown={filterChangeHandler}/>
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList items={filteredItems}/>
        
      </Card>
    </>
  );
}

export default Expenses;