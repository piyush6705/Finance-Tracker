import "./SearchExpense.css";

function SearchExpense({ search, setSearch }) {
  return (
    <div className="search-expense">
      <input
        type="text"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchExpense;