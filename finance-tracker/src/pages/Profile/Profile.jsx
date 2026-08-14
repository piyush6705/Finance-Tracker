import { useState } from "react";
import { useFinance } from "../../hooks/useFinance";

import Layout from "../../components/Layout/Layout";

import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import PersonalInfo from "../../components/Profile/PersonalInfo/PersonalInfo";
import AccountInfo from "../../components/Profile/AccountInfo/AccountInfo";
import FinancialOverview from "../../components/Profile/FinancialOverview/FinancialOverview";
import EditProfileModal from "../../components/Profile/EditProfileModal/EditProfileModal";

import "./Profile.css";

function Profile() {
  const { incomes, expenses, budgets } = useFinance();

  const [showEditModal, setShowEditModal] = useState(false);

  const [profile, setProfile] = useState({
    name: "Piyush",
    email: "piyush@example.com",
    phone: "",
    occupation: "Student",
    location: "India",
  });

  // -----------------------------
  // Financial calculations
  // -----------------------------

  const totalIncome = incomes.reduce(
    (sum, income) => sum + Number(income.amount || 0),
    0
  );

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount || 0),
    0
  );

  const balance = totalIncome - totalExpense;

  const totalBudget = budgets.reduce(
    (sum, budget) => sum + Number(budget.limit || budget.amount || 0),
    0
  );

  const totalTransactions =
    incomes.length + expenses.length;

  return (
    <Layout>

      <div className="profile-page">

        {/* Profile Card */}

        <ProfileCard
          name={profile.name}
          email={profile.email}
          onEdit={() => setShowEditModal(true)}
        />

        {/* Personal Information */}

        <PersonalInfo
          phone={profile.phone || "Not provided"}
          occupation={profile.occupation || "Not provided"}
          location={profile.location || "Not provided"}
        />

        {/* Account Information */}

        <AccountInfo
          joinedDate="August 2026"
          totalTransactions={totalTransactions}
          accountType="Personal"
        />

        {/* Financial Overview */}

        <FinancialOverview
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
          totalBudget={totalBudget}
        />

        {/* Edit Profile Modal */}

        <EditProfileModal
          showModal={showEditModal}
          setShowModal={setShowEditModal}
          profile={profile}
          setProfile={setProfile}
        />

      </div>

    </Layout>
  );
}

export default Profile;