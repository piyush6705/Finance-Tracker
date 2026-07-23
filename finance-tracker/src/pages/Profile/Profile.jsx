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

        <h1>Profile</h1>

        <ProfileCard />

        <PersonalInfo />

        <AccountInfo />

        <FinancialOverview />

      </div>

    </Layout>
  );
}

export default Profile;