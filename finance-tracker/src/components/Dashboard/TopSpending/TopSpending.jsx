import "./TopSpending.css";

function TopSpending({ expenses = [] }) {

  // Group expenses by category
  const grouped = {};

  expenses.forEach((expense) => {

    if (!grouped[expense.category]) {
      grouped[expense.category] = 0;
    }

    grouped[expense.category] += expense.amount;

  });

  // Convert object into array
  const categories = Object.entries(grouped)
    .map(([category, amount]) => ({
      category,
      amount,
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  const highest =
    categories.length > 0
      ? categories[0].amount
      : 1;

  return (
    <div className="top-spending">

      <div className="top-header">
        <h2>Top Spending Categories</h2>
        <p>Your highest expenses</p>
      </div>

      {
        categories.length === 0 ? (

          <p className="empty-text">
            No expenses available.
          </p>

        ) : (

          categories.map((item) => (

            <div
              className="category-item"
              key={item.category}
            >

              <div className="category-top">

                <span>{item.category}</span>

                <span>
                  ₹{item.amount.toLocaleString("en-IN")}
                </span>

              </div>

              <div className="category-bar">

                <div
                  className="category-fill"
                  style={{
                    width: `${(item.amount / highest) * 100}%`,
                  }}
                ></div>

              </div>

            </div>

          ))

        )
      }

    </div>
  );
}

export default TopSpending;