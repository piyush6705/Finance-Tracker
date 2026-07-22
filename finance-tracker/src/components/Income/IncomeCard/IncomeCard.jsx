import "./IncomeCard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function IncomeCard({
  title,
  amount,
  category,
  date,
  onEdit,
  onDelete,
}) {
  return (
    <div className="income-card">
      <div className="income-card-header">
        <div>
          <h3>{title}</h3>
          <p className="income-category">{category}</p>
          <p className="income-date">{date}</p>
        </div>

        <h2 className="income-amount">
          ₹{amount.toLocaleString("en-IN")}
        </h2>
      </div>

      <div className="income-actions">
        <button className="edit-btn" onClick={onEdit}>
          <FaEdit /> Edit
        </button>

        <button className="delete-btn" onClick={onDelete}>
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default IncomeCard;