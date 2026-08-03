import { useState } from "react";
import "./Budgets.css";

import Layout from "../../components/Layout/Layout";
import { useFinance } from "../../hooks/useFinance";

import SearchBudget from "../../components/Budget/SearchBudget/SearchBudget";
import BudgetList from "../../components/Budget/BudgetList/BudgetList";
import BudgetSummary from "../../components/Budget/BudgetSummary/BudgetSummary";
import AddBudgetModal from "../../components/Budget/AddBudgetModal/AddBudgetModal";
import EditBudgetModal from "../../components/Budget/EditBudgetModal/EditBudgetModal";

function Budget() {
  const { budgets } = useFinance();

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editingBudget, setEditingBudget] = useState(null);

  return (
    <Layout>
      <div className="budget-header">
        <h1>Budgets</h1>
      </div>

      <SearchBudget
        search={search}
        setSearch={setSearch}
      />

      <BudgetSummary budgets={budgets} />

      <BudgetList
        budgets={budgets}
        search={search}
        setEditingBudget={setEditingBudget}
        setShowEditModal={setShowEditModal}
      />

      <AddBudgetModal
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <EditBudgetModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        editingBudget={editingBudget}
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