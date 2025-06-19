import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: '',
    })

    console.log(userInput)
    
    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

        const priceChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredPrice: event.target.value
        })
    }

        const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>price</label>
                    <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-11-12" max="2026-01-31" onChange={dateChangeHandler}/>
                </div>  
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    ) 
}

export default ExpenseForm