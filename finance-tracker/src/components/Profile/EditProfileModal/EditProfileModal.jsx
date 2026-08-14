import { useState } from "react";
import "./EditProfileModal.css";

function EditProfileModal({
  showModal,
  setShowModal,
  profile,
  setProfile,
}) {
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [occupation, setOccupation] = useState(
    profile?.occupation || ""
  );
  const [location, setLocation] = useState(
    profile?.location || ""
  );

  if (!showModal) return null;

  const handleSave = () => {
    if (!name || !email) {
      alert("Name and email are required.");
      return;
    }

    setProfile({
      name,
      email,
      phone,
      occupation,
      location,
    });

    setShowModal(false);
  };

  const handleCancel = () => {
    setName(profile?.name || "");
    setEmail(profile?.email || "");
    setPhone(profile?.phone || "");
    setOccupation(profile?.occupation || "");
    setLocation(profile?.location || "");

    setShowModal(false);
  };

  return (
    <div className="edit-profile-overlay">

      <div className="edit-profile-modal">

        <div className="edit-profile-header">
          <h2>Edit Profile</h2>

          <button
            className="close-btn"
            onClick={handleCancel}
          >
            ×
          </button>
        </div>

        <div className="edit-profile-form">

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Occupation</label>

            <input
              type="text"
              value={occupation}
              onChange={(e) =>
                setOccupation(e.target.value)
              }
              placeholder="Enter your occupation"
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              placeholder="Enter your location"
            />
          </div>

        </div>

        <div className="edit-profile-actions">

          <button
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditProfileModal;