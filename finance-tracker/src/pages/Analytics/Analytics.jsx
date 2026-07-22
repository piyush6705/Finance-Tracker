import "./Analytics.css";

import Layout from "../../components/Layout/Layout";

import SummaryCards from "../../components/Analytics/SummaryCards/SummaryCards";
import TopCategories from "../../components/Analytics/TopCategories/TopCategories";
import AnalyticsStats from "../../components/Analytics/AnalyticsStats/AnalyticsStats";

import IncomeExpenseChart from "../../components/Charts/IncomeExpenseChart/IncomeExpenseChart";
import ExpensePieChart from "../../components/Charts/ExpensePieChart/ExpensePieChart";
import MonthlyExpenseChart from "../../components/Charts/MonthlyExpenseChart/MonthlyExpenseChart";

function Analytics() {
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

        <SummaryCards />

        <div className="analytics-charts">

          <IncomeExpenseChart />

          <ExpensePieChart />

          <MonthlyExpenseChart />

        </div>

        <TopCategories />

        <AnalyticsStats />

      </div>

    </Layout>
  );
}

export default Analytics;