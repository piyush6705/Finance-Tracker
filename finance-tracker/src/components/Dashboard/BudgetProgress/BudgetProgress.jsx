import "./BudgetProgress.css";

function BudgetProgress({
  budgets = [],
  expenses = [],
}) {

  return (
    <div className="budget-progress">

      <div className="budget-progress-header">
        <h2>Budget Progress</h2>
        <p>Track spending against each budget</p>
      </div>

      {budgets.length === 0 ? (

        <p className="no-budget">
          No budgets added yet.
        </p>

      ) : (

        budgets.map((budget) => {

          const spent = expenses
            .filter(
              (expense) =>
                expense.category === budget.category
            )
            .reduce(
              (sum, expense) =>
                sum + expense.amount,
              0
            );

          const limit = budget.limit ?? budget.amount ?? 0;

          const progress =
            limit > 0
              ? (spent / limit) * 100
              : 0;

          return (

            <div
              className="budget-item"
              key={budget.id}
            >

              <div className="budget-top">

                <h4>{budget.category}</h4>

                <span>
                  ₹{spent.toLocaleString("en-IN")} /
                  ₹{(budget.limit ?? budget.amount ?? 0).toLocaleString("en-IN")}
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className={`progress-fill
                    ${
                      progress >= 100
                        ? "danger"
                        : progress >= 75
                        ? "warning"
                        : "success"
                    }`}
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                  }}
                ></div>

              </div>

            </div>

          );

        })

      )}

    </div>
  );
}

export default BudgetProgress;