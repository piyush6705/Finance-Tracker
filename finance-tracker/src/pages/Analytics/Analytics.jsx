import "./Analytics.css";

import Layout from "../../components/Layout/Layout";

import SummaryCards from "../../components/Analytics/SummaryCards/SummaryCards";
import TopCategories from "../../components/Analytics/TopCategories/TopCategories";
import AnalyticsStats from "../../components/Analytics/AnalyticsStats/AnalyticsStats";

import IncomeExpenseChart from "../../components/Charts/IncomeExpenseChart/IncomeExpenseChart";
import ExpensePieChart from "../../components/Charts/ExpensePieChart/ExpensePieChart";


import { useFinance } from "../../hooks/useFinance";

function Analytics() {

  const { incomes, expenses, budgets } = useFinance();

  // ================= Totals =================

  const totalIncome = incomes.reduce(
    (sum, income) => sum + income.amount,
    0
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const balance = totalIncome - totalExpense;

  const totalBudget = budgets.reduce(
    (sum, budget) => sum + budget.limit,
    0
  );

  return (
    <Layout>

      <div className="analytics-page">

        <div className="analytics-header">
          <h1>Analytics</h1>
          <p>
            Get insights into your income, expenses,
            and overall financial performance.
          </p>
        </div>

        <SummaryCards
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
          totalBudget={totalBudget}
        />

        <div className="analytics-charts">

          <IncomeExpenseChart
            incomes={incomes}
            expenses={expenses}
          />

          <ExpensePieChart
            expenses={expenses}
          />



        </div>

        <TopCategories
          expenses={expenses}
        />

        <AnalyticsStats
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
          totalBudget={totalBudget}
        />

      </div>

    </Layout>
  );
}

export default Analytics;