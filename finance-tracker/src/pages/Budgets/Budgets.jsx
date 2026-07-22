import { useState } from "react";

import "./Budgets.css";

import Layout from "../../components/Layout/Layout";

import SearchBudget from "../../components/Budget/SearchBudget/SearchBudget";
import BudgetList from "../../components/Budget/BudgetList/BudgetList";
import AddBudgetModal from "../../components/Budget/AddBudgetModal/AddBudgetModal";

function Budget() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [budgets, setBudgets] = useState([
    {
      id: 1,
      category: "Food",
      spent: 15000,
      limit: 20000,
    },
    {
      id: 2,
      category: "Shopping",
      spent: 8000,
      limit: 15000,
    },
    {
      id: 3,
      category: "Travel",
      spent: 9000,
      limit: 10000,
    },
  ]);

  return (
    <Layout>
      <div className="budget-header">
        <h1>Budgets</h1>
      </div>

      <SearchBudget
        search={search}
        setSearch={setSearch}
      />

      <BudgetList
        budgets={budgets}
        search={search}
      />

      <AddBudgetModal
        showModal={showModal}
        setShowModal={setShowModal}
        budgets={budgets}
        setBudgets={setBudgets}
      />

      <button
        className="add-budget-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Budget
      </button>
    </Layout>
  );
}

export default Budget;