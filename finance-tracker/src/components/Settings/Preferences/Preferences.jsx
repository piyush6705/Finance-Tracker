import "./Preferences.css";

function Preferences() {
  return (
    <div className="preferences-card">

      <h2>Preferences</h2>

      <div className="preference-row">

        <div>
          <h3>Currency</h3>
          <p>Select your preferred currency.</p>
        </div>

        <select>
          <option>Indian Rupee (₹)</option>
          <option>US Dollar ($)</option>
          <option>Euro (€)</option>
          <option>Pound (£)</option>
        </select>

      </div>

      <div className="preference-row">

        <div>
          <h3>Language</h3>
          <p>Select your preferred language.</p>
        </div>

        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>

      </div>

      <div className="preference-row">

        <div>
          <h3>Date Format</h3>
          <p>Choose how dates should appear.</p>
        </div>

        <select>
          <option>DD/MM/YYYY</option>
          <option>MM/DD/YYYY</option>
          <option>YYYY/MM/DD</option>
        </select>

      </div>

      <div className="preference-row">

        <div>
          <h3>Time Zone</h3>
          <p>Select your local time zone.</p>
        </div>

        <select>
          <option>Asia/Kolkata</option>
          <option>UTC</option>
          <option>America/New_York</option>
          <option>Europe/London</option>
        </select>

      </div>

    </div>
  );
}

export default Preferences;