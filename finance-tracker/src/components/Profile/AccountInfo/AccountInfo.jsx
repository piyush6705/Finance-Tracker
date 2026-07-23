import "./AccountInfo.css";

function AccountInfo() {
  const account = {
    memberSince: "July 2026",
    accountType: "Free",
    currency: "Indian Rupee (₹)",
    language: "English",
    timezone: "Asia/Kolkata",
    status: "Active",
  };

  return (
    <div className="account-info-card">

      <h2>Account Information</h2>

      <div className="account-grid">

        <div className="account-item">
          <span>Member Since</span>
          <p>{account.memberSince}</p>
        </div>

        <div className="account-item">
          <span>Account Type</span>
          <p>{account.accountType}</p>
        </div>

        <div className="account-item">
          <span>Currency</span>
          <p>{account.currency}</p>
        </div>

        <div className="account-item">
          <span>Language</span>
          <p>{account.language}</p>
        </div>

        <div className="account-item">
          <span>Time Zone</span>
          <p>{account.timezone}</p>
        </div>

        <div className="account-item">
          <span>Status</span>
          <p className="status-active">{account.status}</p>
        </div>

      </div>

    </div>
  );
}

export default AccountInfo;