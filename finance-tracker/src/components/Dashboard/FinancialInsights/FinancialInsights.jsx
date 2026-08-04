import "./FinancialInsights.css";

function FinancialInsights({
  incomes = [],
  expenses = [],
}) {

  const highestIncome =
    incomes.length > 0
      ? incomes.reduce((a, b) =>
          a.amount > b.amount ? a : b
        )
      : null;

  const highestExpense =
    expenses.length > 0
      ? expenses.reduce((a, b) =>
          a.amount > b.amount ? a : b
        )
      : null;

  const totalTransactions =
    incomes.length + expenses.length;

  const averageIncome =
    incomes.length > 0
      ? incomes.reduce(
          (sum, item) => sum + item.amount,
          0
        ) / incomes.length
      : 0;

  const averageExpense =
    expenses.length > 0
      ? expenses.reduce(
          (sum, item) => sum + item.amount,
          0
        ) / expenses.length
      : 0;

  return (
    <div className="financial-insights">

      <div className="insight-header">
        <h2>Financial Insights</h2>
        <p>Your spending summary</p>
      </div>

      <div className="insight-grid">

        <div className="insight-card">
          <h4>Highest Income</h4>

          <span>
            {highestIncome
              ? highestIncome.title
              : "--"}
          </span>

          <strong>
            ₹
            {highestIncome
              ? highestIncome.amount.toLocaleString("en-IN")
              : 0}
          </strong>
        </div>

        <div className="insight-card">
          <h4>Highest Expense</h4>

          <span>
            {highestExpense
              ? highestExpense.title
              : "--"}
          </span>

          <strong>
            ₹
            {highestExpense
              ? highestExpense.amount.toLocaleString("en-IN")
              : 0}
          </strong>
        </div>

        <div className="insight-card">
          <h4>Total Transactions</h4>

          <strong>{totalTransactions}</strong>
        </div>

        <div className="insight-card">
          <h4>Average Income</h4>

          <strong>
            ₹{averageIncome.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="insight-card">
          <h4>Average Expense</h4>

          <strong>
            ₹{averageExpense.toLocaleString("en-IN")}
          </strong>
        </div>

      </div>

    </div>
  );
}

export default FinancialInsights;