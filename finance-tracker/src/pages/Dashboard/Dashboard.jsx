
import Layout from "../../components/Layout/Layout";
import SummaryCard from "../../components/Dashboard/SummaryCard";
import "./Dashboard.css";
import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaPiggyBank,
} from "react-icons/fa";


function Dashboard() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="cards">

          <SummaryCard
            title="Income"
            amount={50000}
            icon={<FaArrowUp />}
            color="#4CAF50"
          />

          <SummaryCard
            title="Expenses"
            amount={25000}
            icon={<FaArrowDown />}
            color="#F44336"
          />

          <SummaryCard
            title="Balance"
            amount={25000}
            icon={<FaWallet />}
            color="#2196F3"
          />

          <SummaryCard
            title="Savings"
            amount={10000}
            icon={<FaPiggyBank />}
            color="#FF9800"
          />

        </div>
      </div>
     </Layout>
  );
}

export default Dashboard;