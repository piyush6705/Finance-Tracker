import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchIncome from "../../components/Income/SearchIncome/SearchIncome";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import AddIncomeModal from "../../components/Income/AddIncomeModal/AddIncomeModal";

import "./Income.css";

function Income() {
  const [search, setSearch] = useState("");

  return (
    <Layout>
      <h1>Income</h1>

      <SearchIncome
        search={search}
        setSearch={setSearch}
      />

      <IncomeList
        search={search}
      />

      <AddIncomeModal />
    </Layout>
  );
}

export default Income;