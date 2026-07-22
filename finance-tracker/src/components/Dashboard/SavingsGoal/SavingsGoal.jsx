import "./SavingsGoal.css";

const savings = {
  goal: "Buy a MacBook Pro",
  targetAmount: 100000,
  savedAmount: 60000,
};

function SavingsGoal() {

  const progress = Math.round(
    (savings.savedAmount / savings.targetAmount) * 100
  );

  return (
    <div className="savings-card">

      <h2>Savings Goal</h2>
      <div className="goal-info">
        <h3>{savings.goal}</h3>

        <p>
          ₹{savings.savedAmount.toLocaleString("en-IN")}
          {" / "}
          ₹{savings.targetAmount.toLocaleString("en-IN")}
        </p>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>
      <p>{progress}% Completed</p>
    </div>
  );
}

export default SavingsGoal;