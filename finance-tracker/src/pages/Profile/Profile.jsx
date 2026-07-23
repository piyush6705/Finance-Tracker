import "./Profile.css";

import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import PersonalInfo from "../../components/Profile/PersonalInfo/PersonalInfo";
import AccountInfo from "../../components/Profile/AccountInfo/AccountInfo";
import FinancialOverview from "../../components/Profile/FinancialOverview/FinancialOverview";
import EditProfileModal from "../../components/Profile/EditProfileModal/EditProfileModal";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>

      <div className="profile-page">

        <h1>Profile</h1>

        <ProfileCard
          setShowModal={setShowModal}
        />

        <PersonalInfo />

        <AccountInfo />

        <FinancialOverview />

        <EditProfileModal
          showModal={showModal}
          setShowModal={setShowModal}
        />

      </div>

    </Layout>
  );
}

export default Profile;