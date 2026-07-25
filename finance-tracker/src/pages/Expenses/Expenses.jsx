import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchExpense from "../../components/Expense/SearchExpense/SearchExpense";
import ExpenseList from "../../components/Expense/ExpenseList/ExpenseList";
import AddExpenseModal from "../../components/Expense/AddExpenseModal/AddExpenseModal";
import EditExpenseModal from "../../components/Expense/EditExpenseModal/EditExpenseModal";

import { useFinance } from "../../hooks/useFinance";

import "./Expenses.css";

function Expenses() {
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editingExpense, setEditingExpense] = useState(null);

  const { expenses, setExpenses } = useFinance();

  return (
    <Layout>
      <div className="expenses-header">
        <h1>Expenses</h1>
      </div>

      <SearchExpense
        search={search}
        setSearch={setSearch}
      />

      <ExpenseList
        expenses={expenses}
        search={search}
        setEditingExpense={setEditingExpense}
        setShowEditModal={setShowEditModal}
      />

      <AddExpenseModal
        showModal={showModal}
        setShowModal={setShowModal}
        
      />

      <EditExpenseModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        editingExpense={editingExpense}
        
      />

      <button
        className="add-expense-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Expense
      </button>
    </Layout>
  );
}

export default Expenses;