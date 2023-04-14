import './NewExpenseItem.css';
import { useState } from 'react';
import Card from './Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
function NewExpenseItem(props){

  const [filteredYear, setYear] = useState('2023');

  const selectDataHandler = (year) =>{
    setYear(year);
  }   

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
    <Card className = 'expenses' >
        <ExpenseFilter selected = {filteredYear} onSelectValue={selectDataHandler} />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} />
       
    </Card>
        
    );
}

export default NewExpenseItem;