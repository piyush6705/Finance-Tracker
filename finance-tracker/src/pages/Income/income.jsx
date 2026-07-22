import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchIncome from "../../components/Income/SearchIncome/SearchIncome";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import AddIncomeModal from "../../components/Income/AddIncomeModal/AddIncomeModel";
import "./Income.css";

function Income() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      

      <SearchIncome
        search={search}
        setSearch={setSearch}
      />

      <IncomeList
        search={search}
      />

      <button
        className="add-income-btn"
        onClick={() => setShowModal(true)}
      >
        + Add Income
      </button>

      <AddIncomeModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Layout>
  );
}

export default Income;