import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value); 
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCancel = () => {
    props.onCancelForm();
  }

  const handleSubmit = (event) => {     
    event.preventDefault();
    
    const formData = {
      title: title,
      amount: amount,
      date: new Date(date)
    };

    // props.onSaveExpenseData(formData);
    if(title != '' && amount != '' && date != '') {
      props.onSaveExpenseData(formData);
      props.onCancelForm();
    } else {
      alert('Please fill out the entire form before pressing add expense.');
    }

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={title} onChange={handleTitleChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={amount} onChange={handleAmountChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min='2010-01-01' max='2022-12-31' value={date} onChange={handleDateChange}/>
        </div>
      </div>
        
      <div className='new-expense__actions'>       
        <button type='button' onClick={handleCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  ); 
}

export default ExpenseForm;