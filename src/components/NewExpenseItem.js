import './NewExpenseItem.css';
import Expensence from "./Expensence";
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

function NewExpenseItem(props){

    const selectDataHandler = (year) =>{
      const selectedYear = year;
      props.onFilter(selectedYear);
    } 
    let display = <p>Nothing to show.</p>;
    console.log(props.item.length > 0);
    if(props.item.length > 0){
      display = props.item.map((expense) => (
         <Expensence 
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          />
      ));
    }
    return(
    <Card className = 'expenses' >
        <ExpenseFilter onSelectValue={selectDataHandler} />
        
        {display}
       
    </Card>
        
    );
}

export default NewExpenseItem;