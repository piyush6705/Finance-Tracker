import Dashboard from "./pages/Dashboard/Dashboard";
import Income from "./pages/Income/Income";
import Expenses from "./pages/Expenses/Expenses";
import Analytics from "./pages/Analytics/Analytics";
import Budgets from "./pages/Budgets/Budgets";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";

import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    
    <Routes>

      <Route path="/
      " element={<Dashboard />} />

    </Routes>
  )
}

export default App
