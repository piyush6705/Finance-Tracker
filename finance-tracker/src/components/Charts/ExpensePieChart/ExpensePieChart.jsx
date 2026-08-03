import "./ExpensePieChart.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7",
  "#F43F5E",
  "#14B8A6",
  "#6366F1",
];

function ExpensePieChart({ expenses = [] }) {

  // Group expenses by category
  const expenseData = expenses.reduce((acc, expense) => {

    const existing = acc.find(
      (item) => item.name === expense.category
    );

    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({
        name: expense.category,
        value: expense.amount,
      });
    }

    return acc;

  }, []);

  return (
    <div className="chart-card">

      <h2>Expense Breakdown</h2>

      {
        expenseData.length === 0 ? (

          <p className="empty-chart">
            No expense data available.
          </p>

        ) : (

          <div className="chart-wrapper">

            <ResponsiveContainer
              width="70%"
              height={350}
            >

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
                      key={entry.name}
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

                <div
                  className="legend-item"
                  key={item.name}
                >

                  <span
                    className="legend-color"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
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

        )
      }

    </div>
  );
}

export default ExpensePieChart;