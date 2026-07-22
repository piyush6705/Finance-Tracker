import { useState } from "react";
import "./AddIncomeModal.css";

function AddIncomeModal({
  showModal,
  setShowModal,
  incomes,
  setIncomes,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  if (!showModal) return null;

  const handleSave = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields.");
      return;
    }

    const newIncome = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    setIncomes([...incomes, newIncome]);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");

    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Income</h2>

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

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="modal-buttons">
          <button
            className="cancel-btn"
            onClick={() => {
              setShowModal(false);

              setTitle("");
              setAmount("");
              setCategory("");
              setDate("");
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

export default AddIncomeModal;