import "./BudgetSummary.css";

function BudgetSummary({ budgets }) {

  const totalBudget = budgets.reduce(
    (total, budget) => total + budget.amount,
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
        <h3>💰 Total Budget</h3>
        <h2>₹{totalBudget.toLocaleString("en-IN")}</h2>
      </div>

      <div className="summary-card">
        <h3>📂 Categories</h3>
        <h2>{totalCategories}</h2>
      </div>

      <div className="summary-card">
        <h3>📊 Average Budget</h3>
        <h2>
          ₹{averageBudget.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}
        </h2>
      </div>

    </div>
  );
}

export default BudgetSummary;