import "./ExpensePieChart.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
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

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            
          >
            {expenseData.map((extry, index) => (
              <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              [`₹${value.toLocaleString("en-IN")}`, "Amount"]
            }
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;