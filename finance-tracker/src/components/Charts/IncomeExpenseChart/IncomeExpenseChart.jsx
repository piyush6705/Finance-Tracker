import "./IncomeExpenseChart.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    income: 50000,
    expense: 32000,
  },
  {
    month: "Feb",
    income: 55000,
    expense: 35000,
  },
  {
    month: "Mar",
    income: 48000,
    expense: 30000,
  },
  {
    month: "Apr",
    income: 60000,
    expense: 42000,
  },
  {
    month: "May",
    income: 58000,
    expense: 38000,
  },
  {
    month: "Jun",
    income: 62000,
    expense: 45000,
  },
];

function IncomeExpenseChart() {
  return (
    <div className="bar-chart-card">

      <h2>Income vs Expense</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) =>
              `₹${value.toLocaleString("en-IN")}`
            }
          />
          <Legend />
          <Bar
              dataKey="income"
              fill="#77f1a3"
              radius={[8,8,0,0]}
          />

          <Bar
              dataKey="expense"
              fill="#ea8686"
              radius={[8,8,0,0]}
          />
        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default IncomeExpenseChart;