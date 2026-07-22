import "./AddIncomeModal.css";
import { useState } from "react";

function AddIncomeModal({ showModal, setShowModal }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Income</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="amount"
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
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button className="save-btn">
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddIncomeModal;