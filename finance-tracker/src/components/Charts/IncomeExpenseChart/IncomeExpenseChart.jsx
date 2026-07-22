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
        <BarChart data={data}  barGap={8}
         barCategoryGap="25%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#64748b" }} />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fill: "#64748b" }}
          />
          <Tooltip
            formatter={(value) => `₹${value.toLocaleString("en-IN")}`}
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
          />
          <Legend verticalAlign="top" align="right" />
          <Bar
              dataKey="income"
              fill="#77f1a3"
              radius={[8,8,0,0]}
          />

          <Bar
              dataKey="expense"
              fill="#ea8686"
              radius={[10,10,0,0]}
          />
        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default IncomeExpenseChart;