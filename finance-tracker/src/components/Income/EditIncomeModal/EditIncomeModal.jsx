import { useState, useEffect } from "react";
import "./EditIncomeModal.css";

function EditIncomeModal({
  showEditModal,
  setShowEditModal,
  editingIncome,
  setIncomes,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingIncome) {
      setTitle(editingIncome.title);
      setAmount(editingIncome.amount);
      setCategory(editingIncome.category);
      setDate(editingIncome.date);
    }
  }, [editingIncome]);

  if (!showEditModal) return null;

  const categories = [
    "Salary",
    "Freelancing",
    "Business",
    "Investment",
    "Bonus",
    "Gift",
    "Rental Income",
    "Other",
  ];

  const handleUpdate = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields.");
      return;
    }

    setIncomes((prev) =>
      prev.map((income) =>
        income.id === editingIncome.id
          ? {
              ...income,
              title,
              amount: Number(amount),
              category,
              date,
            }
          : income
      )
    );

    setShowEditModal(false);
  };

  const handleCancel = () => {
    setShowEditModal(false);
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Income</h2>

        <input
          type="text"
          placeholder="Income Title"
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
            onClick={handleCancel}
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

export default EditIncomeModal;