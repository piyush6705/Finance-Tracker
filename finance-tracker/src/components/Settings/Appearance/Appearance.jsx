import { useState } from "react";
import "./Appearance.css";

function Appearance() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (value) => {
    setTheme(value);

    if (value === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="appearance-settings">

      <div className="settings-section-header">
        <h2>Appearance</h2>
        <p>Customize how your Finance Tracker looks.</p>
      </div>

      <div className="appearance-options">

        <button
          className={`theme-option ${
            theme === "light" ? "active" : ""
          }`}
          onClick={() => handleThemeChange("light")}
        >
          <div className="theme-preview light-preview">
            <div className="preview-header"></div>
            <div className="preview-content">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="theme-info">
            <h3>Light</h3>
            <p>Use the light appearance</p>
          </div>

          <div className="theme-radio">
            {theme === "light" && "✓"}
          </div>
        </button>

        <button
          className={`theme-option ${
            theme === "dark" ? "active" : ""
          }`}
          onClick={() => handleThemeChange("dark")}
        >
          <div className="theme-preview dark-preview">
            <div className="preview-header"></div>
            <div className="preview-content">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="theme-info">
            <h3>Dark</h3>
            <p>Use the dark appearance</p>
          </div>

          <div className="theme-radio">
            {theme === "dark" && "✓"}
          </div>
        </button>

      </div>

    </div>
  );
}

export default Appearance;