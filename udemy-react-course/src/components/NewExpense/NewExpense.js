import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelForm = () => {
    setIsEditing(false);
  };  
  
  return (
    <div className='new-expense'>
      {isEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancelForm={cancelForm}/>}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    </div>
  );
}

export default NewExpense;