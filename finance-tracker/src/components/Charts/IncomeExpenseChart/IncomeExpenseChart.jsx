import "./IncomeExpenseChart.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function IncomeExpenseChart({
  incomes = [],
  expenses = [],
}) {

  const totalIncome = incomes.reduce(
    (sum, income) => sum + income.amount,
    0
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const chartData = [
    {
      name: "Income",
      amount: totalIncome,
    },
    {
      name: "Expense",
      amount: totalExpense,
    },
  ];

  return (
    <div className="income-expense-chart">

      <div className="chart-header">
        <h2>Income vs Expense</h2>
        <p>Financial Overview</p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart
          data={chartData}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
          />

          <YAxis />

          <Tooltip
            formatter={(value) => [
              `₹${value.toLocaleString("en-IN")}`,
              "Amount",
            ]}
          />

          <Bar
            dataKey="amount"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default IncomeExpenseChart;