import "./About.css";

function About() {
  return (
    <div className="about-card">

      <h2>About</h2>

      <div className="about-row">

        <span>Application</span>

        <strong>Finance Tracker</strong>

      </div>

      <div className="about-row">

        <span>Version</span>

        <strong>v1.0.0</strong>

      </div>

      <div className="about-row">

        <span>Developer</span>

        <strong>Piyush Sharma</strong>

      </div>

      <div className="about-row">

        <span>Built With</span>

        <strong>React + Vite</strong>

      </div>

      <div className="about-row">

        <span>License</span>

        <strong>MIT</strong>

      </div>

      <div className="about-row">

        <span>Support</span>

        <button className="contact-btn">
          Contact Developer
        </button>

      </div>

    </div>
  );
}

export default About;