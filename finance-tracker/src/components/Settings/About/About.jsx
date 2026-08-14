import "./About.css";

function About() {
  return (
    <div className="about-settings">

      <div className="settings-section-header">
        <h2>About</h2>
        <p>Information about your Finance Tracker.</p>
      </div>

      <div className="about-content">

        <div className="about-logo">
          💰
        </div>

        <h1>Finance Tracker</h1>

        <p className="about-description">
          A simple personal finance application that helps
          you track your income, expenses, budgets, and
          overall financial activity.
        </p>

        <div className="about-details">

          <div className="about-detail">
            <span>Version</span>
            <strong>1.0.0</strong>
          </div>

          <div className="about-detail">
            <span>Built With</span>
            <strong>React</strong>
          </div>

          <div className="about-detail">
            <span>Currency</span>
            <strong>Indian Rupee (₹)</strong>
          </div>

        </div>

        <p className="about-footer">
          Built for personal financial management.
        </p>

      </div>

    </div>
  );
}

export default About;