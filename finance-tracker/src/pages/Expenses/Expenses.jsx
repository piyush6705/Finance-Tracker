import Layout from "../../components/Layout/Layout";
import SearchExpense from "../../components/Expense/SearchExpense/SearchExpense";

import { useState } from "react";

function Expenses() {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <h1>Expenses</h1>
      <SearchExpense
          search={search}
          setSearch={setSearch}
        />
    </Layout>
  );
}

export default Expenses;