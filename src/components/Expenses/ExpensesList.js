import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


const ExpensesList = props =>{
    if(props.items.length === 0){
       return <h2 className='expense-list__fallback'>Found No Expense.</h2>
    }

    return(<ul className='expense-list'>
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>)
};

export default ExpensesList;