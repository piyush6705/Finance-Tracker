import ExpenseCard from "../ExpenseCard/ExpenseCard";
import "./ExpenseList.css";

const expenses = [
  {
    id: 1,
    title: "Groceries",
    amount: 2500,
    category: "Food",
    date: "22 Jul 2026",
  },
  {
    id: 2,
    title: "House Rent",
    amount: 15000,
    category: "Rent",
    date: "20 Jul 2026",
  },
  {
    id: 3,
    title: "Movie",
    amount: 800,
    category: "Entertainment",
    date: "18 Jul 2026",
  },
];

function ExpenseList({ expenses, search }) {

  const filteredExpense = expenses.filter((expense)=>
    expense.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="expense-list">

      {filteredExpense.map((expense)=>(
        <ExpenseCard
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
          onEdit={() => alert(`Edit ${expense.title}`)}
          onDelete={() => alert(`Delete ${expense.title}`)}
        />
      ))}

    </div>
  );
}

export default ExpenseList;