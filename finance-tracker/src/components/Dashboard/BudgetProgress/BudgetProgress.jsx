import "./BudgetProgress.css";

const budgets = [
  {
    id: 1,
    category: "Food",
    spent: 15000,
    limit: 20000,
  },
  {
    id: 2,
    category: "Shopping",
    spent: 10000,
    limit: 20000,
  },
  {
    id: 3,
    category: "Travel",
    spent: 9000,
    limit: 10000,
  },
];

function BudgetProgress() {
  return (
    <div className="budget-card">
      <h2>Monthly Budgets</h2>

      {budgets.map((budget) => {
        const progress = (budget.spent / budget.limit) * 100;

        return (
          <div key={budget.id} className="budget-item">
            <div className="budget-header">
              <h3>{budget.category}</h3>

              <span className="budget-percent">
                {progress.toFixed(0)}%
              </span>
            </div>

            <p className="budget-amount">
              ₹{budget.spent.toLocaleString("en-IN")} / ₹
              {budget.limit.toLocaleString("en-IN")}
            </p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                   backgroundColor:
                    progress <= 70
                      ? "#22c55e"
                      : progress <= 90
                      ? "#f59e0b"
                      : "#ef4444",
                }}
              ></div>
            </div>

            <p className="budget-status">
              {progress.toFixed(0)}% Used
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default BudgetProgress;