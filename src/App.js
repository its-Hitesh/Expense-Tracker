import React, {useState} from 'react';
import NewExpenseItem from './components/NewExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

var Dummy_Node = [
  { id : 'e0' , title:'Car Modification', amount:5000, date: new Date(2023, 2, 20)},
  { id : 'e1' , title:'Car Modification', amount:5000, date: new Date(2022, 2, 20)},
  { id : 'e2' , title:'Car Modification', amount:5000, date: new Date(2021, 2, 20)},
  { id : 'e3' , title:'Car Modification', amount:5000, date: new Date(2020, 2, 20)},
]

function App() {

  const [expenses, addNewExpense] = useState(Dummy_Node);
  
  const newDatahandel = (Data) =>{                                     // adding new data at the begining of the list 
    addNewExpense((prevExpense) => {
    return [Data, ...prevExpense];
  });
  }
  

  return (
    <div>
      <NewExpense newdata = {newDatahandel}></NewExpense>               {/*getting data for insertion*/}
      <NewExpenseItem   
        item = {expenses}                                                  // displaying items
      />
    </div>
  );
}

export default App;
