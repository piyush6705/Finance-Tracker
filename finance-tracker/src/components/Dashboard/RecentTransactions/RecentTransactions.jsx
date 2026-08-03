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
    <div className="transactions-card">

<h2>Recent Transactions</h2>

{transactions.map((transaction)=>(

<div className="transaction" key={transaction.id}>

<div className="transaction-left">

<h3>{transaction.title}</h3>

<div className="transaction-details">

<p className={transaction.type==="Income" ? "income" : "expense"}>
{transaction.type}
</p>

<p>{transaction.date}</p>

</div>

</div>

<div
className={`transaction-right ${
transaction.type==="Income"
? "income-amount"
: "expense-amount"
}`}
>

{transaction.type==="Income" ? "+" : "-"}

₹{transaction.amount.toLocaleString("en-IN")}

</div>

</div>

))}

</div>
  );
}

export default RecentTransactions;