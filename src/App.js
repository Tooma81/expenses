import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react'

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'id1',
      date: new Date(2023, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      id: 'id2',
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99
    },
    {
      id: 'id3',
      date: new Date(2024, 0, 12),
      title: 'New bag',
      price: 139.99
    },
  ])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }
   
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
