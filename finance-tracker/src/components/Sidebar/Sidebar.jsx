import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Income", path: "/income" },
    { name: "Expenses", path: "/expenses" },
    { name: "Budgets", path: "/budgets" },
    { name: "Analytics", path: "/analytics" },
    { name: "Profile", path: "/profile" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path} 
              className={({isActive}) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;