import "./MonthlyExpenseChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", expense: 32000 },
  { month: "Feb", expense: 35000 },
  { month: "Mar", expense: 30000 },
  { month: "Apr", expense: 42000 },
  { month: "May", expense: 38000 },
  { month: "Jun", expense: 45000 },
];

function MonthlyExpenseChart() {
  return (
    <div className="monthly-chart-card">

      <h2>Monthly Expense Trend</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default MonthlyExpenseChart;