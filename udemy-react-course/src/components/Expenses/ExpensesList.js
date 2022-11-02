import ExpenseItem from './ExpenseItem';
import ExpenseError from './ExpenseError';
import './ExpensesList.css';

function ExpensesList(props) {

  let expensesContent = <ExpenseError />;

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  if(props.items.length > 0) {
    expensesContent = props.items.map(expenseItem => (             // Filter by year.
      <ExpenseItem 
        key={expenseItem.id} 
        title={capFirstLetter(expenseItem.title)} 
        amount={expenseItem.amount} 
        date={expenseItem.date}
      />
    ))
  }

  return (
    <>
      {expensesContent}
    </>
  )
}

export default ExpensesList;
