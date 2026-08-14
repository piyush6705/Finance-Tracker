import "./Profile.css";

import Layout from "../../components/Layout/Layout";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";

function Profile() {
  return (
    <Layout>
      <div className="profile-page">

        <ProfileCard
          name="Piyush"
          email="piyush@example.com"
          onEdit={() => alert("Edit profile clicked")}
        />

      </div>
    </Layout>
  );
}

export default Profile;