import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchIncome from "../../components/Income/SearchIncome/SearchIncome";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import AddIncomeModal from "../../components/Income/AddIncomeModal/AddIncomeModel";
import "./Income.css";

function Income() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [incomes, setIncomes] = useState([
    {
      id: 1,
      title: "Salary",
      amount: 50000,
      category: "Job",
      date: "22 Jul 2026",
    },
    {
      id: 2,
      title: "Freelancing",
      amount: 12000,
      category: "Business",
      date: "20 Jul 2026",
    },
    {
      id: 3,
      title: "Interest",
      amount: 2500,
      category: "Investment",
      date: "18 Jul 2026",
    },
  ]);

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
      />

      <AddIncomeModal
        showModal={showModal}
        setShowModal={setShowModal}
        incomes={incomes}
        setIncomes={setIncomes}
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