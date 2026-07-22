import "./SearchBudget.css";
import { FaSearch } from "react-icons/fa";

function SearchBudget({ search, setSearch }) {
  return (
    <div className="search-income">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search Budget..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBudget;