import "./DashboardSummary.css";

import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaPiggyBank,
} from "react-icons/fa";

function DashboardSummary({
  totalIncome,
  totalExpense,
  balance,
  savings,
}) {
  const cards = [
    {
      title: "Income",
      amount: totalIncome,
      icon: <FaArrowUp />,
      color: "green",
    },
    {
      title: "Expenses",
      amount: totalExpense,
      icon: <FaArrowDown />,
      color: "red",
    },
    {
      title: "Balance",
      amount: balance,
      icon: <FaWallet />,
      color: "blue",
    },
    {
      title: "Savings",
      amount: savings,
      icon: <FaPiggyBank />,
      color: "orange",
    },
  ];

  return (
    <div className="dashboard-summary">
      {cards.map((card) => (
        <div
          key={card.title}
          className="dashboard-card"
        >
          <div className={`dashboard-icon ${card.color}`}>
            {card.icon}
          </div>

          <div className="dashboard-info">
            <h3>{card.title}</h3>

            <h2>
              ₹
              {card.amount.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardSummary;