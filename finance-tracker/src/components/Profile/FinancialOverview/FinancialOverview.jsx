import "./FinancialOverview.css";
import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaPiggyBank,
} from "react-icons/fa";

function FinancialOverview({
  totalIncome = 0,
  totalExpense = 0,
  balance = 0,
  totalBudget = 0,
}) {
  const formatCurrency = (value) => {
    return `₹${Number(value || 0).toLocaleString("en-IN")}`;
  };

  return (
    <div className="financial-overview">

      <div className="section-header">
        <h2>Financial Overview</h2>
        <p>Your overall financial summary</p>
      </div>

      <div className="financial-grid">

        {/* Income */}
        <div className="financial-card income-card">

          <div className="financial-icon">
            <FaArrowUp />
          </div>

          <div>
            <span>Total Income</span>
            <h3>{formatCurrency(totalIncome)}</h3>
          </div>

        </div>

        {/* Expense */}
        <div className="financial-card expense-card">

          <div className="financial-icon">
            <FaArrowDown />
          </div>

          <div>
            <span>Total Expense</span>
            <h3>{formatCurrency(totalExpense)}</h3>
          </div>

        </div>

        {/* Balance */}
        <div className="financial-card balance-card">

          <div className="financial-icon">
            <FaWallet />
          </div>

          <div>
            <span>Current Balance</span>
            <h3>{formatCurrency(balance)}</h3>
          </div>

        </div>

        {/* Budget */}
        <div className="financial-card budget-card">

          <div className="financial-icon">
            <FaPiggyBank />
          </div>

          <div>
            <span>Total Budget</span>
            <h3>{formatCurrency(totalBudget)}</h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default FinancialOverview;