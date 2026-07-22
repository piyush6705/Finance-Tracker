import { useState } from "react";

import "./Expenses.css";

import SearchExpense from "../../components/Expense/SearchExpense/SearchExpense";
import ExpenseList from "../../components/Expense/ExpenseList/ExpenseList";
import AddExpenseModal from "../../components/Expense/AddExpenseModal/AddExpenseModal";

function Expenses() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="expenses-page">

      <div className="expenses-header">

        <h1>Expenses</h1>

        <div className="header-actions">

          <SearchExpense
            search={search}
            setSearch={setSearch}
          />

          <button
            className="add-expense-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Expense
          </button>

        </div>
      </div>

      <div className="expense-list-section">
        <ExpenseList search={search} />
      </div>

      {showModal && (
        <AddExpenseModal
          onClose={() => setShowModal(false)}
        />
      )}

    </div>
  );
}

export default Expenses;