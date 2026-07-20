import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/income">Income</NavLink>
        </li>

        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>

        <li>
          <NavLink to="/budgets">Budgets</NavLink>
        </li>

        <li>
          <NavLink to="/analytics">Analytics</NavLink>
        </li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>

        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;