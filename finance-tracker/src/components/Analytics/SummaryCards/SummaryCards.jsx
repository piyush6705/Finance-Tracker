import "./SummaryCards.css";

import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaPiggyBank,
} from "react-icons/fa";

function SummaryCards({
  totalIncome,
  totalExpense,
  balance,
  totalBudget,
}) {
  return (
    <div className="summary-cards">

      <div className="summary-card income">

        <div className="summary-icon">
          <FaArrowUp />
        </div>

        <div>
          <h3>Total Income</h3>
          <h2>
            ₹{totalIncome.toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

      <div className="summary-card expense">

        <div className="summary-icon">
          <FaArrowDown />
        </div>

        <div>
          <h3>Total Expense</h3>
          <h2>
            ₹{totalExpense.toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

      <div className="summary-card balance">

        <div className="summary-icon">
          <FaWallet />
        </div>

        <div>
          <h3>Balance</h3>
          <h2>
            ₹{balance.toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

      <div className="summary-card budget">

        <div className="summary-icon">
          <FaPiggyBank />
        </div>

        <div>
          <h3>Total Budget</h3>
          <h2>
            ₹{totalBudget.toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

    </div>
  );
}

export default SummaryCards;