import { useState, useEffect } from "react";
import { useFinance } from "../../hooks/useFinance";
import Layout from "../../components/Layout/Layout";
import SearchIncome from "../../components/Income/SearchIncome/SearchIncome";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import AddIncomeModal from "../../components/Income/AddIncomeModal/AddIncomeModel";
import "./Income.css";
import EditIncomeModal from "../../components/Income/EditIncomeModal/EditIncomeModal";

function Income() {
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editingIncome, setEditingIncome] = useState(null);

  const { incomes, setIncomes } = useFinance();

  return (
    <Layout>
      <div className="income-header">
        <h1>Income</h1>
      </div>

      <SearchIncome
        search={search}
        setSearch={setSearch}
      />

      <IncomeList
        incomes={incomes}
        search={search}
        setEditingIncome={setEditingIncome}
        setShowEditModal={setShowEditModal}
      />

      <AddIncomeModal
          showModal={showModal}
          setShowModal={setShowModal}
        />

      <EditIncomeModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        editingIncome={editingIncome}
        
      />

      <button
        className="add-income-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Income
      </button>
    </Layout>
  );
}

export default Income;
