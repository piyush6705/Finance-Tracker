import BudgetCard from "../BudgetCard/BudgetCard";
import "./BudgetList.css";

const budgets = [
  {
    id: 1,
    category: "Food",
    spent: 15000,
    limit: 20000,
  },
  {
    id: 2,
    category: "Shopping",
    spent: 8000,
    limit: 15000,
  },
  {
    id: 3,
    category: "Travel",
    spent: 9000,
    limit: 10000,
  },
];

function BudgetList({ search }) {

  const filteredBudgets = budgets.filter((budget) =>
    budget.category
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="budget-list">

      {filteredBudgets.map((budget) => (
        <BudgetCard
          key={budget.id}
          category={budget.category}
          spent={budget.spent}
          limit={budget.limit}
          onEdit={() => alert(`Edit ${budget.category}`)}
          onDelete={() => alert(`Delete ${budget.category}`)}
        />
      ))}

    </div>
  );
}

export default BudgetList;