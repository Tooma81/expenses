import './ExpenseForm.css';
import { useState, useRef } from 'react';

const ExpenseForm = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    
    const titleInputRef = useRef()
    const priceInputRef = useRef()
    const dateInputRef = useRef()

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value
        const enteredPrice = priceInputRef.current.value
        const enteredDate = dateInputRef.current.value

        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        titleInputRef.current.value = ''
        priceInputRef.current.value = ''
        dateInputRef.current.value = ''
        setFormOpen(prev => !prev)
    }

    const cancelHandler = () => {
        titleInputRef.current.value = ''
        priceInputRef.current.value = ''
        dateInputRef.current.value = ''
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
                                id="title"
                                ref={titleInputRef}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Price</label>
                            <input 
                                type="number" min="0.01" step="0.01" 
                                id="price"
                                ref={priceInputRef}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input 
                                type="date" min="2023-01-01" max="2026-01-31" 
                                id="date"
                                ref={dateInputRef}
                            />
                        </div>  
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">
                            Add Expense
                        </button>
                        <button type="reset" onClick={cancelHandler}>
                            Cancel
                        </button>
                    </div>
                </>
                )
            }
            {
                !formOpen && (
                    <div>
                        <button onClick={() => setFormOpen(true)}>
                            Add New Expense
                        </button>
                    </div>
                )
            }
        </form>
    ) 
}

export default ExpenseForm