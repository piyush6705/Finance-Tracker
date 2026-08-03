import { useState } from "react";
import "./AddBudgetModal.css";
import { useFinance } from "../../../hooks/useFinance";

function AddBudgetModal({
  showModal,
  setShowModal,
}) {
  const { addBudget } = useFinance();

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

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
    if (!category || !amount) {
      alert("Please fill all fields.");
      return;
    }

    const newBudget = {
      id: Date.now(),
      category,
      amount: Number(amount),
    };

    addBudget(newBudget);

    setCategory("");
    setAmount("");
    setShowModal(false);
  };

  const handleCancel = () => {
    setCategory("");
    setAmount("");
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
            <option key={item} value={item}>
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