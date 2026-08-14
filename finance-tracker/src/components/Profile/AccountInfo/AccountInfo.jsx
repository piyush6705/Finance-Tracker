import "./AccountInfo.css";
import {
  FaCalendarAlt,
  FaExchangeAlt,
  FaUserCircle,
} from "react-icons/fa";

function AccountInfo({
  joinedDate = "Not available",
  totalTransactions = 0,
  accountType = "Personal",
}) {
  return (
    <div className="account-info">

      <div className="section-header">
        <h2>Account Information</h2>
        <p>Details about your Finance Tracker account</p>
      </div>

      <div className="account-info-grid">

        <div className="account-item">
          <div className="account-icon">
            <FaCalendarAlt />
          </div>

          <div>
            <span>Joined Date</span>
            <strong>{joinedDate}</strong>
          </div>
        </div>

        <div className="account-item">
          <div className="account-icon">
            <FaExchangeAlt />
          </div>

          <div>
            <span>Total Transactions</span>
            <strong>{totalTransactions}</strong>
          </div>
        </div>

        <div className="account-item">
          <div className="account-icon">
            <FaUserCircle />
          </div>

          <div>
            <span>Account Type</span>
            <strong>{accountType}</strong>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AccountInfo;