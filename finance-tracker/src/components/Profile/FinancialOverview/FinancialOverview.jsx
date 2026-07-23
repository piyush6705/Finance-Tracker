import "./FinancialOverview.css";

function FinancialOverview() {

  const finance = {
    income: 64500,
    expense: 38000,
    savings: 26500,
    budget: 45000,
  };

  return (
    <div className="financial-card">

      <h2>Financial Overview</h2>

      <div className="financial-grid">

        <div className="financial-box">
          <span>Total Income</span>
          <h3>₹{finance.income.toLocaleString("en-IN")}</h3>
        </div>

        <div className="financial-box">
          <span>Total Expense</span>
          <h3>₹{finance.expense.toLocaleString("en-IN")}</h3>
        </div>

        <div className="financial-box">
          <span>Total Savings</span>
          <h3>₹{finance.savings.toLocaleString("en-IN")}</h3>
        </div>

        <div className="financial-box">
          <span>Total Budget</span>
          <h3>₹{finance.budget.toLocaleString("en-IN")}</h3>
        </div>

      </div>

    </div>
  );
}

export default FinancialOverview;