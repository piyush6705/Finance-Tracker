import { useState, useEffect } from "react";
import "./EditExpenseModal.css";
import { useFinance } from "../../../hooks/useFinance";

function EditExpenseModal({
  showEditModal,
  setShowEditModal,
  editingExpense,
}) {

  const { editExpense } = useFinance();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  if (!showEditModal) return null;

  const categories = [
    "Food",
    "Shopping",
    "Transport",
    "Bills",
    "Entertainment",
    "Healthcare",
    "Travel",
    "Education",
    "Other",
  ];

  const handleUpdate = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields.");
      return;
    }

    const updatedExpense = {
      ...editingExpense,
      title,
      amount: Number(amount),
      category,
      date,
    };

    editExpense(updatedExpense);

    setShowEditModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Edit Expense</h2>

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>

          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={() => setShowEditModal(false)}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleUpdate}
          >
            Update
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditExpenseModal;