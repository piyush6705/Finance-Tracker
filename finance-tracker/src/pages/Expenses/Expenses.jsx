import { useState } from "react";

import "./Expenses.css";

import Layout from "../../components/Layout/Layout";
import SearchExpense from "../../components/Expense/SearchExpense/SearchExpense";
import ExpenseList from "../../components/Expense/ExpenseList/ExpenseList";
import AddExpenseModal from "../../components/Expense/AddExpenseModal/AddExpenseModal";

function Expenses() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: 2500,
      category: "Food",
      date: "22 Jul 2026",
    },
    {
      id: 2,
      title: "House Rent",
      amount: 15000,
      category: "Rent",
      date: "20 Jul 2026",
    },
    {
      id: 3,
      title: "Movie",
      amount: 800,
      category: "Entertainment",
      date: "18 Jul 2026",
    },
  ]);

  return (
    <Layout>
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
          <ExpenseList
            expenses={expenses}
            search={search}
          />
        </div>

        <AddExpenseModal
          showModal={showModal}
          setShowModal={setShowModal}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </div>
    </Layout>
  );
}

export default Expenses;