import { useState } from "react";
import "./Notifications.css";

function Notifications() {
  const [notifications, setNotifications] = useState({
    budget: true,
    transactions: true,
    monthlySummary: false,
  });

  const handleToggle = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="notifications-settings">

      <div className="settings-section-header">
        <h2>Notifications</h2>
        <p>Choose which notifications you want to receive.</p>
      </div>

      <div className="notification-list">

        <div className="notification-item">
          <div>
            <h3>Budget Alerts</h3>
            <p>
              Get notified when you are close to exceeding a budget.
            </p>
          </div>

          <button
            className={`toggle ${
              notifications.budget ? "active" : ""
            }`}
            onClick={() => handleToggle("budget")}
          >
            <span></span>
          </button>
        </div>

        <div className="notification-item">
          <div>
            <h3>Transaction Notifications</h3>
            <p>
              Receive notifications when income or expenses are added.
            </p>
          </div>

          <button
            className={`toggle ${
              notifications.transactions ? "active" : ""
            }`}
            onClick={() => handleToggle("transactions")}
          >
            <span></span>
          </button>
        </div>

        <div className="notification-item">
          <div>
            <h3>Monthly Summary</h3>
            <p>
              Receive a summary of your monthly financial activity.
            </p>
          </div>

          <button
            className={`toggle ${
              notifications.monthlySummary ? "active" : ""
            }`}
            onClick={() => handleToggle("monthlySummary")}
          >
            <span></span>
          </button>
        </div>

      </div>

    </div>
  );
}

export default Notifications;