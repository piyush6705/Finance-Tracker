import "./BudgetCard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function BudgetCard({
  category,
  amount,
  onEdit,
  onDelete,
}) {
  return (
    <div className="budget-card">

      <div className="budget-card-header">

        <div>
          <h3>{category}</h3>
          <p className="budget-category">
            Monthly Budget
          </p>
        </div>

        <h2 className="budget-amount">
          ₹{amount.toLocaleString("en-IN")}
        </h2>

      </div>

      <div className="budget-actions">

        <button
          className="edit-btn"
          onClick={onEdit}
        >
          <FaEdit />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={onDelete}
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default BudgetCard;