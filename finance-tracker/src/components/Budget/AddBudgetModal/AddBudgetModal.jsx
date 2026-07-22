import { useState } from "react";
import "./AddBudgetModal.css";

const categories = [
  "Food",
  "Shopping",
  "Travel",
  "Entertainment",
  "Bills",
  "Healthcare",
  "Education",
  "Fuel",
  "Rent",
  "Other",
];

function AddBudgetModal({
  showModal,
  setShowModal,
  budgets,
  setBudgets,
}) {
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  if (!showModal) return null;

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

    setBudgets([...budgets, newBudget]);

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
            onClick={() => {
              setShowModal(false);
              setCategory("");
              setLimit("");
            }}
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