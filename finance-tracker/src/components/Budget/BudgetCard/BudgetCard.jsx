import "./BudgetCard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function BudgetCard({
  category,
  limit,
  spent = 0,
  onEdit,
  onDelete,
}) {

  const progress =
    limit > 0 ? (spent / limit) * 100 : 0;

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
          ₹{limit.toLocaleString("en-IN")}
        </h2>

      </div>

      <p className="budget-spent">
        Spent ₹{spent.toLocaleString("en-IN")}
      </p>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${Math.min(progress, 100)}%`,
          }}
        ></div>

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