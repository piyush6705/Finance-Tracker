import "./AnalyticsStats.css";

function AnalyticsStats() {
  return (
    <div className="stats-card">

      <h2>Analytics Overview</h2>

      <div className="stats-grid">

        <div>
          <h4>Highest Expense</h4>
          <p>₹20,000 (Rent)</p>
        </div>

        <div>
          <h4>Highest Income</h4>
          <p>₹50,000 (Salary)</p>
        </div>

        <div>
          <h4>Average Monthly Income</h4>
          <p>₹42,500</p>
        </div>

        <div>
          <h4>Average Monthly Expense</h4>
          <p>₹28,700</p>
        </div>

      </div>

    </div>
  );
}

export default AnalyticsStats;