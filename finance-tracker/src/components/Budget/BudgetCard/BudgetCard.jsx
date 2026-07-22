import "./BudgetCard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function BudgetCard({
  category,
  spent,
  limit,
  onEdit,
  onDelete,
}) {
  const progress = (spent / limit) * 100;
  const remaining = limit - spent;

  return (
    <div className="budget-card">

      <div className="budget-header">

        <h3>{category}</h3>

        <span className="budget-percent">
          {progress.toFixed(0)}%
        </span>

      </div>

      <p className="budget-amount">
        ₹{spent.toLocaleString("en-IN")} / ₹{limit.toLocaleString("en-IN")}
      </p>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${Math.min(progress, 100)}%`,
          }}
        ></div>

      </div>

      <p className="remaining">
        Remaining: ₹{remaining.toLocaleString("en-IN")}
      </p>

      <div className="budget-actions">

        <button
          className="edit-btn"
          onClick={onEdit}
        >
          <FaEdit /> Edit
        </button>

        <button
          className="delete-btn"
          onClick={onDelete}
        >
          <FaTrash /> Delete
        </button>

      </div>

    </div>
  );
}

export default BudgetCard;