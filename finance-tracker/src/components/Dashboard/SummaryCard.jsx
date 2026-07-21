import "./SummaryCard.css";

function SummaryCard({title, amount, icon, color}) {
  return (
    <div 
      className="summary-card">
        <div 
          className="card-icon"
          style={{backgroundColor: color}}
        >
          {icon}
        </div>

        <div className="card-info">
          <h4>{title}</h4>
          <h2>{amount}</h2>
        </div>
      </div>
  );
}

export default SummaryCard;