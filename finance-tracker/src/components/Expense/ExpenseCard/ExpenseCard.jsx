import "./ExpenseCard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function ExpenseCard({
  title,
  amount,
  category,
  date,
  onEdit,
  onDelete,
}) {
  return (
    <div className="expense-card">

      <div className="expense-card-header">

        <div>
          <h3>{title}</h3>

          <p className="expense-category">
            {category}
          </p>

          <p className="expense-date">
            {date}
          </p>
        </div>

        <h2 className="expense-amount">
          -₹{amount.toLocaleString("en-IN")}
        </h2>

      </div>

      <div className="expense-actions">

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

export default ExpenseCard;