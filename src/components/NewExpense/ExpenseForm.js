import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        setFormOpen(prev => !prev);
    };

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }

    const clearForm = () => {
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }

    return( 
        <form onSubmit={submitHandler}>
            {  
                formOpen && (
                <>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input 
                                type="text"
                                onChange={titleChangeHandler}
                                value={enteredTitle}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>price</label>
                            <input 
                                type="number" min="0.01" step="0.01" 
                                onChange={priceChangeHandler}
                                value={enteredPrice}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input 
                                type="date" min="2024-11-12" max="2026-01-31" 
                                onChange={dateChangeHandler}
                                value={enteredDate}
                            />
                        </div>  
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit" onClick={toggleForm}>
                            Add Expense
                        </button>
                        <button type="reset" onClick={clearForm}>
                            Cancel
                        </button>
                    </div>
                </>
                )
            }
            {
                !formOpen && (
                    <div>
                        <button type="submit" onClick={toggleForm}>
                            Add New Expense
                        </button>
                    </div>
                )
            }
        </form>
    ) 
}

export default ExpenseForm