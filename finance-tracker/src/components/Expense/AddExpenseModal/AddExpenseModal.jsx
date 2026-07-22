import { useState } from "react";
import "./AddExpenseModal.css";

const categories = [
  "Food",
  "Rent",
  "Shopping",
  "Travel",
  "Entertainment",
  "Bills",
  "Healthcare",
  "Education",
  "Fuel",
  "Other",
];

function AddExpenseModal({
  showModal,
  setShowModal,
  expenses,
  setExpenses,
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

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");

    setShowModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Expense</h2>

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

export default AddExpenseModal;