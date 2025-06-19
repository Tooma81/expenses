import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2025')

    const filterChangeHandler = (year) => {
        setFilterYear(year)
        console.log(`Year date in Expenses.js ${year}`)
    }

    let filteredExpenses = props.expenses.filter(expense => 
        expense.date.getFullYear().toString() === filterYear
    )

    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filterYear} 
            onChangeFilter={filterChangeHandler} />
            {
                filteredExpenses.length === 0 && 
                <p className='not-found-message'>
                    No Expenses Found!
                </p>
            }
            {
                filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} data={expense}/>
                ))
            }
        </Card>
    )
}

export default Expenses;