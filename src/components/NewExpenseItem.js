import './NewExpenseItem.css';
import Expensence from "./Expensence";
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

function NewExpenseItem(props){

    const selectDataHandler = (year) =>{
      const selectedYear = year;
      props.onFilter(selectedYear);
    } 
    return(
    <Card className = 'expenses' >
        <ExpenseFilter onSelectValue={selectDataHandler} />
        {props.item.map((expense) => (
          <Expensence 
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          />
        ))}
       
    </Card>
        
    );
}

export default NewExpenseItem;