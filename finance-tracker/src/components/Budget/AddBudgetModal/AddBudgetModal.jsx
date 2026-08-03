import { useState } from "react";
import "./AddBudgetModal.css";
import { useFinance } from "../../../hooks/useFinance";

function AddBudgetModal({
  showModal,
  setShowModal,
}) {
  const { addBudget } = useFinance();

  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  if (!showModal) return null;

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

  const handleSave = () => {
    if (!category || !limit) {
      alert("Please fill all fields.");
      return;
    }

    const newBudget = {
      id: Date.now(),
      category,
      spent: 0,
      limit: Number(limit),
    };

    addBudget(newBudget);

    setCategory("");
    setLimit("");
    setShowModal(false);
  };

  const handleCancel = () => {
    setCategory("");
    setLimit("");
    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Budget</h2>

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
          placeholder="Budget Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
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
            onClick={handleSave}
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddBudgetModal;