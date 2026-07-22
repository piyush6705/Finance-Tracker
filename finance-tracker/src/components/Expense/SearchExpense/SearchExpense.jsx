import "./SearchExpense.css";
import { FaSearch } from "react-icons/fa";

function SearchIncome({ search, setSearch }) {
  return (
    <div className="search-income">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search income..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchIncome;