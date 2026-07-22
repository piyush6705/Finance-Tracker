import "./BudgetSummary.css";

function BudgetSummary({ budgets }) {
  const totalBudget = budgets.reduce(
    (sum, budget) => sum + budget.limit,
    0
  );

  const totalSpent = budgets.reduce(
    (sum, budget) => sum + budget.spent,
    0
  );

  const remaining = totalBudget - totalSpent;

  return (
    <div className="budget-summary">

      <div className="summary-box">
        <h4>Total Budget</h4>
        <h2>₹{totalBudget.toLocaleString("en-IN")}</h2>
      </div>

      <div className="summary-box">
        <h4>Total Spent</h4>
        <h2>₹{totalSpent.toLocaleString("en-IN")}</h2>
      </div>

      <div className="summary-box">
        <h4>Remaining</h4>
        <h2>₹{remaining.toLocaleString("en-IN")}</h2>
      </div>

    </div>
  );
}

export default BudgetSummary;