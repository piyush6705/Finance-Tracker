import "./ProfileCard.css";

function ProfileCard({ setShowModal }) {
  const user = {
    name: "Piyush Sharma",
    email: "piyush@example.com",
    joined: "July 2026",
  };

  return (
    <div className="profile-card">

      <div className="profile-avatar">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Profile"
        />
      </div>

      <div className="profile-details">

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <span>Member Since {user.joined}</span>

      </div>

      <button
      className="edit-profile-btn"
      onClick={() => setShowModal(true)}
    >
      Edit Profile
    </button>

    </div>
  );
}

export default ProfileCard;