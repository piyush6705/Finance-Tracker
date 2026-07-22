import Layout from "../../components/Layout/Layout";
import SearchIncome from "../../components/Income/SearchIncome/SearchIncome";
import IncomeList from "../../components/Income/IncomeList/IncomeList";
import AddIncomeModal from "../../components/Income/AddIncomeModal/AddIncomeModal";

import "./Income.css";

function Income() {
  return (
    <Layout>
      <SearchIncome />

      <IncomeList />

      <AddIncomeModal />
    </Layout>
  );
}

export default Income;