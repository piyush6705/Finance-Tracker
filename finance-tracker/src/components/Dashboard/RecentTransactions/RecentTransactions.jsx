import "./RecentTransactions.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function RecentTransactions({
  incomes = [],
  expenses = [],
}) {

  const transactions = [

    ...incomes.map((income) => ({
      ...income,
      type: "income",
    })),

    ...expenses.map((expense) => ({
      ...expense,
      type: "expense",
    })),

  ];

  const recentTransactions = transactions
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="recent-transactions">

      <div className="recent-header">
        <h2>Recent Transactions</h2>
      </div>

      {
        recentTransactions.length === 0 ? (

          <p className="empty-transactions">
            No transactions yet.
          </p>

        ) : (

          recentTransactions.map((item) => (

            <div
              key={item.id}
              className="transaction-item"
            >

              <div className="transaction-left">

                <div
                  className={`transaction-icon ${
                    item.type === "income"
                      ? "income-icon"
                      : "expense-icon"
                  }`}
                >

                  {
                    item.type === "income"
                      ? <FaArrowUp />
                      : <FaArrowDown />
                  }

                </div>

                <div>

                  <h4>{item.title}</h4>

                  <p>{item.category}</p>

                </div>

              </div>

              <div className="transaction-right">

                <span
                  className={
                    item.type === "income"
                      ? "income-text"
                      : "expense-text"
                  }
                >
                  {item.type === "income" ? "+" : "-"}₹
                  {item.amount.toLocaleString("en-IN")}
                </span>

              </div>

            </div>

          ))

        )
      }

    </div>
  );
}

export default RecentTransactions;