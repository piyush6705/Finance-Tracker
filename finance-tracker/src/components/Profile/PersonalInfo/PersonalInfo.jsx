import "./PersonalInfo.css";
import { FaPhone, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

function PersonalInfo({
  phone = "Not provided",
  occupation = "Not provided",
  location = "Not provided",
}) {
  return (
    <div className="personal-info">

      <div className="section-header">
        <h2>Personal Information</h2>
        <p>Your personal details</p>
      </div>

      <div className="personal-info-grid">

        <div className="info-item">
          <div className="info-icon">
            <FaPhone />
          </div>

          <div>
            <span>Phone</span>
            <strong>{phone}</strong>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <FaBriefcase />
          </div>

          <div>
            <span>Occupation</span>
            <strong>{occupation}</strong>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>

          <div>
            <span>Location</span>
            <strong>{location}</strong>
          </div>
        </div>

      </div>

    </div>
  );
}

export default PersonalInfo;