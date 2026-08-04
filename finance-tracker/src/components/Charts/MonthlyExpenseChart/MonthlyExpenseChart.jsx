import "./MonthlyExpenseChart.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function MonthlyExpenseChart({ expenses = [] }) {

  const monthNames = [
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

  const monthlyData = Array(12)
    .fill(0)
    .map((_, index) => ({
      month: monthNames[index],
      amount: 0,
    }));

  expenses.forEach((expense) => {

    if (!expense.date) return;

    const month = new Date(expense.date).getMonth();

    monthlyData[month].amount += expense.amount;

  });

  return (

    <div className="monthly-chart">

      <div className="monthly-header">

        <h2>Monthly Expenses</h2>

        <p>Your spending throughout the year</p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart
          data={monthlyData}
        >

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip
            formatter={(value)=>[
              `₹${value.toLocaleString("en-IN")}`,
              "Expense",
            ]}
          />

          <Bar
            dataKey="amount"
            fill="#ef4444"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default MonthlyExpenseChart;
