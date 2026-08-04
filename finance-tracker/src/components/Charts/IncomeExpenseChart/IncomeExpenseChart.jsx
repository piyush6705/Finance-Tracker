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

function IncomeExpenseChart({
  incomes = [],
  expenses = [],
}) {

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = months.map((month, index) => {

    const income = incomes
      .filter(
        (item) =>
          new Date(item.date).getMonth() === index
      )
      .reduce(
        (sum, item) => sum + item.amount,
        0
      );

    const expense = expenses
      .filter(
        (item) =>
          new Date(item.date).getMonth() === index
      )
      .reduce(
        (sum, item) => sum + item.amount,
        0
      );

    return {
      month,
      Income: income,
      Expense: expense,
    };

  });

  return (

    <div className="income-expense-chart">

      <div className="chart-header">

        <h2>Monthly Income vs Expense</h2>

        <p>
          Compare your monthly cash flow
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <BarChart
          data={chartData}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip
            formatter={(value) => [
              `₹${Number(value).toLocaleString("en-IN")}`,
            ]}
          />

          <Legend />

          <Bar
            dataKey="Income"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />

          <Bar
            dataKey="Expense"
            fill="#ef4444"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );
}

export default IncomeExpenseChart;
