import "./PersonalInfo.css";

function PersonalInfo() {
  const user = {
    fullName: "Piyush Sharma",
    email: "piyush@example.com",
    phone: "+91 9876543210",
    country: "India",
    city: "Nashik",
  };

  return (
    <div className="personal-info-card">

      <h2>Personal Information</h2>

      <div className="info-grid">

        <div className="info-item">
          <span>Full Name</span>
          <p>{user.fullName}</p>
        </div>

        <div className="info-item">
          <span>Email</span>
          <p>{user.email}</p>
        </div>

        <div className="info-item">
          <span>Phone</span>
          <p>{user.phone}</p>
        </div>

        <div className="info-item">
          <span>Country</span>
          <p>{user.country}</p>
        </div>

        <div className="info-item">
          <span>City</span>
          <p>{user.city}</p>
        </div>

      </div>

    </div>
  );
}

export default PersonalInfo;