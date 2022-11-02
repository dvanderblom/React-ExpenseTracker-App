import React from 'react';
import './ExpenseError.css';

function ExpenseError() {
  return (
    <div>
      <h1 className='error-message'>No expenses found.</h1>
    </div>
  );
}

export default ExpenseError;
