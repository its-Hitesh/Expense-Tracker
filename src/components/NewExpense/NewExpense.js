import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense =(props) => {

    const newExpenseData = (expenses) =>{
        const Expense = {
            id : Math.random().toString(),
            ...expenses
        }
        props.newdata(Expense);
    }
    return (
        <div className="new-expense">
            <ExpenseForm newExpenseData = {newExpenseData}/>
        </div>
    );
}

export default NewExpense;