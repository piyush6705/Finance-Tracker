import "./Appearance.css";

function Appearance() {
  return (
    <div className="appearance-card">

      <h2>Appearance</h2>

      <div className="setting-row">

        <div>
          <h3>Dark Mode</h3>
          <p>Switch between light and dark theme.</p>
        </div>

        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

      </div>

      <div className="setting-row">

        <div>
          <h3>Accent Color</h3>
          <p>Select your preferred theme color.</p>
        </div>

        <select>
          <option>Green</option>
          <option>Blue</option>
          <option>Purple</option>
          <option>Orange</option>
        </select>

      </div>

      <div className="setting-row">

        <div>
          <h3>Font Size</h3>
          <p>Choose your preferred text size.</p>
        </div>

        <select>
          <option>Small</option>
          <option selected>Medium</option>
          <option>Large</option>
        </select>

      </div>

    </div>
  );
}

export default Appearance;