import { useState } from "react";

import Layout from "../../components/Layout/Layout";
import SearchBudget from "../../components/Budget/SearchBudget/SearchBudget";
import BudgetCard from "../../components/Budget/BudgetCard/BudgetCard";
import "./Budgets.css";
import BudgetList from "../../components/Budget/BudgetList/BudgetList";

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

      <BudgetList search={search} />
    </Layout>
  );
}

export default Budget;