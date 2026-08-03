import "./SavingsGoal.css";

function SavingsGoal({ savings }) {

  const goal = 100000;

  const progress = Math.min(
    (savings / goal) * 100,
    100
  );

  return (
    <div className="savings-goal">

      <div className="goal-header">

        <div>
          <h2>Savings Goal</h2>
          <p>Track your progress</p>
        </div>

        <h3>
          ₹{savings.toLocaleString("en-IN")}
        </h3>

      </div>

      <div className="goal-progress">

        <div
          className="goal-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

      <div className="goal-footer">

        <span>
          Goal:
          ₹{goal.toLocaleString("en-IN")}
        </span>

        <span>
          {progress.toFixed(0)}%
        </span>

      </div>

    </div>
  );
}

export default SavingsGoal;