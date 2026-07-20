import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul>
        <li>Dashboard</li>
        <li>Income</li>
        <li>Expenses</li>
        <li>Budgets</li>
        <li>Analytics</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;