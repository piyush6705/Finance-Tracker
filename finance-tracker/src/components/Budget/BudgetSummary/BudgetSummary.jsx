import "./BudgetSummary.css";

import {
  FaWallet,
  FaFolderOpen,
  FaChartPie,
} from "react-icons/fa";

function BudgetSummary({ budgets }) {

  const totalBudget = budgets.reduce(
    (total, budget) => total + (budget.limit || 0),
    0
  );

  const totalCategories = budgets.length;

  const averageBudget =
    totalCategories > 0
      ? totalBudget / totalCategories
      : 0;

  return (

    <div className="budget-summary">

      <div className="summary-card">

        <div className="summary-icon green">
          <FaWallet />
        </div>

        <div className="summary-info">
          <h3>Total Budget</h3>

          <h2>
            ₹{totalBudget.toLocaleString("en-IN")}
          </h2>

        </div>

      </div>

      <div className="summary-card">

        <div className="summary-icon blue">
          <FaFolderOpen />
        </div>

        <div className="summary-info">
          <h3>Categories</h3>

          <h2>{totalCategories}</h2>

        </div>

      </div>

      <div className="summary-card">

        <div className="summary-icon orange">
          <FaChartPie />
        </div>

        <div className="summary-info">
          <h3>Average Budget</h3>

          <h2>
            ₹
            {averageBudget.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              }
            )}
          </h2>

        </div>

      </div>

    </div>

  );
}

export default BudgetSummary;