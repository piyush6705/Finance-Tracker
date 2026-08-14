import { useState } from "react";
import "./Preferences.css";

function Preferences() {
  const [currency, setCurrency] = useState("INR");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");

  return (
    <div className="preferences-settings">

      <div className="settings-section-header">
        <h2>Preferences</h2>
        <p>Customize your finance tracker preferences.</p>
      </div>

      <div className="preferences-form">

        <div className="preference-item">
          <div>
            <h3>Currency</h3>
            <p>Select the currency used throughout the app.</p>
          </div>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="INR">Indian Rupee (₹)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="EUR">Euro (€)</option>
            <option value="GBP">British Pound (£)</option>
          </select>
        </div>

        <div className="preference-item">
          <div>
            <h3>Date Format</h3>
            <p>Choose how dates should appear.</p>
          </div>

          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
          >
            <option value="DD/MM/YYYY">
              DD/MM/YYYY
            </option>

            <option value="MM/DD/YYYY">
              MM/DD/YYYY
            </option>

            <option value="YYYY-MM-DD">
              YYYY-MM-DD
            </option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default Preferences;