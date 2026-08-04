import "./SavingsGoal.css";

function SavingsGoal({
  savings = 0,
}) {

  const goal = 50000;

  const progress = Math.min(
    (savings / goal) * 100,
    100
  );

  const remaining = Math.max(
    goal - savings,
    0
  );

  return (

    <div className="savings-goal">

      <div className="goal-header">

        <h2>Savings Goal</h2>

        <p>Track your financial target</p>

      </div>

      <div className="goal-info">

        <div>

          <span>Goal</span>

          <h3>
            ₹{goal.toLocaleString("en-IN")}
          </h3>

        </div>

        <div>

          <span>Saved</span>

          <h3>
            ₹{savings.toLocaleString("en-IN")}
          </h3>

        </div>

        <div>

          <span>Remaining</span>

          <h3>
            ₹{remaining.toLocaleString("en-IN")}
          </h3>

        </div>

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
          {progress.toFixed(0)}% Completed
        </span>

        {
          progress >= 100 && (
            <span className="goal-complete">
              🎉 Goal Achieved!
            </span>
          )
        }

      </div>

    </div>

  );

}

export default SavingsGoal;