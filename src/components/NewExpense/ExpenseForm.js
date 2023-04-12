import './ExpenseForm.css';
import React , {useState} from 'react';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {                               // event is automatically passed by the react 
        event.preventDefault();                                      // to prevent default behavior of onsubmit  
        
        const ExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
        props.newExpenseData(ExpenseData);
        
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <lable>Title</lable>
                    <input type = 'text'
                    value = {enteredTitle}
                    onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <lable>Amount</lable>
                    <input type = 'number' 
                    min ="0.01" 
                    step = "0.01" 
                    value = {enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <lable>Date</lable>
                    <input type = 'date' 
                    min ="2020-01-01" 
                    step = "2023-12-31" 
                    value = {enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type = "Submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;