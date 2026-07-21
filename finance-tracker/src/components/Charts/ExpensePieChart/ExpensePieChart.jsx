import "./ExpensePieChart.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const expenseData = [
  { name: "Food", value: 12000 },
  { name: "Rent", value: 20000 },
  { name: "Shopping", value: 8000 },
  { name: "Travel", value: 5000 },
  { name: "Entertainment", value: 3000 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7",
];

function ExpensePieChart() {
  return (
    <div className="chart-card">
      <h2>Expense Breakdown</h2>

      <div className="chart-wrapper">
        <ResponsiveContainer width="70%" height={350}>
          <PieChart>
            <Pie
              data={expenseData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              
            >
              {expenseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [
                `₹${value.toLocaleString("en-IN")}`,
                "Amount",
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="custom-legend">
          {expenseData.map((item, index) => (
            <div className="legend-item" key={item.name}>
              <span
                className="legend-color"
                style={{ backgroundColor: COLORS[index] }}
              ></span>

              <span className="legend-name">
                {item.name}
              </span>

              <span className="legend-value">
                ₹{item.value.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpensePieChart;