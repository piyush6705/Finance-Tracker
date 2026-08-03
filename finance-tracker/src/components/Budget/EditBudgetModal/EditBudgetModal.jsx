import { useState, useEffect } from "react";
import "./EditBudgetModal.css";
import { useFinance } from "../../../hooks/useFinance";

function EditBudgetModal({
  showEditModal,
  setShowEditModal,
  editingBudget,
}) {

  const { editBudget } = useFinance();

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editingBudget) {
      setCategory(editingBudget.category);
      setAmount(editingBudget.amount);
    }
  }, [editingBudget]);

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
    if (!category || !amount) {
      alert("Please fill all fields.");
      return;
    }

    const updatedBudget = {
      ...editingBudget,
      category,
      amount: Number(amount),
    };

    editBudget(updatedBudget);

    setShowEditModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Edit Budget</h2>

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
          type="number"
          placeholder="Budget Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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

export default EditBudgetModal;