import "./AnalyticsStats.css";

function AnalyticsStats({
  totalIncome,
  totalExpense,
  balance,
  totalBudget,
}) {

  const savingsRate =
    totalIncome > 0
      ? ((balance / totalIncome) * 100).toFixed(1)
      : 0;

  const budgetUsage =
    totalBudget > 0
      ? ((totalExpense / totalBudget) * 100).toFixed(1)
      : 0;

  return (

    <div className="analytics-stats">

      <div className="stat-card">
        <h3>Total Income</h3>
        <h2>
          ₹{totalIncome.toLocaleString("en-IN")}
        </h2>
      </div>

      <div className="stat-card">
        <h3>Total Expense</h3>
        <h2>
          ₹{totalExpense.toLocaleString("en-IN")}
        </h2>
      </div>

      <div className="stat-card">
        <h3>Current Balance</h3>
        <h2>
          ₹{balance.toLocaleString("en-IN")}
        </h2>
      </div>

      <div className="stat-card">
        <h3>Savings Rate</h3>
        <h2>{savingsRate}%</h2>
      </div>

      <div className="stat-card">
        <h3>Budget Usage</h3>
        <h2>{budgetUsage}%</h2>
      </div>

    </div>

  );
}

export default AnalyticsStats;