import { useState } from "react";
import "./EditProfileModal.css";

function EditProfileModal({
  showModal,
  setShowModal,
}) {

  const [name, setName] = useState("Piyush Sharma");
  const [email, setEmail] = useState("piyush@example.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [country, setCountry] = useState("India");
  const [city, setCity] = useState("Nashik");

  if (!showModal) return null;

  const handleSave = () => {
    console.log({
      name,
      email,
      phone,
      country,
      city,
    });

    setShowModal(false);
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Profile</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e)=>setCountry(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={()=>setShowModal(false)}
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