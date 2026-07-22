import "./TopCategories.css";

const categories = [
  {
    name: "Food",
    amount: 15000,
  },
  {
    name: "Shopping",
    amount: 8000,
  },
  {
    name: "Travel",
    amount: 6000,
  },
  {
    name: "Entertainment",
    amount: 3500,
  },
];

function TopCategories() {
  return (
    <div className="top-category-card">

      <h2>Top Spending Categories</h2>

      {categories.map((item) => (
        <div
          className="category-row"
          key={item.name}
        >
          <span>{item.name}</span>

          <strong>
            ₹{item.amount.toLocaleString("en-IN")}
          </strong>
        </div>
      ))}

    </div>
  );
}

export default TopCategories;