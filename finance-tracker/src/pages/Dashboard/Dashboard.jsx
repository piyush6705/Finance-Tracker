import { useContext } from "react";

import Layout from "../../components/Layout/Layout";
import TopSpending from "../../components/Dashboard/TopSpending/TopSpending";
import DashboardSummary from "../../components/Dashboard/DashboardSummary/DashboardSummary";
import RecentTransactions from "../../components/Dashboard/RecentTransactions/RecentTransactions";
import SavingsGoal from "../../components/Dashboard/SavingsGoal/SavingsGoal";
import BudgetProgress from "../../components/Dashboard/BudgetProgress/BudgetProgress";
import MonthlyExpenseChart from "../../components/Charts/MonthlyExpenseChart/MonthlyExpenseChart";
import ExpensePieChart from "../../components/Charts/ExpensePieChart/ExpensePieChart";
import IncomeExpenseChart from "../../components/Charts/IncomeExpenseChart/IncomeExpenseChart";
import FinancialInsights from "../../components/Dashboard/FinancialInsights/FinancialInsights";
import { FinanceContext } from "../../context/FinanceContext";

import "./Dashboard.css";

function Dashboard() {

  const {
    incomes,
    expenses,
    budgets,
  } = useContext(FinanceContext);

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

  const savings = balance;

  // Supports both old (amount) and new (limit) budget format
  const totalBudget = budgets.reduce(
    (sum, budget) =>
      sum + (budget.limit ?? budget.limit ?? 0),
    0
  );

  return (
    <Layout>

      <div className="dashboard">

        <DashboardSummary
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
          savings={savings}
        />

        <div className="dashboard-grid">

          <RecentTransactions
            incomes={incomes}
            expenses={expenses}
          />

          <ExpensePieChart
            expenses={expenses}
          />

        </div>

        <IncomeExpenseChart
          incomes={incomes}
          expenses={expenses}
        />
        <MonthlyExpenseChart
            expenses={expenses}
        />
        <TopSpending
            expenses={expenses}
        />
        <FinancialInsights
            incomes={incomes}
            expenses={expenses}
        />
        <SavingsGoal
          savings={savings}
        />

        <BudgetProgress
          budgets={budgets}
          expenses={expenses}
        />

      </div>

    </Layout>
  );
}

export default Dashboard;