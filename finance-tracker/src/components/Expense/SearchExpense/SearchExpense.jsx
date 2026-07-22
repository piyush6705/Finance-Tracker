import "./SearchExpense.css";
import { FaSearch } from "react-icons/fa";

function SearchExpense({ search, setSearch }) {
  return (
    <div className="search-income">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search Expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchExpense;