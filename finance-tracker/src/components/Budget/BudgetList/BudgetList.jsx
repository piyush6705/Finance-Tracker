import BudgetCard from "../BudgetCard/BudgetCard";
import "./BudgetList.css";
import { useFinance } from "../../../hooks/useFinance";

function BudgetList({
  budgets,
  search,
  setEditingBudget,
  setShowEditModal,
}) {

  const { deleteBudget } = useFinance();

  const filteredBudgets = budgets.filter((budget) =>
    budget.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this budget?"
    );

    if (!confirmDelete) return;

    deleteBudget(id);
  };

  return (
    <div className="budget-list">

      {filteredBudgets.map((budget) => (

        <BudgetCard
          key={budget.id}
          category={budget.category}
          amount={budget.amount}

          onEdit={() => {
            setEditingBudget(budget);
            setShowEditModal(true);
          }}

          onDelete={() => handleDelete(budget.id)}
        />

      ))}

    </div>
  );
}

export default BudgetList;