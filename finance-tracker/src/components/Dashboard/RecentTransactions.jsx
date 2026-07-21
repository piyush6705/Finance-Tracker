import "./RecentTransactions.css";

function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: 50000,
      type: "Income",
      date: "22 Jul 2026",
    },
    {
      id: 2,
      title: "Rent",
      amount: 15000,
      type: "Expense",
      date: "21 Jul 2026",
    },
    {
      id: 3,
      title: "Netflix",
      amount: 499,
      type: "Expense",
      date: "20 Jul 2026",
    },
  ];

  return (
    <div className="transactions-container">
      <h2>Recent Transactions</h2>

      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-card">
          <div className="top-row">
            <h3>{transaction.title}</h3>

            <p
              className={
                transaction.type === "Income" ? "income"
                : "expense"
              }
              >
              {transaction.type === "Income" ? "+" : "-"}₹
              {transaction.amount.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="button-row">
            <span
              className={
                transaction.type === "Income"
                ? "income-badge"
                : "expense-badge"
              }
            >
              {transaction.type}
            </span>

            <span>{transaction.date}</span>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;