import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = (props) => {

    console.log(props)
    console.log(props.expenses)

    return(
        <Card className='expenses'>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses;