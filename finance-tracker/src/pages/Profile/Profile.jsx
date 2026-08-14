import "./Profile.css";

import Layout from "../../components/Layout/Layout";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import PersonalInfo from "../../components/Profile/PersonalInfo/PersonalInfo";
import AccountInfo from "../../components/Profile/AccountInfo/AccountInfo";
import FinancialOverview from "../../components/Profile/FinancialOverview/FinancialOverview";

function Profile() {
  return (
    <Layout>
      <div className="profile-page">

        <ProfileCard
          name="Piyush"
          email="piyush@example.com"
          onEdit={() => alert("Edit profile clicked")}
        />
        <PersonalInfo
          phone="+91 XXXXX XXXXX"
          occupation="Student"
          location="India"
        />
        <AccountInfo
          joinedDate="August 2026"
          totalTransactions={0}
          accountType="Personal"
        />
        <FinancialOverview
          totalIncome={25000}
          totalExpense={12000}
          balance={13000}
          totalBudget={15000}
        />

      </div>
    </Layout>
  );
}

export default Profile;