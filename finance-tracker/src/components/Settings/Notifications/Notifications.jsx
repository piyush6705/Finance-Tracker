import "./Notifications.css";

function Notifications() {
  return (
    <div className="notifications-card">

      <h2>Notifications</h2>

      <div className="notification-row">

        <div>
          <h3>Email Notifications</h3>
          <p>Receive updates and important account emails.</p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>

      </div>

      <div className="notification-row">

        <div>
          <h3>Budget Alerts</h3>
          <p>Notify me when I'm close to my budget limit.</p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>

      </div>

      <div className="notification-row">

        <div>
          <h3>Monthly Reports</h3>
          <p>Receive a monthly financial summary.</p>
        </div>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

      </div>

      <div className="notification-row">

        <div>
          <h3>Push Notifications</h3>
          <p>Allow notifications inside the application.</p>
        </div>

        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>

      </div>

    </div>
  );
}

export default Notifications;