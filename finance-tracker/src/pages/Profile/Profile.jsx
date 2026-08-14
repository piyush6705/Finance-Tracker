import "./Profile.css";

import Layout from "../../components/Layout/Layout";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import PersonalInfo from "../../components/Profile/PersonalInfo/PersonalInfo";

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

      </div>
    </Layout>
  );
}

export default Profile;