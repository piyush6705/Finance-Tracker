
import Layout from "../../components/Layout/Layout";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import "./Dashboard.css";
import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaPiggyBank,
} from "react-icons/fa";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import ExpensePieChart from "../../components/Charts/ExpensePieChart/ExpensePieChart";
import IncomeExpenseChart from "../../components/Charts/IncomeExpenseChart/IncomeExpenseChart";
import SavingsGoal from "../../components/Dashboard/SavingsGoal/SavingsGoal";
import BudgetProgress from "../../components/Dashboard/BudgetProgress/BudgetProgress";

const summaryData = [
  {
    title: "Income",
    amount: 50000,
    icon: <FaArrowUp />,
    color: "#4CAF50",
  },
  {
    title: "Expenses",
    amount: 25000,
    icon: <FaArrowDown />,
    color: "#F44336",
  },
  {
    title: "Balance",
    amount: 25000,
    icon: <FaWallet />,
    color: "#2196F3",
  },
  {
    title: "Savings",
    amount: 10000,
    icon: <FaPiggyBank />,
    color: "#FF9800",
  },
];

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="cards">
          {summaryData.map((card) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              amount={card.amount}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
        <div className="dashboard-grid">
          <RecentTransactions />
          <ExpensePieChart />
        </div>
        <IncomeExpenseChart />
        <SavingsGoal />
        <BudgetProgress />

      </div>
     </Layout>
  );
}

export default Dashboard;