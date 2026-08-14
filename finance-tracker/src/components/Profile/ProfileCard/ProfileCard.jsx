import "./ProfileCard.css";
import { FaUser, FaEdit } from "react-icons/fa";

function ProfileCard({
  name = "Piyush",
  email = "piyush@example.com",
  onEdit,
}) {
  return (
    <div className="profile-card">

      <div className="profile-avatar">
        <FaUser />
      </div>

      <div className="profile-details">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>

      <button
        className="profile-edit-btn"
        onClick={onEdit}
      >
        <FaEdit />
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileCard;