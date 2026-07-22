import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchBudget from "../../components/Budget/SearchBudget/SearchBudget";

import "./Budgets.css";

function Budget() {
  const [search, setSearch] = useState("");

  return (
    <Layout>
      <div className="budget-header">
        <h1>Budgets</h1>
      </div>

      <SearchBudget
        search={search}
        setSearch={setSearch}
      />
    </Layout>
  );
}

export default Budget;