import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2024')

    const filterChange = (year) => {
        setFilterYear(year)
        console.log(`Year date in Expenses.js ${year}`)
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filterYear} onChangeFilter={filterChange} />
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses;