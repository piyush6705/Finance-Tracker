import "./SummaryCards.css";

function SummaryCards() {
  const cards = [
    {
      title: "Total Income",
      value: "₹64,500",
    },
    {
      title: "Total Expense",
      value: "₹38,000",
    },
    {
      title: "Savings",
      value: "₹26,500",
    },
    {
      title: "Transactions",
      value: "28",
    },
  ];

  return (
    <div className="summary-grid">

      {cards.map((card) => (
        <div
          className="summary-card"
          key={card.title}
        >
          <h4>{card.title}</h4>
          <h2>{card.value}</h2>
        </div>
      ))}

    </div>
  );
}

export default SummaryCards;