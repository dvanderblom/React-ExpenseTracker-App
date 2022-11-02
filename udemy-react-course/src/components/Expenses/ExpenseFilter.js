import './ExpenseFilter.css';

function ExpenseFilter(props) {
  
  const options = [
    {value: 2022, text: 2022},
    {value: 2021, text: 2021},
    {value: 2020, text: 2020},
    {value: 2019, text: 2019},
  ];

  const dropdownOnChangeHandler = event => {
    props.onChangeDropdown(event.target.value);
  };

  return (
    <> 
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.filteredYear} onChange={dropdownOnChangeHandler}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>     
    </>
  );
}

export default ExpenseFilter;