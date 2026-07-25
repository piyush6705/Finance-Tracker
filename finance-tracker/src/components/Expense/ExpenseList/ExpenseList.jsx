import ExpenseCard from "../ExpenseCard/ExpenseCard";
import "./ExpenseList.css";

function ExpenseList({
  expenses,
  search,
  setExpenses,
  setEditingExpense,
  setShowEditModal,
}) {

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) return;

    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="expense-list">

      {filteredExpenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
          onEdit={() => {
            setEditingExpense(expense);
            setShowEditModal(true);
          }}
          onDelete={() => handleDelete(expense.id)}
        />
      ))}

    </div>
  );
}

export default ExpenseList;